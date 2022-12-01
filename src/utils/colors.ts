type THexToRGBA = (hex: string, alpha: number) => string
type TBlackOrWhiteByContrast = (hex: string) => 'black' | 'white'
type THexToRGB = (hex: string) => { r: number; g: number; b: number }

export const hexToRGBA: THexToRGBA = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  return alpha
    ? 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
    : 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

export const hexToRgb: THexToRGB = hex => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  return { r, g, b }
}

export const blackOrWhiteByContrast: TBlackOrWhiteByContrast = hex => {
  const { r, g, b } = hexToRgb(hex)

  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'
}
