import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Merriweather',
    'Helvetica Neue',
    'sans-serif',
    'Segoe UI',
    'Helvetica',
    'Arial',
  ],
  headerWeight: 700,
  bodyFontFamily: ['Merriweather', 'serif'],
  googleFonts: [
    {
      name: 'Merriweather',
      styles: ['400', '400i', '700', '700i', '900', '900i'],
    },
  ],
})

export default typography
export const rhythm = typography.rhythm
