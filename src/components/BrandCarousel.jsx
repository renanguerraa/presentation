import { useEffect, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react';

const brands = ['Chopp Brahma Express', 'Arcos Dourados', 'Pague Menos', 'Carrefour', 'Ri Happy', 'TaTa Supermercados', 'Giga Atacado', 'Vivara'];
const images = ['brahma.svg', 'arcos.png', 'paguemenos.svg', 'carrefour.svg', 'rihappy.svg', 'tata.svg', 'giga.svg', 'vivara.svg'];

export function BrandCarousel({ labels }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setPlaying(!preference.matches);
    preference.addEventListener('change', sync);
    return () => preference.removeEventListener('change', sync);
  }, []);
  useEffect(() => {
    if (!playing || hovered || focused) return;
    const timer = window.setInterval(() => {
      if (!document.hidden && !document.querySelector('dialog[open]')) setIndex(current => (current + 1) % brands.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [playing, hovered, focused]);
  function move(direction) {
    setIndex(current => (current + direction + brands.length) % brands.length);
  }
  const orderedBrands = brands.map((_, offset) => (index - 1 + offset + brands.length) % brands.length);
  return <section className="brand-carousel" aria-label={labels.title} aria-roledescription={labels.carousel}
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
    onKeyDown={event => {
      if (['ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown'].includes(event.key)) event.stopPropagation();
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1); }
    }}>
    <div className="brand-carousel-heading"><span className="eyebrow">{labels.title}</span><span className="brand-counter">{String(index + 1).padStart(2, '0')} / {String(brands.length).padStart(2, '0')}</span></div>
    <div className="brand-carousel-stage">
      <ol className="brand-carousel-track" key={index}>
        {orderedBrands.map((brandIndex, position) => <li className={`brand-carousel-item ${position === 1 ? 'is-active' : ''}`} key={brandIndex} aria-current={position === 1 ? 'true' : undefined}>
          <img className="brand-carousel-logo" src={`/brands/${images[brandIndex]}`} alt={brands[brandIndex]} width="180" height="72" />
        </li>)}
      </ol>
    </div>
    <div className="brand-carousel-controls">
      <span className="brand-carousel-caption" aria-live={playing && !hovered && !focused ? 'off' : 'polite'} aria-atomic="true">{brands[index]}</span>
      <div className="brand-carousel-arrows"><button className="icon-button" onClick={() => move(-1)} aria-label={labels.previous}><ArrowLeftIcon size={22} aria-hidden="true" /></button><button className="icon-button" onClick={() => move(1)} aria-label={labels.next}><ArrowRightIcon size={22} aria-hidden="true" /></button></div>
    </div>
  </section>;
}
