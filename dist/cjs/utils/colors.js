"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blackOrWhiteByContrast = exports.hexToRgb = exports.hexToRGBA = void 0;
const hexToRGBA = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return alpha
        ? 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
        : 'rgb(' + r + ', ' + g + ', ' + b + ')';
};
exports.hexToRGBA = hexToRGBA;
const hexToRgb = hex => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
};
exports.hexToRgb = hexToRgb;
const blackOrWhiteByContrast = hex => {
    const { r, g, b } = (0, exports.hexToRgb)(hex);
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white';
};
exports.blackOrWhiteByContrast = blackOrWhiteByContrast;
//# sourceMappingURL=colors.js.map