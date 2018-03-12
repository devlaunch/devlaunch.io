// Default values
import openColors from './openColors';

const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128],
  fonts: {
    sans:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
  fontWeights: {
    thin: 200,
    normal: 400,
    bold: 700,
  },
  colors: {
    darken: [
      'rgba(0, 0, 0, 0.125)',
      'rgba(0, 0, 0, 0.25)',
      'rgba(0, 0, 0, 0.5)',
      'rgba(0, 0, 0, 0.75)',
    ],
    dark: 'rgba(0, 0, 0, 0.75)',
    ...openColors,
  },
  radii: [0, 2, 4],
};

export default theme;
