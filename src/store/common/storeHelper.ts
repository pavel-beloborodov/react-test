export function createAction<T extends Object>(type: string, data?: T) {
  return { type, data };
}
