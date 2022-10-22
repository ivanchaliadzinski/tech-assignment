export function getItem(key) {
    try {
        return localStorage.getItem(key);
    } catch (err) {
        return null;
    }
}
export function setItem(key, value) {
    try {
        return localStorage.setItem(key, value);
    } catch (err) {
        return null;
    }
}
export function removeItem(key) {
    try {
        return localStorage.removeItem(key);
    } catch (err) {
        return null;
    }
}
export function clearStorage() {
    try {
        return localStorage.clear();
    } catch (err) {
        return null;
    }
}
