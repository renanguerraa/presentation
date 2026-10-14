import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, CornersOutIcon, CornersInIcon, ListIcon, XIcon, SlidersHorizontalIcon } from '@phosphor-icons/react';
import { content, profile, slideChapters, slideOrder } from './data/presentation';
import { adjacentSlide, readRoute, routeHash } from './lib/navigation';
import { ChapterIndex } from './components/ui';
import { Cover, About, College, FirstJob, Transition, CurrentCompany, PersonalProjects, Project, Closing } from './components/Slides';
import { DesignSystem } from './components/DesignSystem';
import { SettingsDialog } from './components/SettingsDialog';
import { ACCENT_STORAGE_KEY, DEFAULT_ACCENT, createTheme, normalizeAccent } from './lib/theme';

function savedLanguage() {
  try { return localStorage.getItem('rg-presentation-language') || 'pt'; } catch { return 'pt'; }
}

function savedAccent() {
  try { return normalizeAccent(localStorage.getItem(ACCENT_STORAGE_KEY)) || DEFAULT_ACCENT; }
  catch { return DEFAULT_ACCENT; }
}

export function App() {
  const [route, setRoute] = useState(() => readRoute(window.location.hash, savedLanguage()));
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [accent, setAccent] = useState(savedAccent);
  const [fullscreen, setFullscreen] = useState(false);
  const [notice, setNotice] = useState('');
  const dialog = useRef(null);
  const previousSlide = useRef('inicio');
  const initialRender = useRef(true);
  const t = content[route.lang];
  const index = slideOrder.indexOf(route.page);
  const isSystem = route.page === 'design-system';
  const chapter = slideChapters[index] ?? 0;
  const go = useCallback((page, lang = route.lang) => {
    setMenuOpen(false);
    setNotice('');
    window.location.hash = routeHash(lang, page);
  }, [route.lang]);

  useEffect(() => {
    for (const [token, value] of Object.entries(createTheme(accent))) document.documentElement.style.setProperty(token, value);
    try { localStorage.setItem(ACCENT_STORAGE_KEY, accent); } catch { /* Storage is optional. */ }
  }, [accent]);

  useEffect(() => {
    const sync = () => setRoute(readRoute(window.location.hash, savedLanguage()));
    window.addEventListener('hashchange', sync);
    if (window.location.hash !== routeHash(route.lang, route.page)) window.history.replaceState(null, '', routeHash(route.lang, route.page));
    return () => window.removeEventListener('hashchange', sync);
  }, []);
  useEffect(() => {
    document.documentElement.lang = route.lang === 'pt' ? 'pt-BR' : 'en';
    document.title = `${isSystem ? t.designSystem : t.slideNames[index]} — ${profile.name}`;
    try { localStorage.setItem('rg-presentation-language', route.lang); } catch { /* Storage is optional. */ }
    if (!isSystem) previousSlide.current = route.page;
    if (initialRender.current) { initialRender.current = false; return; }
    const frame = requestAnimationFrame(() => {
      if (document.getElementById('settings-dialog')?.open) return;
      document.getElementById('slide-title')?.focus({ preventScroll: true });
      document.getElementById('main-content')?.scrollTo({ top: 0, behavior: 'instant' });
    });
    return () => cancelAnimationFrame(frame);
  }, [route.page, route.lang, isSystem, index, t]);
  useEffect(() => {
    const keydown = event => {
      if (isSystem || menuOpen || settingsOpen || event.altKey || event.ctrlKey || event.metaKey || event.target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName)) return;
      let destination;
      if (['ArrowRight', 'PageDown'].includes(event.key)) destination = adjacentSlide(route.page, 1);
      if (['ArrowLeft', 'PageUp'].includes(event.key)) destination = adjacentSlide(route.page, -1);
      if (event.key === 'Home') destination = slideOrder[0];
      if (event.key === 'End') destination = slideOrder.at(-1);
      if (destination) { event.preventDefault(); go(destination); }
    };
    window.addEventListener('keydown', keydown);
    return () => window.removeEventListener('keydown', keydown);
  }, [route.page, isSystem, menuOpen, settingsOpen, go]);
  useEffect(() => { if (menuOpen) dialog.current?.showModal(); else dialog.current?.close(); }, [menuOpen]);
  useEffect(() => {
    const sync = () => { setFullscreen(Boolean(document.fullscreenElement)); setNotice(''); };
    document.addEventListener('fullscreenchange', sync);
    return () => document.removeEventListener('fullscreenchange', sync);
  }, []);
  const toggleFullscreen = async () => {
    let timeout;
    try {
      if (!document.fullscreenEnabled) throw new Error('Fullscreen unavailable');
      const request = document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
      await Promise.race([request, new Promise((_, reject) => { timeout = setTimeout(() => reject(new Error('Fullscreen unavailable')), 1500); })]);
    } catch { setNotice(t.fullscreenError); }
    finally { clearTimeout(timeout); }
  };
  const slides = {
    inicio: <Cover t={t} go={go} />, sobre: <About t={t} />, faculdade: <College t={t} />,
    'primeiro-emprego': <FirstJob t={t} />,
    transicao: <Transition t={t} />, 'ab-inbev': <CurrentCompany t={t} go={go} />,
    'projeto-01': <Project t={t} project={0} go={go} />, 'projeto-02': <Project t={t} project={1} go={go} />,
    'projetos-pessoais': <PersonalProjects t={t} />,
    encerramento: <Closing t={t} />,
  };
  return <div className={`presentation-shell ${isSystem ? 'system-shell' : ''}`}>
    <a href="#main-content" className="skip-link" onClick={e => { e.preventDefault(); document.getElementById('slide-title')?.focus(); }}>{t.skip}</a>
    <header className="site-header">
      <button className="brand" onClick={() => go('inicio')} aria-label={t.home}><span className="wordmark">{profile.initials}<span>.</span></span><span className="brand-caption">{t.brand}</span></button>
      <div className="header-actions">
        <button className="settings-trigger" onClick={() => setSettingsOpen(true)} aria-label={t.settings.title} aria-haspopup="dialog" aria-expanded={settingsOpen}><SlidersHorizontalIcon size={23} weight="light" aria-hidden="true" /><span>{route.lang.toUpperCase()}</span></button>
        {route.page !== 'inicio' && !isSystem && <button className="icon-button menu-trigger" onClick={() => setMenuOpen(true)} aria-label={t.index}><ListIcon weight="light" size={26} /></button>}
        <button className="icon-button fullscreen-button" onClick={toggleFullscreen} aria-label={fullscreen ? t.exitFullscreen : t.fullscreen}>{fullscreen ? <CornersInIcon size={28} weight="light" /> : <CornersOutIcon size={28} weight="light" />}</button>
      </div>
    </header>
    {!isSystem && route.page !== 'inicio' && <nav className="chapter-strip" aria-label={t.chapters}>{t.nav.map((item, i) => <button key={item.target} onClick={() => go(item.target)} aria-current={i === chapter ? 'step' : undefined}><span>{item.number}</span>{item.subtitle || item.title}</button>)}</nav>}
    {notice && <div className="notice" role="status"><p>{notice}</p><button className="icon-button" onClick={() => setNotice('')} aria-label={t.close}><XIcon size={20} /></button></div>}
    <main id="main-content" className={`slide-stage ${route.page === 'inicio' ? 'slide-stage--cover' : ''}`}><div className="slide-enter" key={route.page}>{isSystem ? <DesignSystem t={t} accent={accent} back={() => go(previousSlide.current)} /> : slides[route.page]}</div></main>
    {!isSystem && <footer className="slide-footer">
      <div className="progress-track" role="progressbar" aria-label={t.progress} aria-valuemin={1} aria-valuemax={slideOrder.length} aria-valuenow={index + 1}><span style={{ width: `${(index + 1) / slideOrder.length * 100}%` }} /></div>
      <div className="footer-row"><div className="footer-meta"><span className="slide-counter"><span>{String(index + 1).padStart(2, '0')}</span> / {slideOrder.length}</span></div><div className="footer-navigation"><button className="icon-button" disabled={index === 0} onClick={() => go(adjacentSlide(route.page, -1))} aria-label={t.previous}><ArrowLeftIcon weight="light" size={28} /></button><button className="icon-button" disabled={index === slideOrder.length - 1} onClick={() => go(adjacentSlide(route.page, 1))} aria-label={t.next}><ArrowRightIcon weight="light" size={28} /></button><span className="next-label">{index < slideOrder.length - 1 ? <>{t.nextLabel} <span>{t.slideNames[index + 1]}</span></> : t.closing.kicker}</span></div></div>
    </footer>}
    <dialog ref={dialog} className="chapter-dialog" onCancel={() => setMenuOpen(false)} onClick={e => { if (e.target === dialog.current) setMenuOpen(false); }} aria-labelledby="dialog-title"><div className="dialog-header"><h2 id="dialog-title">{t.chapters}</h2><button className="icon-button" onClick={() => setMenuOpen(false)} aria-label={t.close}><XIcon size={24} weight="light" /></button></div><ChapterIndex t={t} current={chapter} go={go} compact /></dialog>
    <SettingsDialog open={settingsOpen} onClose={() => setSettingsOpen(false)} t={t} lang={route.lang} onLanguageChange={lang => go(route.page, lang)} onDesignSystem={() => { setSettingsOpen(false); go('design-system'); }} accent={accent} onAccentChange={setAccent} />
  </div>;
}
