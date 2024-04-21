export const api = (_path = "") => {
    const [path] = _path.split('?')
    if (path.length === 0) {
        return Promise.reject(new Error('Path is required.'))
    }

    if (path !== '/latest') {
        return Promise.reject(new Error('Invalid path.'))
    }

    const baseCurrency = _path.split('base=')
  return Promise.resolve({ test: true });
};
