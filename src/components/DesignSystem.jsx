import { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, ArrowsOutIcon, MinusIcon } from '@phosphor-icons/react';
import { Button, DisplayTitle, Eyebrow, Tags } from './ui';
import { DEFAULT_ACCENT, createTheme } from '../lib/theme';
export function DesignSystem({ t, back, accent = DEFAULT_ACCENT }) {
  const theme = createTheme(accent);
  const colors = [['Paper', '#F2F0E9', 'var(--color-paper)'], ['Ink', '#191919', 'var(--color-ink)'], [t.settings.color, accent, 'var(--color-accent)'], ['Muted', '#6E6E73', 'var(--color-muted)'], ['Rule', '#C9C8C3', 'var(--color-rule)'], ['Soft', theme['--color-accent-soft'], 'var(--color-accent-soft)']];
  const [notice, setNotice] = useState(false);
  const [active, setActive] = useState(0);
  const d = t.ds;
  return <div className="design-system">
    <button className="back-link" onClick={back}><ArrowLeftIcon size={20} weight="light" aria-hidden="true" />{t.back}</button>
    <Eyebrow>RG / DESIGN SYSTEM / V0.1</Eyebrow>
    <DisplayTitle title={d.title} accent={d.accent} id="slide-title" />
    <p className="lead muted">{d.intro}</p>
    <nav className="ds-index" aria-label={t.designSystem}>{['type', 'colors', 'spacing', 'components', 'principles'].map(key => <a href={`#ds-${key}`} key={key} onClick={event => { event.preventDefault(); document.getElementById(`ds-${key}`).scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }}>{d[key]}</a>)}</nav>
    <section className="ds-section" id="ds-type"><Eyebrow>01 / {d.type}</Eyebrow><div className="type-specimens"><div><span className="spec-label">Bodoni Moda · 500–600</span><p className="type-display">{d.display}</p><span className="muted">Display / 48–128 px / −0.05 em</span></div><div><span className="spec-label">Inter · 400–600</span><p className="type-body">{d.body}</p><span className="muted">Body / 16–24 px / 1.6</span><Eyebrow>LABEL / 12 PX / 0.2 EM</Eyebrow></div></div></section>
    <section className="ds-section" id="ds-colors"><Eyebrow>02 / {d.colors}</Eyebrow><div className="color-specimens">{colors.map(([name, hex, value]) => <div key={name}><div className="color-swatch" style={{ background: value }} /><h2>{name}</h2><code>{hex}</code></div>)}</div></section>
    <section className="ds-section" id="ds-spacing"><Eyebrow>03 / {d.spacing}</Eyebrow><div className="spacing-specimens">{[4, 8, 12, 16, 24, 32, 48, 64, 80, 96].map(n => <div key={n}><span className="spacing-bar" style={{ height: n }} /><code>{n}</code></div>)}</div></section>
    <section className="ds-section" id="ds-components"><Eyebrow>04 / {d.components}</Eyebrow><div className="button-specimens"><Button onClick={() => setNotice(!notice)}>{d.button}</Button><Button variant="secondary" onClick={() => setNotice(!notice)}>{d.secondary}</Button><Button disabled>{d.disabled}</Button></div><p className="spec-notice" role="status">{notice ? d.message : '\u00a0'}</p><div className="component-specimens"><div><Eyebrow>{t.labels.stack}</Eyebrow><Tags items={['React', 'Vite', 'CSS tokens']} /></div><div className="sample-tabs" role="group" aria-label={d.sample}>{[0, 1].map(i => <button aria-pressed={active === i} onClick={() => setActive(i)} key={i}>{t.labels.project} 0{i + 1}</button>)}</div><div className="icon-specimens" aria-label="Phosphor Light"><ArrowLeftIcon /><ArrowRightIcon /><ArrowsOutIcon /><MinusIcon /></div></div></section>
    <section className="ds-section" id="ds-principles"><Eyebrow>05 / {d.principles}</Eyebrow><ol className="principle-list">{d.principlesList.map(text => <li key={text}>{text}</li>)}</ol></section>
    <button className="back-link" onClick={back}><ArrowLeftIcon size={20} weight="light" aria-hidden="true" />{t.back}</button>
  </div>;
}
