const GradualBlur = ({ position = 'bottom', className = '' }) => {
  return <div className={`gradual-blur gradual-blur-${position} ${className}`} aria-hidden="true" />;
};

export default GradualBlur;
