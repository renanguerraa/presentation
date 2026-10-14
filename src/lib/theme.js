export const DEFAULT_ACCENT = '#193CF5';
export const ACCENT_STORAGE_KEY = 'rg-presentation-accent';

export function normalizeAccent(value) {
  if (typeof value !== 'string') return null;
  const hex = value.trim().replace(/^#/, '');
  return /^[a-f\d]{6}$/i.test(hex) ? `#${hex.toUpperCase()}` : null;
}

function channels(hex) {
  return [1, 3, 5].map(start => parseInt(hex.slice(start, start + 2), 16));
}

function mix(hex, target, amount) {
  const other = channels(target);
  return `#${channels(hex).map((value, i) => Math.round(value + (other[i] - value) * amount).toString(16).padStart(2, '0')).join('').toUpperCase()}`;
}

export function contrastText(hex) {
  const rgb = channels(hex).map(value => {
    const channel = value / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  const luminance = rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
  return (luminance + 0.05) / 0.05 > 1.05 / (luminance + 0.05) ? '#000000' : '#FFFFFF';
}

export function createTheme(value) {
  const accent = normalizeAccent(value) || DEFAULT_ACCENT;
  const isDefault = accent === DEFAULT_ACCENT;
  const hover = isDefault ? '#112CC4' : mix(accent, '#000000', 0.18);
  return {
    '--color-accent': accent,
    '--color-accent-hover': hover,
    '--color-accent-soft': isDefault ? '#E6E8F7' : mix(accent, '#F2F0E9', 0.9),
    '--color-on-accent': contrastText(accent),
    '--color-on-accent-hover': contrastText(hover),
  };
}
