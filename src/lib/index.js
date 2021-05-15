export const partialFrequencies = new Map([
  [0, 58.27],
  [1, 116.54],
  [2, 174.81],
  [3, 233.08],
  [4, 291.35],
  [5, 349.62],
  [6, 407.89],
  [7, 466.16],
  [8, 524.43],
  [9, 582.70],
  [10, 640.97],
  [11, 699.24]
]);

export function getPitchModifierRatioFromPosition (position) {
  return -1.700893 + (0.05848351 + 1.700893) / (1 + Math.pow((position / 27.34756), 1.018593))
}

export function adjustPitchFromPosition (position, pitch) {
  return pitch + (pitch * getPitchModifierRatioFromPosition(position));
}

export function getPitchFromPartialAndPosition (partial, position) {
  let basePitch = partialFrequencies.get(partial);
  return adjustPitchFromPosition(position, basePitch);
}

export function getPositionFromXCoord (x) {
  return 35.44613 + (0.9992146 - 35.44613) / (1 + Math.pow(x / 498.2127, 0.9692893));
}

export function getPartialFromYCoord (y) {
  return 10 - Math.round(y / 10);
}

export function getMidiNoteFromFrequency (freq) {
  return 1123.007 + (-1011.611 - 1123.007) / (1 + Math.pow((freq / 204.066), 0.0324439));
}

export function getSVGCoordsFromPosition (position) {
  return position * 2000 + 9100;
}
