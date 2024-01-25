// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const utilityGetFromLocalStorage = (ref: string): any => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const storage: any = localStorage.getItem(ref);
  return storage ? JSON.parse(storage) : undefined;
};
export const utilitySaveToLocalStorage = (
  ref: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Object | Array<any>
): void => localStorage.setItem(ref, JSON.stringify(data));

export const utilityRemoveLocalStorage = (ref: string): void =>
  localStorage.removeItem(ref);
