import type { OverlayShapeColor } from "../animated-overlay.types";

export const SHAPE_TYPES = ["circle", "square"] as const;
export const SHAPE_COLORS = ["dark", "light"] as OverlayShapeColor[];
export const SHAPES_COUNT = 15;

export const SHAPE_MIN_SIZE = 150;
export const SHAPE_MAX_SIZE = 400;

export const SHAPE_MIN_DISTANCE = 25;
export const SHAPE_MAX_ATTEMPTS = 60;

export const SHAPE_POSITION_MIN = -5;
export const SHAPE_POSITION_MAX = 105;