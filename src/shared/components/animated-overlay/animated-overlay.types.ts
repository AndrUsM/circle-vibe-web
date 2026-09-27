export interface OverlayShape {
    id: string;
    x: number;
    y: number;
    size: number;
    rotation: number;
    type: string;
    messages: string[];
}
export type OverlayShapeColor = 'dark' | 'light';
