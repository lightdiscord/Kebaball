export const map = fn => array => array.map(fn);

export const forEach = fn => array => array.forEach(fn);

export const range = (from, to) => [...Array(to - from)].map((_, idx) => idx + from);
