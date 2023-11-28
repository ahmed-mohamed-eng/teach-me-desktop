export function setLocalObject<T>(key: string, value: T) {
  if (localStorage) {
    const result = JSON.stringify(value);
    localStorage.setItem(key, result);
  }
}
