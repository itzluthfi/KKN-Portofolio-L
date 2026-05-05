import { useEffect, useState } from "react";

const bootSteps = [
  "mounting portfolio shell",
  "syncing github activity",
  "warming 3D lanyard",
  "painting interface",
];

const PreLoader = () => {
  const [progress, setProgress] = useState(0);
  const [closing, setClosing] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const progressTimer = window.setInterval(() => {
      setProgress(value => Math.min(value + Math.floor(Math.random() * 12) + 7, 100));
    }, 150);

    const closeTimer = window.setTimeout(() => setClosing(true), 1750);
    const removeTimer = window.setTimeout(() => setVisible(false), 2350);

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(closeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  const activeStep = Math.min(Math.floor(progress / 28), bootSteps.length - 1);

  return (
    <div className={`preloader ${closing ? "preloader-leave" : ""}`}>
      <div className="preloader-grid" />
      <div className="preloader-laser" />
      <div className="preloader-orbit">
        <span />
        <span />
        <span />
      </div>

      <div className="preloader-panel">
        <div className="preloader-brand">
          <span>LS</span>
          <div>
            <strong>Luthfi Shidqi</strong>
            <small>System Admin / IT Support / Frontend</small>
          </div>
        </div>

        <div className="preloader-terminal">
          <div className="preloader-window">
            <span />
            <span />
            <span />
          </div>
          {bootSteps.map((step, index) => (
            <p className={index <= activeStep ? "is-active" : ""} key={step}>
              <b>{index <= activeStep ? "OK" : ".."}</b>
              {step}
            </p>
          ))}
        </div>

        <div className="preloader-progress">
          <div style={{ width: `${progress}%` }} />
        </div>
        <div className="preloader-meta">
          <span>booting experience</span>
          <strong>{progress}%</strong>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
