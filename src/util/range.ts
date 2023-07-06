export const range = (start: number, stop: number): number[] => {
  return Array.from({ length: stop - start + 1 }, (_, i) => start + i);
};
