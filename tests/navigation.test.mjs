import test from 'node:test';
import assert from 'node:assert/strict';
import { adjacentSlide, readRoute, routeHash } from '../src/lib/navigation.js';
import { content, slideChapters, slideOrder } from '../src/data/presentation.js';
import { DEFAULT_ACCENT, createTheme, normalizeAccent } from '../src/lib/theme.js';
import { calculateAge } from '../src/lib/age.js';

test('age updates on the birthday', () => {
  assert.equal(calculateAge('2001-07-07', new Date(2026, 6, 6)), 24);
  assert.equal(calculateAge('2001-07-07', new Date(2026, 6, 7)), 25);
  assert.equal(calculateAge('2001-07-07', new Date(2026, 9, 14)), 25);
});

test('accent input accepts hex colors and rejects malformed persisted values', () => {
  assert.equal(normalizeAccent('  08aB5c  '), '#08AB5C');
  assert.equal(normalizeAccent('#C52A38'), '#C52A38');
  for (const value of [null, 123, '', '#123', '#GG0000', 'red', 'url(foo)', '#12345678']) assert.equal(normalizeAccent(value), null);
  assert.equal(createTheme('invalid')['--color-accent'], DEFAULT_ACCENT);
});

test('default theme retains the original palette exactly', () => {
  assert.deepEqual(createTheme(DEFAULT_ACCENT), {
    '--color-accent': '#193CF5', '--color-accent-hover': '#112CC4',
    '--color-accent-soft': '#E6E8F7', '--color-on-accent': '#FFFFFF',
    '--color-on-accent-hover': '#FFFFFF',
  });
});

test('custom themes derive supporting colors and readable button labels', () => {
  const light = createTheme('#F2B705');
  assert.equal(light['--color-accent'], '#F2B705');
  assert.equal(light['--color-on-accent'], '#000000');
  assert.notEqual(light['--color-accent-hover'], '#112CC4');
  assert.notEqual(light['--color-accent-soft'], '#E6E8F7');
  assert.equal(createTheme('#222222')['--color-on-accent'], '#FFFFFF');
});

test('language switches keep the same slide, including direct project links', () => {
  for (const page of [...slideOrder, 'design-system']) {
    assert.deepEqual(readRoute(routeHash('en', page), 'pt'), {lang:'en',page});
    assert.deepEqual(readRoute(routeHash('pt', page), 'en'), {lang:'pt',page});
  }
});
test('missing or invalid routes have a safe opening screen and supported language', () => {
  assert.deepEqual(readRoute('', 'en'), {lang:'en',page:'inicio'});
  assert.deepEqual(readRoute('#/pt/missing', 'en'), {lang:'pt',page:'inicio'});
  assert.deepEqual(readRoute('#/fr/missing', 'fr'), {lang:'pt',page:'inicio'});
});
test('next and previous cannot leave the deck and traverse every slide', () => {
  assert.equal(adjacentSlide(slideOrder[0],-1),slideOrder[0]);
  assert.equal(adjacentSlide(slideOrder.at(-1),1),slideOrder.at(-1));
  slideOrder.slice(0,-1).forEach((page,i)=>assert.equal(adjacentSlide(page,1),slideOrder[i+1]));
  slideOrder.slice(1).forEach((page,i)=>assert.equal(adjacentSlide(page,-1),slideOrder[i]));
});
function shape(value) {
  if(Array.isArray(value)) return value.map(shape);
  // Project-wide periods are intentionally hidden; dates belong to each moment.
  if(value && typeof value === 'object') return Object.fromEntries(Object.entries(value).filter(([key,entry])=>key !== 'period' || entry !== '').map(([k,v])=>[k,shape(v)]));
  assert.equal(typeof value,'string'); assert.ok(value.trim()); return typeof value;
}
test('personal projects form a fifth chapter before closing in both languages', () => {
  assert.equal(adjacentSlide('projeto-02', 1), 'projetos-pessoais');
  assert.equal(adjacentSlide('projetos-pessoais', 1), 'encerramento');
  assert.equal(slideChapters[slideOrder.indexOf('projetos-pessoais')], 4);
  for (const locale of Object.values(content)) {
    assert.equal(locale.nav[4].target, 'projetos-pessoais');
    assert.equal(locale.personal.title, 'Convoca.');
  }
});
test('both languages have complete matching content and exactly two AB InBev projects', () => {
  assert.deepEqual(shape(content.pt),shape(content.en));
  for(const locale of Object.values(content)) {
    assert.equal(locale.projects.length,2);
    assert.equal(locale.current.projects.length,2);
    assert.equal(locale.slideNames.length,slideOrder.length);
    locale.nav.forEach(item=>assert.ok(slideOrder.includes(item.target)));
    locale.projects.forEach((project,index)=>{assert.equal(project.stages.length,index === 0 ? 3 : 2); assert.ok(project.technologies.length); assert.ok(project.achievement);});
  }
  assert.equal(slideChapters.length,slideOrder.length);
  assert.equal(new Set(slideOrder).size,slideOrder.length);
});
