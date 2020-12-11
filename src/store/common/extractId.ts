export function extractId(input: string): string | undefined {
  const found = input.match(/(\d*)\/$/);
  if (found) {
    return found[1];
  }
}

export function extractPageNumber(input: string): number | null {
  const found = input.match(/page=(\d*)$/);
  if (found) {
    return parseInt(found[1], 10);
  }
  return null;
}
