export const modifierString = (n: number): string => {
  n = Math.floor((n - 10) / 2);

  return n > 0 ? `+${n}` : `${n}`;
};

export const standardArray = (): number[] => {
  return [15, 14, 13, 12, 10, 8];
};
