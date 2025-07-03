import React, { useState, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
}

const CursorTrail: React.FC = () => {
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPoints(prevPoints => [...prevPoints, { x: e.clientX, y: e.clientY }]);
      // Prune the points array to avoid performance issues
      if (points.length > 20) {
        setPoints(points.slice(points.length - 20));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [points]); // Re-attach listener if points array structure changes

  return (
    <>
      {points.map((point, index) => (
        <div
          key={index}
          className="cursor-trail"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            // Fade out the oldest points
            opacity: (index / points.length) * 0.5,
            // Make the trailing points smaller
            transform: `scale(${(index / points.length)})`,
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;