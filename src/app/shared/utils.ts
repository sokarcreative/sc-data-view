export function range(start: number, end: number, step = 1): number[] {
  return Array.from(
    {length: Math.ceil((end + 1 - start) / step)},
    (_, i) => start + i * step
  );
}
