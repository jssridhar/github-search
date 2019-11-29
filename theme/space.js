const THEME_LENGTH = 32;
const breakpoints = [1280, 1440].map(elem => `${elem}px`);

const baseSize = 8;
const baseSpace = 4;

const sizes = Array.from(Array(THEME_LENGTH)).map(
  (el, index) => baseSize * index
);
const minWidths = Array.from(Array(THEME_LENGTH)).map(
  (el, index) => baseSize * index
);
const maxWidths = Array.from(Array(THEME_LENGTH)).map(
  (el, index) => baseSize * index
);
const minHeights = Array.from(Array(THEME_LENGTH)).map(
  (el, index) => baseSize * index
);
const maxHeights = Array.from(Array(THEME_LENGTH)).map(
  (el, index) => baseSize * index
);
const heights = Array.from(Array(THEME_LENGTH)).map(
  (el, index) => baseSize * index
);

const space = Array.from(Array(THEME_LENGTH)).map(
  (el, index) => baseSpace * index
);

export default {
  space,
  sizes,
  minWidths,
  maxWidths,
  minHeights,
  maxHeights,
  heights,
  breakpoints
};
