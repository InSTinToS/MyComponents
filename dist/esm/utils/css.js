export const pxToRem = (px = 0, base = 16) => `${px / base}rem`;
export const remToPxNumber = (rem, base = 16) => Number(rem.split('r')[0]) * base;
export const remToPx = (rem, base = 16) => Number(rem.split('r')[0]) * base + 'px';
//# sourceMappingURL=css.js.map