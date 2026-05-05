const LaserFlow = ({ className = '' }) => {
  return (
    <div className={`laser-flow ${className}`} aria-hidden="true">
      <span className="laser-beam laser-beam-a" />
      <span className="laser-beam laser-beam-b" />
      <span className="laser-beam laser-beam-c" />
    </div>
  );
};

export default LaserFlow;
