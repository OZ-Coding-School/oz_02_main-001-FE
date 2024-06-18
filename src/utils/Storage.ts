export const Storage = {
  get(key: string) {
    return localStorage.getItem(key);
  },
  set(key: string, value: any) {
    return localStorage.setItem(key, value);
  },
};
