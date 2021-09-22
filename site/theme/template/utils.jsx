import flattenDeep from 'lodash/flattenDeep';
import flatten from 'lodash/flatten';

export function isZhCN(pathname) {
  return /-cn\/?$/.test(pathname);
}

export function getMetaDescription(jml) {
  const COMMON_TAGS = ['h1', 'h2', 'h3', 'p', 'img', 'a', 'code', 'strong'];
  if (!Array.isArray(jml)) {
    return '';
  }
  const paragraph = flattenDeep(
    jml
      .filter(item => {
        if (Array.isArray(item)) {
          const [tag] = item;
          return tag === 'p';
        }
        return false;
      })
      // ['p', ['code', 'aa'], 'bb'] => ['p', 'aabb']
      .map(item => {
        const [tag, ...others] = flatten(item);
        const content = others
          .filter(other => typeof other === 'string' && !COMMON_TAGS.includes(other))
          .join('');
        return [tag, content];
      }),
  ).find(p => p && typeof p === 'string' && !COMMON_TAGS.includes(p));
  return paragraph;
}