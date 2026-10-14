import { useEffect, useRef, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, XIcon } from '@phosphor-icons/react';

const screens = Array.from({ length: 5 }, (_, index) => `${import.meta.env.BASE_URL}brands/convoca-ios-0${index + 1}.png`);

export function AppScreensCarousel({ labels }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const dialogRef = useRef(null);
  const activeDescription = labels.slides[index];

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      if (!document.hidden && !document.querySelector('dialog[open]')) {
        setIndex(current => (current + 1) % screens.length);
      }
    }, 4000);
    return () => window.clearInterval(timer);
  }, [paused]);

  function move(direction) {
    setIndex(current => (current + direction + screens.length) % screens.length);
  }

  function openImage() {
    dialogRef.current?.showModal();
  }

  return <section
    className="app-screens-carousel"
    aria-label={labels.carouselLabel}
    aria-roledescription="carousel"
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
    onFocusCapture={() => setPaused(true)}
    onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}
  >
    <div className={`app-screens-content ${activeDescription ? '' : 'is-image-only'}`}>
      <div className="app-screens-viewport">
        <div className="app-screens-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {screens.map((screen, screenIndex) => <div className="app-screen" key={screen} aria-hidden={screenIndex !== index}>
            <button className="app-screen-expand" onClick={openImage} tabIndex={screenIndex === index ? 0 : -1} aria-label={labels.expand}>
              <img src={screen} alt={screenIndex === index ? `${labels.imageAlt} ${screenIndex + 1}` : ''} />
            </button>
          </div>)}
        </div>
      </div>
      {activeDescription && <div className="app-screens-copy"><h3>{activeDescription.title}</h3><p>{activeDescription.description}</p></div>}
    </div>
    <div className="app-screens-controls">
      <span>{String(index + 1).padStart(2, '0')} / {String(screens.length).padStart(2, '0')}</span>
      <div>
        <button className="icon-button" onClick={() => move(-1)} aria-label={labels.previous}><ArrowLeftIcon size={20} aria-hidden="true" /></button>
        <button className="icon-button" onClick={() => move(1)} aria-label={labels.next}><ArrowRightIcon size={20} aria-hidden="true" /></button>
      </div>
    </div>
    <dialog ref={dialogRef} className="app-screen-dialog" onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close(); }} onKeyDown={event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        event.stopPropagation();
        move(event.key === 'ArrowLeft' ? -1 : 1);
      }
    }}>
      <button className="app-screen-dialog-close" onClick={() => dialogRef.current?.close()} aria-label={labels.close}><XIcon size={24} aria-hidden="true" /></button>
      <button className="app-screen-dialog-arrow app-screen-dialog-arrow--previous" onClick={() => move(-1)} aria-label={labels.previous}><ArrowLeftIcon size={28} aria-hidden="true" /></button>
      <img src={screens[index]} alt={`${labels.imageAlt} ${index + 1}`} />
      <button className="app-screen-dialog-arrow app-screen-dialog-arrow--next" onClick={() => move(1)} aria-label={labels.next}><ArrowRightIcon size={28} aria-hidden="true" /></button>
      <span className="app-screen-dialog-counter">{String(index + 1).padStart(2, '0')} / {String(screens.length).padStart(2, '0')}</span>
    </dialog>
  </section>;
}
