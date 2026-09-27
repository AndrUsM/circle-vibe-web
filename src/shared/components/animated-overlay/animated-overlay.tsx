import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';

import type { OverlayShape } from './animated-overlay.types';
import { getOverlayShapes } from './animated-overlay.utils';

import './animated-overlay.styles.scss';

export const AnimatedOverlay = (): ReactElement => {
  const [shapes, setShapes] = useState<OverlayShape[]>(getOverlayShapes());
  const animationUpdateInternvalMs = 60_000;

  console.log(shapes)

  const updateShapes = () => {
    setShapes(getOverlayShapes());
  };

  useEffect(() => {
    const intervalSubscription = setInterval(() => updateShapes(), animationUpdateInternvalMs);
    return () => clearInterval(intervalSubscription);
  })

  return (
    <section className="animated-overlay">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`animated-overlay__shape animated-overlay__shape--${shape.type}`}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
            transform: `rotate(${shape.rotation}deg)`,
            // @ts-ignore
            '--shape-content': `"${shape.messages.join('\t')}"`
          }}
        />
      ))}
    </section>
  );
};
