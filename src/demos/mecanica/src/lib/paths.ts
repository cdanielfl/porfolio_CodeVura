const BASE_PATH = '/demo/mecanica';

export const mech = (path = '') => {
  if (!path) {
    return BASE_PATH;
  }
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE_PATH}/${normalized}`;
};

