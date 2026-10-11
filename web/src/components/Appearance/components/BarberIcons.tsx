import React from 'react';

// Exact SVG helpers for Barbearia luxury icons
function createSvg(viewBox: string, paths: React.ReactNode, extraAttrs: React.SVGProps<SVGSVGElement> = {}) {
  return (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox={viewBox}
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...extraAttrs}
      {...props}
    >
      {paths}
    </svg>
  );
}

// Gold Scissors Emblem (Two crossed shears with circle loops)
export const IconBarberScissors = createSvg(
  '0 0 24 24',
  <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" y1="4" x2="8.12" y2="15.88" />
    <line x1="14.47" y1="14.48" x2="20" y2="20" />
    <line x1="8.12" y1="8.12" x2="12" y2="12" />
  </g>
);

// Barber Pole Emblem
export const IconBarberPole = () => (
  <svg width="22" height="34" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="poleGlow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#888" stopOpacity="0.4" />
        <stop offset="50%" stopColor="#FFF" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#444" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="goldCap" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFE082" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#997A15" />
      </linearGradient>
      <pattern id="barberStripes" width="12" height="12" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="12" stroke="#E53935" strokeWidth="3" />
        <line x1="3" y1="0" x2="3" y2="12" stroke="#FFFFFF" strokeWidth="3" />
        <line x1="6" y1="0" x2="6" y2="12" stroke="#1E88E5" strokeWidth="3" />
        <line x1="9" y1="0" x2="9" y2="12" stroke="#FFFFFF" strokeWidth="3" />
      </pattern>
    </defs>
    {/* Top Cap */}
    <ellipse cx="12" cy="4" rx="6" ry="3" fill="url(#goldCap)" />
    <rect x="7" y="5" width="10" height="2" fill="url(#goldCap)" />
    {/* Body Cylinder */}
    <rect x="7" y="7" width="10" height="24" rx="1" fill="url(#barberStripes)" />
    <rect x="7" y="7" width="10" height="24" rx="1" fill="url(#poleGlow)" style={{ mixBlendMode: 'overlay' }} />
    <rect x="7" y="7" width="10" height="24" rx="1" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
    {/* Bottom Cap */}
    <rect x="7" y="31" width="10" height="2" fill="url(#goldCap)" />
    <ellipse cx="12" cy="34" rx="6" ry="3" fill="url(#goldCap)" />
  </svg>
);

// Chevron Right
export const IconChevronRight = createSvg(
  '0 0 24 24',
  <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
);

// Chevron Left
export const IconChevronLeft = createSvg(
  '0 0 24 24',
  <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
);

// Eyebrow Curve Icon
export const IconEyebrowCurve = createSvg(
  '0 0 24 24',
  <path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" d="M4 14c2-4 6-7 11-7 2.5 0 4.5 1 5 2" />
);

// Eye Iris Icon
export const IconEyeIris = createSvg(
  '0 0 24 24',
  <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3.5" fill="currentColor" />
  </g>
);

// Beard Icon
export const IconBeardFace = createSvg(
  '0 0 24 24',
  <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8c0 4.5 2 8 8 8s8-3.5 8-8" />
    <path d="M7 11c1 2 2.5 3 5 3s4-1 5-3" />
    <path d="M9 13.5v1.5c0 1.7 1.3 3 3 3s3-1.3 3-3v-1.5" />
    <circle cx="12" cy="7" r="1.5" fill="currentColor" />
  </g>
);

// Makeup Brush Icon
export const IconMakeupBrush = createSvg(
  '0 0 24 24',
  <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 3l3 3-10 10-4 1 1-4 10-10z" />
    <path d="M14 7l3 3" />
    <path d="M5 19c-1 0-2 1-2 2h6c0-1-1-2-2-2z" fill="currentColor" />
  </g>
);

// Skin / Face Texture Icon
export const IconSkinTexture = createSvg(
  '0 0 24 24',
  <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a9 9 0 0 0-9 9c0 4.2 2.8 7.8 6.8 8.8.4.1.7.4.7.8v.9c0 .8.9 1.4 1.7 1.1l2.3-.9c3.8-1.5 6.5-5.2 6.5-9.7 0-5-4-9-9-9z" />
    <circle cx="9" cy="10" r="0.8" fill="currentColor" />
    <circle cx="15" cy="10" r="0.8" fill="currentColor" />
    <path d="M10 14c.5.5 1.5.5 2 0" />
    <circle cx="8" cy="13" r="0.4" fill="currentColor" />
    <circle cx="16" cy="13" r="0.4" fill="currentColor" />
    <circle cx="12" cy="11.5" r="0.4" fill="currentColor" />
  </g>
);

// Torso / Chest Hair Icon
export const IconChestBody = createSvg(
  '0 0 24 24',
  <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 4h12l2 6-4 10H8L4 10l2-6z" />
    <path d="M9 4v3a3 3 0 0 0 6 0V4" />
    <path d="M12 11v4" />
    <path d="M10 13l2-1 2 1" />
  </g>
);

// Sliders / Controls Icon
export const IconAdjustmentSliders = createSvg(
  '0 0 24 24',
  <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </g>
);

// Mouse Drag Icon
export const IconMouseDrag = createSvg(
  '0 0 24 24',
  <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="3" width="12" height="18" rx="6" />
    <line x1="12" y1="7" x2="12" y2="10" strokeWidth="2.2" />
  </g>
);

// Male & Female symbols
export const IconGenderMale = createSvg(
  '0 0 24 24',
  <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="14" r="5" />
    <line x1="19" y1="5" x2="13.6" y2="10.4" />
    <polyline points="15 5 19 5 19 9" />
  </g>
);

export const IconGenderFemale = createSvg(
  '0 0 24 24',
  <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="9" r="5" />
    <line x1="12" y1="14" x2="12" y2="21" />
    <line x1="9" y1="18" x2="15" y2="18" />
  </g>
);
