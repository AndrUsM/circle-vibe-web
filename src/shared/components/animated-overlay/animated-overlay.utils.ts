import type { OverlayShape } from "./animated-overlay.types";

import {SHAPE_POSITION_MIN, SHAPE_POSITION_MAX, SHAPE_MIN_SIZE, SHAPE_MAX_SIZE, SHAPE_MIN_DISTANCE, SHAPE_MAX_ATTEMPTS, SHAPE_TYPES, SHAPES_COUNT} from './constants/shape-config';
import { SHAPE_MESSAGE_SAMPLES } from "./constants/shape-message-samples";

const getMessages = (): string[] => {
  const length = 2;
  return Array.from({length }).map(() => SHAPE_MESSAGE_SAMPLES[Math.floor(Math.random() * SHAPE_MESSAGE_SAMPLES.length)])
}

export const getShape = (): OverlayShape => {
  const messages = getMessages();
  const type = SHAPE_TYPES[Math.floor(Math.random() * SHAPE_TYPES.length)];

  return {
    id: crypto.randomUUID(),

    x:
      SHAPE_POSITION_MIN +
      Math.random() * (SHAPE_POSITION_MAX - SHAPE_POSITION_MIN),

    y:
      SHAPE_POSITION_MIN +
      Math.random() * (SHAPE_POSITION_MAX - SHAPE_POSITION_MIN),

    size:
      SHAPE_MIN_SIZE +
      Math.random() * (SHAPE_MAX_SIZE - SHAPE_MIN_SIZE),

    rotation: Math.random() * 360,

    type,
    messages,
  }
};

export const isShapePositionValid = (
  candidate: OverlayShape,
  shapes: OverlayShape[],
  minDistance: number,
): boolean =>
  shapes.every((shape) => {
    const dx = candidate.x - shape.x;
    const dy = candidate.y - shape.y;

    return Math.hypot(dx, dy) >= minDistance;
  });

export const getOverlayShapes = (): OverlayShape[] => {
  return Array.from({ length: SHAPES_COUNT }).reduce<OverlayShape[]>(
    (shapes) => {
      const shape = Array.from({ length: SHAPE_MAX_ATTEMPTS })
        .map(() => getShape())
        .find((candidate) =>
          isShapePositionValid(
            candidate,
            shapes,
            SHAPE_MIN_DISTANCE,
          ),
        );

      return shape ? [...shapes, shape] : shapes;
    },
    [],
  );
};
