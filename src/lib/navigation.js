import { slideOrder } from '../data/presentation.js';
export function readRoute(hash, preferredLanguage = 'pt') {
  const [language, page] = hash.replace(/^#\/?/, '').split('/');
  const lang = ['pt', 'en'].includes(language) ? language : (preferredLanguage === 'en' ? 'en' : 'pt');
  return { lang, page: page === 'design-system' || slideOrder.includes(page) ? page : 'inicio' };
}
export function routeHash(lang, page) { return `#/${lang}/${page}`; }
export function adjacentSlide(page, direction) {
  const current = slideOrder.indexOf(page);
  return slideOrder[Math.max(0, Math.min(slideOrder.length - 1, current + direction))];
}
