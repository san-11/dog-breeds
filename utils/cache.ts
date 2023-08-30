interface CacheUtil {
  set: <CacheValue>(key: string, object: CacheValue) => void;
  get: <CacheValue>(key: string, defaultValue: CacheValue) => CacheValue;
  remove: (key: string) => void;
  removeAll: () => void;
}

export const cacheUtil: CacheUtil = {
  set: (key, object) => {
    localStorage.setItem(key, JSON.stringify(object));
  },
  get: (key, defaultValue) => {
    if (typeof window === "undefined") {
      return defaultValue;
    }

    const storageValue = localStorage.getItem(key);
    if (storageValue) {
      return JSON.parse(storageValue);
    }
    
    return defaultValue;
  },
  remove: (key) => localStorage.removeItem(key),
  removeAll: () => localStorage.clear(),
};
