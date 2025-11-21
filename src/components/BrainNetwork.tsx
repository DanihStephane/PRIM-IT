import React from 'react';

interface BrainNetworkProps {
  animated?: boolean;
}

const BrainNetwork: React.FC<BrainNetworkProps> = ({ animated = true }) => {
  return (
    <div className={`brain-network position-relative ${animated ? 'is-animated' : ''}`.trim()}>
      <svg
        viewBox="0 0 320 240"
        className="w-100 h-100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Brain outline */}
        <path
          d="M160 40C120 40 90 60 80 90C70 120 80 150 100 170C120 190 140 200 160 200C180 200 200 190 220 170C240 150 250 120 240 90C230 60 200 40 160 40Z"
          stroke="url(#brainGradient-${Math.random()})"
          strokeWidth="2"
          fill="rgba(0, 180, 216, 0.05)"
        />

        {/* Network nodes */}
        <circle cx="100" cy="80" r="3" fill="#00B4D8" className={animated ? 'brain-node' : undefined} style={{ animationDelay: '0s' }} />
        <circle cx="140" cy="70" r="4" fill="#E91E63" className={animated ? 'brain-node' : undefined} style={{ animationDelay: '0.5s' }} />
        <circle cx="180" cy="85" r="3" fill="#00B4D8" className={animated ? 'brain-node' : undefined} style={{ animationDelay: '1s' }} />
        <circle cx="220" cy="90" r="3" fill="#7C3AED" className={animated ? 'brain-node' : undefined} style={{ animationDelay: '1.5s' }} />
        <circle cx="120" cy="110" r="3" fill="#E91E63" className={animated ? 'brain-node' : undefined} style={{ animationDelay: '2s' }} />
        <circle cx="160" cy="100" r="5" fill="#00B4D8" className={animated ? 'brain-node' : undefined} style={{ animationDelay: '2.5s' }} />
        <circle cx="200" cy="120" r="3" fill="#7C3AED" className={animated ? 'brain-node' : undefined} style={{ animationDelay: '3s' }} />
        <circle cx="110" cy="140" r="3" fill="#00B4D8" className={animated ? 'brain-node' : undefined} style={{ animationDelay: '3.5s' }} />
        <circle cx="160" cy="130" r="4" fill="#E91E63" className={animated ? 'brain-node' : undefined} style={{ animationDelay: '4s' }} />
        <circle cx="210" cy="150" r="3" fill="#7C3AED" className={animated ? 'brain-node' : undefined} style={{ animationDelay: '4.5s' }} />
        <circle cx="130" cy="170" r="3" fill="#00B4D8" className={animated ? 'brain-node' : undefined} style={{ animationDelay: '5s' }} />
        <circle cx="190" cy="180" r="3" fill="#E91E63" className={animated ? 'brain-node' : undefined} style={{ animationDelay: '5.5s' }} />

        {/* Connection lines */}
        <line x1="100" y1="80" x2="140" y2="70" stroke="#00B4D8" strokeWidth="1" opacity="0.6" className={animated ? 'brain-link' : undefined} />
        <line x1="140" y1="70" x2="180" y2="85" stroke="#E91E63" strokeWidth="1" opacity="0.6" className={animated ? 'brain-link' : undefined} />
        <line x1="180" y1="85" x2="220" y2="90" stroke="#7C3AED" strokeWidth="1" opacity="0.6" className={animated ? 'brain-link' : undefined} />
        <line x1="120" y1="110" x2="160" y2="100" stroke="#00B4D8" strokeWidth="1" opacity="0.6" className={animated ? 'brain-link' : undefined} />
        <line x1="160" y1="100" x2="200" y2="120" stroke="#E91E63" strokeWidth="1" opacity="0.6" className={animated ? 'brain-link' : undefined} />
        <line x1="110" y1="140" x2="160" y2="130" stroke="#7C3AED" strokeWidth="1" opacity="0.6" className={animated ? 'brain-link' : undefined} />
        <line x1="160" y1="130" x2="210" y2="150" stroke="#00B4D8" strokeWidth="1" opacity="0.6" className={animated ? 'brain-link' : undefined} />
        <line x1="130" y1="170" x2="190" y2="180" stroke="#E91E63" strokeWidth="1" opacity="0.6" className={animated ? 'brain-link' : undefined} />
        <line x1="100" y1="80" x2="120" y2="110" stroke="#7C3AED" strokeWidth="1" opacity="0.4" className={animated ? 'brain-link' : undefined} />
        <line x1="140" y1="70" x2="160" y2="100" stroke="#00B4D8" strokeWidth="1" opacity="0.4" className={animated ? 'brain-link' : undefined} />
        <line x1="180" y1="85" x2="160" y2="130" stroke="#E91E63" strokeWidth="1" opacity="0.4" className={animated ? 'brain-link' : undefined} />

        {/* Gradient definitions */}
        <defs>
          <linearGradient id={`brainGradient-${Math.random()}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B4D8" />
            <stop offset="50%" stopColor="#E91E63" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BrainNetwork;