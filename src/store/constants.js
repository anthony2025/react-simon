export const PADS = ['green', 'red', 'blue', 'yellow']
export const MAX_LEVEL = 10
export const SEQUENCE_SPEED = 700
export const WIN_SPEED = 200
export const ANIMATION_DURATION = 600
export const WIN_SEQUENCE = PADS.reduce((acc, curr) => [
  ...acc,
  ...PADS,
  ...PADS
])
