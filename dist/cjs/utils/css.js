"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remToPx = exports.remToPxNumber = exports.pxToRem = void 0;
const pxToRem = (px = 0, base = 16) => `${px / base}rem`;
exports.pxToRem = pxToRem;
const remToPxNumber = (rem, base = 16) => Number(rem.split('r')[0]) * base;
exports.remToPxNumber = remToPxNumber;
const remToPx = (rem, base = 16) => Number(rem.split('r')[0]) * base + 'px';
exports.remToPx = remToPx;
//# sourceMappingURL=css.js.map