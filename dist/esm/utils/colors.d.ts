type THexToRGBA = (hex: string, alpha: number) => string;
type TBlackOrWhiteByContrast = (hex: string) => 'black' | 'white';
type THexToRGB = (hex: string) => {
    r: number;
    g: number;
    b: number;
};
export declare const hexToRGBA: THexToRGBA;
export declare const hexToRgb: THexToRGB;
export declare const blackOrWhiteByContrast: TBlackOrWhiteByContrast;
export {};
