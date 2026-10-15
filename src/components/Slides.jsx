import { ArrowUpRightIcon } from '@phosphor-icons/react';
import { profile } from '../data/presentation';
import { calculateAge } from '../lib/age';
import { AppScreensCarousel } from './AppScreensCarousel';
import { BrandCarousel } from './BrandCarousel';
import { ChapterIndex, DetailRows, DisplayTitle, Eyebrow, Tags } from './ui';

export function Cover({ t, go }) {
  return <div className="cover">
    <section className="cover-copy" aria-labelledby="slide-title">
      <Eyebrow>01 / {t.nav[0].title}</Eyebrow>
      <h1 className="hero-title" id="slide-title" tabIndex={-1}><span>{t.hero.first}</span><span>{t.hero.second} <em>{t.hero.accent}</em></span></h1>
      <div className="cover-person"><p>{profile.name}</p><p>{t.hero.subtitle}</p></div>
    </section>
    <ChapterIndex t={t} go={go} />
  </div>;
}

export function About({ t }) {
  const d = t.about;
  const age = calculateAge(profile.birthDate);
  return <div className="editorial-grid"><section><Eyebrow>01 / {t.nav[0].title}</Eyebrow><DisplayTitle title={d.title} accent={d.accent} id="slide-title" /><p className="person-name person-name--with-age"><span>{profile.name}</span><span className="person-age">· {age} {d.ageUnit}</span></p><p className="lead muted">{d.intro}</p></section><DetailRows rows={d.rows} /></div>;
}

export function College({ t }) {
  const d = t.college;
  return <div className="editorial-grid"><section><Eyebrow>02 / {t.nav[1].subtitle}</Eyebrow><DisplayTitle title={d.title} accent={d.accent} id="slide-title" /><p className="person-name">{d.intro}</p><p className="muted">{d.period}</p></section><DetailRows rows={d.steps} numbered /></div>;
}

export function FirstJob({ t }) {
  const d = t.firstJob;
  return <div className="editorial-grid"><section><Eyebrow>03 / {t.nav[2].title}</Eyebrow><DisplayTitle title={d.title} accent={d.accent} id="slide-title" className="first-job-title" inline /><p className="muted first-job-role">{d.role}</p><BrandCarousel labels={d.carousel} /><dl className="metadata">{d.meta.map(([label, value]) => <div key={label}><dt className="eyebrow">{label}</dt><dd>{value}</dd></div>)}</dl><div className="stack-section first-job-stack"><Eyebrow>{d.stack}</Eyebrow><Tags items={d.technologies} /></div></section><section className="side-content"><DetailRows rows={d.rows} /></section></div>;
}

export function Transition({ t }) {
  const d = t.transition;
  return <div className="editorial-grid"><section><Eyebrow>03 / {t.nav[2].title}</Eyebrow><DisplayTitle title={d.title} accent={d.accent} id="slide-title" className="transition-title" /><div className="destination"><Eyebrow>{d.destination}</Eyebrow><p>AB InBev <ArrowUpRightIcon weight="light" size={34} aria-hidden="true" /></p></div></section><DetailRows rows={d.rows} numbered /></div>;
}

export function CurrentCompany({ t, go }) {
  const d = t.current;
  const logos = [
    'https://cdn.worldvectorlogo.com/logos/ze-delivery-logo.svg',
    `${import.meta.env.BASE_URL}brands/tada-delivery.png`,
  ];
  return <div className="editorial-grid current-company"><section><Eyebrow>04 / {d.current}</Eyebrow><DisplayTitle title={d.title} accent={d.accent} id="slide-title" /><p className="person-name">{d.intro}</p><p className="muted">{d.role}</p><p className="lead company-summary">{d.summary}</p></section><div className="project-choices">{d.projects.map(([title, text], i) => <div key={title} className="project-choice"><Eyebrow>0{i + 1} / AB InBev</Eyebrow><div className="project-choice-heading"><img className={`project-choice-logo${i === 1 ? ' is-tada' : ''}`} src={logos[i]} alt="" aria-hidden="true" /><span className="project-choice-title">{title}</span></div>{text && <span className="muted">{text}</span>}</div>)}</div></div>;
}

