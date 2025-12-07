import React, { useEffect, useState } from 'react';

const pad = (n: number) => String(n).padStart(2, '0');

const Chrono: React.FC = () => {
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const diff = Math.floor((Date.now() - start) / 1000);
      setSecondsElapsed(diff);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(secondsElapsed / 3600);
  const minutes = Math.floor((secondsElapsed % 3600) / 60);
  const seconds = secondsElapsed % 60;

  return (
    <div className="chrono">
      <div className="label-chrono">
        he’s staying
      </div>
      <div className="d-flex flex-column">
        <span className='label'>HOURS</span>
        <span className="chrono-part">{pad(hours)}</span>
      </div>
      
      <span className="chrono-sep">:</span>
      <div className="d-flex flex-column">
        <span className='label'>MIN</span>
        <span className="chrono-part">{pad(minutes)}</span>
      </div>
      <span className="chrono-sep">:</span>
      <div className="d-flex flex-column">
        <span className='label'>SEC</span>
        <span className="chrono-part">{pad(seconds)}</span>
      </div>
    </div>
  );
};

export default Chrono;
