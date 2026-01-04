/* ===================================================================== */
/*
💾 COLOR DATA - All color variants of with color label.
📚 CONTENT
    1. ColorWheelType - Type for color wheel variants.
    2. COLOR_WHEEL - Record of color wheel variants.
*/

// 🧾 COLOR WHEEL TYPE - The types with all tailwin variants for colors
export type ColorWheelType = {
  text: string; // text-(color)
  background: string; // bg-(color)
  border: string; // border-(color)
  divide: string; // divide-(color)
  ring: string; // ring-(color)
  accent: string; // accent-(color)
  caret: string; // caret-(color)
  shadow: string; // shadow-(color)
  outline: string; // outline-(color)
  decoration: string; // decoration-(color)
  placeholder: string; // placeholder-(color)
  from: string; // from-(color) (gradient start)
  via: string; // via-(color)   (gradient middle)
  to: string; // to-(color)    (gradient end)
  fill: string; // fill-(color)  (SVG fill)
  stroke: string; // stroke-(color) (SVG stroke)
  ringOffset: string; // ring-offset-(color)
};

// 💾 RED COLOR WHEEL - Color wheel variants of red
const redTWName: ColorWheelType = {
  text: "text-cus-red",
  background: "bg-cus-red",
  border: "border-cus-red",
  divide: "divide-cus-red",
  ring: "ring-cus-red",
  accent: "accent-cus-red",
  caret: "caret-cus-red",
  shadow: "shadow-cus-red",
  outline: "outline-cus-red",
  decoration: "decoration-cus-red",
  placeholder: "placeholder-cus-red",
  from: "from-cus-red",
  via: "via-cus-red",
  to: "to-cus-red",
  fill: "fill-cus-red",
  stroke: "stroke-cus-red",
  ringOffset: "ring-offset-cus-red",
};

// 💾 BLUE COLOR WHEEL - Color wheel variants of blue
const blueTWName: ColorWheelType = {
  text: "text-cus-blue",
  background: "bg-cus-blue",
  border: "border-cus-blue",
  divide: "divide-cus-blue",
  ring: "ring-cus-blue",
  accent: "accent-cus-blue",
  caret: "caret-cus-blue",
  shadow: "shadow-cus-blue",
  outline: "outline-cus-blue",
  decoration: "decoration-cus-blue",
  placeholder: "placeholder-cus-blue",
  from: "from-cus-blue",
  via: "via-cus-blue",
  to: "to-cus-blue",
  fill: "fill-cus-blue",
  stroke: "stroke-cus-blue",
  ringOffset: "ring-offset-cus-blue",
};

// 💾 GREEN COLOR WHEEL - Color wheel variants of green
const greenTWName: ColorWheelType = {
  text: "text-cus-green",
  background: "bg-cus-green",
  border: "border-cus-green",
  divide: "divide-cus-green",
  ring: "ring-cus-green",
  accent: "accent-cus-green",
  caret: "caret-cus-green",
  shadow: "shadow-cus-green",
  outline: "outline-cus-green",
  decoration: "decoration-cus-green",
  placeholder: "placeholder-cus-green",
  from: "from-cus-green",
  via: "via-cus-green",
  to: "to-cus-green",
  fill: "fill-cus-green",
  stroke: "stroke-cus-green",
  ringOffset: "ring-offset-cus-green",
};

// 💾 YELLOW COLOR WHEEL - Color wheel variants of yellow
const yellowTWName: ColorWheelType = {
  text: "text-cus-yellow",
  background: "bg-cus-yellow",
  border: "border-cus-yellow",
  divide: "divide-cus-yellow",
  ring: "ring-cus-yellow",
  accent: "accent-cus-yellow",
  caret: "caret-cus-yellow",
  shadow: "shadow-cus-yellow",
  outline: "outline-cus-yellow",
  decoration: "decoration-cus-yellow",
  placeholder: "placeholder-cus-yellow",
  from: "from-cus-yellow",
  via: "via-cus-yellow",
  to: "to-cus-yellow",
  fill: "fill-cus-yellow",
  stroke: "stroke-cus-yellow",
  ringOffset: "ring-offset-cus-yellow",
};

// 💾 PINK COLOR WHEEL - Color wheel variants of pink
const pinkTWName: ColorWheelType = {
  text: "text-cus-pink",
  background: "bg-cus-pink",
  border: "border-cus-pink",
  divide: "divide-cus-pink",
  ring: "ring-cus-pink",
  accent: "accent-cus-pink",
  caret: "caret-cus-pink",
  shadow: "shadow-cus-pink",
  outline: "outline-cus-pink",
  decoration: "decoration-cus-pink",
  placeholder: "placeholder-cus-pink",
  from: "from-cus-pink",
  via: "via-cus-pink",
  to: "to-cus-pink",
  fill: "fill-cus-pink",
  stroke: "stroke-cus-pink",
  ringOffset: "ring-offset-cus-pink",
};

// 💾 ORANGE COLOR WHEEL - Color wheel variants of orange
const orangeTWName: ColorWheelType = {
  text: "text-cus-orange",
  background: "bg-cus-orange",
  border: "border-cus-orange",
  divide: "divide-cus-orange",
  ring: "ring-cus-orange",
  accent: "accent-cus-orange",
  caret: "caret-cus-orange",
  shadow: "shadow-cus-orange",
  outline: "outline-cus-orange",
  decoration: "decoration-cus-orange",
  placeholder: "placeholder-cus-orange",
  from: "from-cus-orange",
  via: "via-cus-orange",
  to: "to-cus-orange",
  fill: "fill-cus-orange",
  stroke: "stroke-cus-orange",
  ringOffset: "ring-offset-cus-orange",
};

// 💾 PURPLE COLOR WHEEL - Color wheel variants of purple
const purpleTWName: ColorWheelType = {
  text: "text-cus-purple",
  background: "bg-cus-purple",
  border: "border-cus-purple",
  divide: "divide-cus-purple",
  ring: "ring-cus-purple",
  accent: "accent-cus-purple",
  caret: "caret-cus-purple",
  shadow: "shadow-cus-purple",
  outline: "outline-cus-purple",
  decoration: "decoration-cus-purple",
  placeholder: "placeholder-cus-purple",
  from: "from-cus-purple",
  via: "via-cus-purple",
  to: "to-cus-purple",
  fill: "fill-cus-purple",
  stroke: "stroke-cus-purple",
  ringOffset: "ring-offset-cus-purple",
};

// 💾 COLOR WHEEL - Complete color wheel for usage
export const COLOR_WHEEL = {
  red: redTWName,
  blue: blueTWName,
  green: greenTWName,
  yellow: yellowTWName,
  pink: pinkTWName,
  orange: orangeTWName,
  purple: purpleTWName,
} as const;

export type ColorWheelKey = keyof typeof COLOR_WHEEL;
