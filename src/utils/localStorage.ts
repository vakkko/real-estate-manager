export function setItem(key: string, value: string[] | string) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error("Error saving to local storage", err);
  }
}

export function getItem(key: string) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  } catch (err) {
    console.error("Error reading from localStorage", err);
  }
}
