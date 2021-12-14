export function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function get(key) {
  const item = localStorage.getItem(key);
  try {
    return JSON.parse(item);
  } catch (error) {
    return null;
  }
}
