import { ArrowRightIcon, MinusIcon } from '@phosphor-icons/react';

export function Eyebrow({ children, className = '' }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function DisplayTitle({ title, accent, className = '', id, inline = false }) {
  return <h1 id={id} tabIndex={-1} className={`display-title ${className}`}>{title}{inline ? ' ' : <br />}<span>{accent}</span></h1>;
}

export function Button({ children, onClick, variant = 'primary', disabled = false, icon = true, ...props }) {
  return <button className={`button button--${variant}`} onClick={onClick} disabled={disabled} {...props}><span>{children}</span>{icon && <ArrowRightIcon size={25} weight="light" aria-hidden="true" />}</button>;
}

export function DetailRows({ rows, numbered = false }) {
  return <div className="detail-rows">{rows.map(([title, text], i) => <div className="detail-row" key={title}>{numbered && <span className="row-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>}<div><h2>{title}</h2><p>{text}</p></div></div>)}</div>;
}

export function Tags({ items }) {
  return <ul className="tags">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

export function CareerProgression({ items, label }) {
  return <section className="career-progression" aria-label={label}>
    <Eyebrow>{label}</Eyebrow>
    <div className="career-progression-track" aria-hidden="true"><span /></div>
    <ol>{items.map((item, i) => {
      const stage = typeof item === 'string' ? { title: item, date: '' } : item;
      return <li className={i === items.length - 1 ? 'is-current' : ''} key={stage.title}><span className="career-progression-dot" aria-hidden="true" /><span className="career-progression-date">{stage.date}</span><span className="career-progression-title">{stage.title}</span></li>;
    })}</ol>
  </section>;
}

export function ChapterIndex({ t, current = 0, go, compact = false }) {
  return <nav className={`chapter-index ${compact ? 'chapter-index--compact' : ''}`} aria-label={t.chapters}>
    {t.nav.map((chapter, i) => <div className="chapter-group" key={chapter.number}>
      <button className={`chapter-link ${current === i ? 'is-active' : ''}`} onClick={() => go(chapter.target)} aria-current={current === i ? 'step' : undefined}>
        <span className="chapter-number" aria-hidden="true">{chapter.number}</span>
        <span className="chapter-copy"><span className="eyebrow">{t.chapter}</span><span className="chapter-title">{chapter.title}</span>{chapter.subtitle && <span className="chapter-subtitle">{chapter.subtitle}</span>}</span>
        <MinusIcon className="chapter-dash" size={28} weight="light" aria-hidden="true" />
      </button>
      {i === 3 && <div className="project-subnav">{t.current.projects.map(([title], index) => <button key={title} onClick={() => go(`projeto-0${index + 1}`)}><span>{title}</span><MinusIcon size={22} weight="light" aria-hidden="true" /></button>)}</div>}
    </div>)}
  </nav>;
}