export function Project({ t, project, go }) {
  const d = t.projects[project];
  return <div className="wide-slide case-study">
    <div className="case-top"><Eyebrow>04 / AB InBev / {t.labels.project} 0{project + 1}</Eyebrow></div>
    <DisplayTitle title={d.title} accent={d.accent} id="slide-title" className="case-title" inline />
    <div className="case-description"><p className="lead muted">{d.description}</p>{d.period && <p className="muted period">{d.period}</p>}</div>
    <ol className="trajectory" aria-label={t.labels.evolution}>{d.stages.map(([title, text, date], i) => <li key={title}><div className="trajectory-meta"><span className="trajectory-number">0{i + 1}</span>{date && <span className="trajectory-date">{date}</span>}</div><h2>{title}</h2><p className="muted">{text}</p></li>)}</ol>
    <div className="case-bottom"><section><Eyebrow>{d.stackLabel}</Eyebrow><Tags items={d.technologies} /></section><section><Eyebrow>{t.labels.achievement}</Eyebrow><h2>{d.achievement}</h2><p className="muted">{d.evidence}</p>{d.article && <a className="case-article-link" href={d.article.url} target="_blank" rel="noreferrer"><span>{d.article.label}</span><ArrowUpRightIcon size={17} aria-hidden="true" /></a>}</section></div>
  </div>;
}

export function PersonalProjects({ t }) {
  const d = t.personal;
  return <div className="editorial-grid personal-projects">
    <section className="convoca-showcase"><Eyebrow>05 / {t.nav[4].title}</Eyebrow><div className="convoca-brand"><img src={`${import.meta.env.BASE_URL}brands/convoca-logo-ios.png`} alt={d.logoAlt} /><DisplayTitle title={d.title} accent="" id="slide-title" inline /></div><AppScreensCarousel labels={d.carousel} /></section>
    <section className="convoca-overview">
      <Eyebrow>{d.sectionLabel}</Eyebrow>
      <h2>{d.heading}</h2>
      <p className="muted">{d.description}</p>
      <div className="convoca-technology-grid">
        <div className="convoca-stack"><Eyebrow>{d.stackLabel}</Eyebrow><ul>{d.stack.map(([area, technology]) => <li key={area}><span className="convoca-stack-area">{area}</span><h3>{technology}</h3></li>)}</ul></div>
        <div className="convoca-stack"><Eyebrow>{d.hostingLabel}</Eyebrow><ul>{d.hosting.map(([area, technology]) => <li key={area}><span className="convoca-stack-area">{area}</span><h3>{technology}</h3></li>)}</ul></div>
      </div>
    </section>
    <section className="convoca-ai-journey">
      <div className="convoca-ai-heading"><div><Eyebrow>{d.aiJourney.label}</Eyebrow><h2>{d.aiJourney.heading}</h2></div><p className="muted">{d.aiJourney.intro}</p></div>
      <ol>{d.aiJourney.steps.map((step, index) => <li key={step.title}><span className="convoca-ai-number">{String(index + 1).padStart(2, '0')}</span><span className="convoca-ai-tool">{step.tool}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
    </section>
    <section className="convoca-ai-learnings">
      <div className="convoca-ai-heading"><div><Eyebrow>{d.aiLearnings.label}</Eyebrow><h2>{d.aiLearnings.heading}</h2></div></div>
      <ol>{d.aiLearnings.items.map((item, index) => <li key={item.title}><span className="convoca-ai-number">{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.description}</p></li>)}</ol>
    </section>
  </div>;
}

export function Closing({ t }) {
  const d = t.closing;
  return <div className="closing"><Eyebrow>{d.kicker}</Eyebrow><DisplayTitle title={d.title} accent={d.accent} id="slide-title" /><p className="lead muted">{d.text}</p><p className="person-name">{profile.name}</p></div>;
}
