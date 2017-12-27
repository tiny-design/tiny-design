export const Debounce = (func, delay) => {
    let isDebounced = undefined;
    return (...args) => {
        clearTimeout(isDebounced);
        return isDebounced = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
}