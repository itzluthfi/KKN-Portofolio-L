const fs = require('fs');
const path = require('path');
const https = require('https');

const README_URL = 'https://raw.githubusercontent.com/evrstr/live2d-widget-models/master/README.md';
const PREVIEW_DIR = path.join(__dirname, 'public', 'live2d-previews');
const MODELS_FILE = path.join(__dirname, 'src', 'data', 'live2dModels.js');

if (!fs.existsSync(PREVIEW_DIR)) {
  fs.mkdirSync(PREVIEW_DIR, { recursive: true });
}

// Promisified HTTP GET
function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    // some images might be http or have redirects, but we assume simple direct raw github urls
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Fetching README...');
  const readme = await fetch(README_URL);
  
  // Parse README for models and images
  // Example block:
  // 0.koharu
  // ![image](https://raw.githubusercontent.com/...)
  const lines = readme.split('\n');
  const modelImages = {};
  
  let currentModel = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    // Look for headings like `0.koharu` or `### 0.koharu`
    const headingMatch = line.match(/^#*\s*\d+\.(.+)$/);
    if (headingMatch) {
      currentModel = headingMatch[1].trim();
    } else if (currentModel && line.startsWith('![')) {
      // Look for image URL
      const imgMatch = line.match(/!\[.*?\]\((.+?)\)/);
      if (imgMatch) {
        let imgUrl = imgMatch[1];
        // Fix relative or blob URLs
        if (imgUrl.includes('/blob/')) {
          imgUrl = imgUrl.replace('/blob/', '/raw/');
        } else if (imgUrl.startsWith('.')) {
          imgUrl = 'https://raw.githubusercontent.com/evrstr/live2d-widget-models/master/' + imgUrl.replace('./', '');
        } else if (imgUrl.startsWith('/')) {
          imgUrl = 'https://raw.githubusercontent.com/evrstr/live2d-widget-models/master' + imgUrl;
        }
        modelImages[currentModel] = imgUrl;
        currentModel = null; // reset
      }
    }
  }

  console.log(`Found ${Object.keys(modelImages).length} images in README.`);

  // Read existing live2dModels.js
  let modelsCode = fs.readFileSync(MODELS_FILE, 'utf8');
  
  // Download images and update code
  let updatedCount = 0;
  for (const [name, url] of Object.entries(modelImages)) {
    // we need to match the name in our live2dModels.js
    // the name in models js might be exactly `name`
    // Wait, let's just download it as `[name].png`
    const ext = path.extname(url.split('?')[0]) || '.png';
    const filename = `${name.replace(/[^a-zA-Z0-9_-]/g, '_')}${ext}`;
    const dest = path.join(PREVIEW_DIR, filename);
    
    try {
      await downloadImage(url, dest);
      
      // inject into live2dModels.js
      // find `{ name: "name", ... }` and add `preview: "/live2d-previews/filename"`
      const regex = new RegExp(`name:\\s*['"]${name}['"]`);
      if (regex.test(modelsCode)) {
        modelsCode = modelsCode.replace(
          new RegExp(`(name:\\s*['"]${name}['"]\\s*,)`), 
          `$1\n    preview: "/live2d-previews/${filename}",`
        );
        updatedCount++;
        process.stdout.write('.');
      } else {
        process.stdout.write('?');
      }
    } catch (err) {
      console.error(`\nFailed to download ${url}: ${err.message}`);
    }
  }
  
  // write back
  fs.writeFileSync(MODELS_FILE, modelsCode);
  console.log(`\nDone! Downloaded and linked ${updatedCount} previews.`);
}

run();
