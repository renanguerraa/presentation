import { useEffect, useRef, useState } from 'react';
import { XIcon, ArrowCounterClockwiseIcon, ArrowRightIcon, CheckIcon } from '@phosphor-icons/react';
import { DEFAULT_ACCENT, contrastText, normalizeAccent } from '../lib/theme';

const presets = [DEFAULT_ACCENT, '#087F5B', '#C52A38', '#F2B705', '#7542C8', '#222222'];

export function SettingsDialog({ open, onClose, t, lang, onLanguageChange, onDesignSystem, accent, onAccentChange }) {
  const dialog = useRef(null);
  const [hex, setHex] = useState(accent);
  const [edited, setEdited] = useState(false);
  const d = t.settings;
  const invalid = edited && !normalizeAccent(hex);

  useEffect(() => {
    if (open) {
      setHex(accent);
      setEdited(false);
      dialog.current.showModal();
    } else dialog.current.close();
  }, [open]);

  function chooseColor(value) {
    setHex(value);
    setEdited(false);
    onAccentChange(value);
  }

  function editHex(value) {
    setHex(value);
    setEdited(true);
    const normalized = normalizeAccent(value);
    if (normalized) onAccentChange(normalized);
  }

  return (
    <dialog id="settings-dialog" ref={dialog} className="settings-dialog" aria-labelledby="settings-title" aria-describedby="settings-description" onCancel={onClose} onClick={event => {
      if (event.target !== dialog.current) return;
      const bounds = dialog.current.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
    }}>
      <div className="settings-heading">
        <div><p className="eyebrow">RG / {d.presentation}</p><h2 id="settings-title">{d.title}</h2></div>
        <button className="icon-button" onClick={onClose} aria-label={t.close}><XIcon size={24} weight="light" aria-hidden="true" /></button>
      </div>
      <p id="settings-description" className="muted settings-intro">{d.description}</p>
      <section className="settings-section" aria-labelledby="settings-language-title">
        <h3 id="settings-language-title">{d.language}</h3>
        <div className="settings-languages" role="group" aria-label={t.language}>
          {[['pt', 'PT', 'Português'], ['en', 'EN', 'English']].map(([value, code, name]) => (
            <button key={value} lang={value} aria-label={name} aria-pressed={lang === value} onClick={() => onLanguageChange(value)}>
              <span className="language-code">{code}</span><span>{name}</span>
              {lang === value && <CheckIcon size={18} weight="light" aria-hidden="true" />}
            </button>
          ))}
        </div>
      </section>
      <section className="settings-section" aria-labelledby="settings-color-title">
        <h3 id="settings-color-title">{d.color}</h3>
        <p className="muted settings-help">{d.colorHelp}</p>
        <div className="settings-color-inputs">
          <input className="color-picker" type="color" value={accent} onChange={event => chooseColor(event.target.value.toUpperCase())} aria-label={d.picker} />
          <div className="hex-field">
            <label htmlFor="accent-hex">{d.hex}</label>
            <input id="accent-hex" type="text" value={hex} onChange={event => editHex(event.target.value)} onBlur={() => { const normalized = normalizeAccent(hex); if (normalized) setHex(normalized); }} spellCheck={false} autoComplete="off" autoCapitalize="characters" maxLength={7} placeholder="#193CF5" aria-invalid={invalid ? true : undefined} aria-describedby={invalid ? 'accent-error' : undefined} />
          </div>
        </div>
        {invalid && <p className="color-error" id="accent-error" role="status">{d.invalid}</p>}
        <div className="color-presets" role="group" aria-label={d.presets}>
          {presets.map((color, i) => <button key={color} className="color-preset" style={{ '--preset-color': color, '--preset-text': contrastText(color) }} aria-label={i === 0 ? `${d.defaultColor} ${color}` : `${d.color} ${color}`} aria-pressed={accent === color} title={color} onClick={() => chooseColor(color)}>{accent === color && <CheckIcon size={18} weight="regular" aria-hidden="true" />}</button>)}
        </div>
      </section>
      <div className="settings-preview"><span className="eyebrow">{d.preview}</span><p>{d.previewText}<br /><span>{d.previewAccent}</span></p></div>
      <p className="settings-saved muted">{d.saved}</p>
      <button className="settings-system-link" onClick={onDesignSystem}><span>{t.designSystem}</span><ArrowRightIcon size={20} weight="light" aria-hidden="true" /></button>
      <div className="settings-footer">
        <button className="reset-color" onClick={() => chooseColor(DEFAULT_ACCENT)}><ArrowCounterClockwiseIcon size={18} weight="light" aria-hidden="true" />{d.reset}</button>
        <button className="button button--primary settings-done" onClick={onClose}>{d.done}</button>
      </div>
    </dialog>
  );
}
