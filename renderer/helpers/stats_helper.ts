export const modifierString = (n: number): string => {
  n = Math.floor((n - 10) / 2);

  if (n > 0) {
    return `+${n}`;
  }

  return `${n}`;
};
