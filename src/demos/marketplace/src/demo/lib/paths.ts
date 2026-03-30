const BASE_PATH = '/demo/marketplace';

export const mp = (path = '') => {
  if (!path) {
    return BASE_PATH;
  }
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE_PATH}/${normalized}`;
};

