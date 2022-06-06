export const setLocalStorageToken = (value: string, key: string) => {
    localStorage.setItem(key, value);
};
export const getLocalStorage = (key: string) => {
    return localStorage.getItem(key) || null;
};
export const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key);
};