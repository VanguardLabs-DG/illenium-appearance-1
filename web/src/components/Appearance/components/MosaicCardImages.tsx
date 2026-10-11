import React from 'react';

interface CardImageProps {
  className?: string;
  locked?: boolean;
}

export const ImgJackets: React.FC<CardImageProps> = () => (
  <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
    <defs>
      <radialGradient id="bgJackets" cx="50%" cy="35%" r="70%">
        <stop offset="0%" stopColor="#2c2e38" />
        <stop offset="100%" stopColor="#101115" />
      </radialGradient>
      <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e2025" />
        <stop offset="50%" stopColor="#141518" />
        <stop offset="100%" stopColor="#0a0a0d" />
      </linearGradient>
      <linearGradient id="innerRed" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#631418" />
        <stop offset="100%" stopColor="#300a0d" />
      </linearGradient>
      <linearGradient id="lapelHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3a3d47" />
        <stop offset="100%" stopColor="#16181d" />
      </linearGradient>
    </defs>
    <rect width="200" height="130" fill="url(#bgJackets)" />
    
    {/* Inner Shirt / Lining */}
    <path d="M86 28 L100 48 L114 28 L108 80 L92 80 Z" fill="url(#innerRed)" opacity="0.9" />
    <path d="M96 28 L100 45 L104 28 Z" fill="#181818" />

    {/* Mannequin Body / Torso Under */}
    <path d="M80 18 C80 18 90 26 100 26 C110 26 120 18 120 18 C135 25 155 42 162 70 L145 130 L55 130 L38 70 C45 42 65 25 80 18 Z" fill="url(#suitGrad)" />
    
    {/* Left Shoulder & Sleeve */}
    <path d="M78 26 L42 58 L20 115 L40 120 L58 75 L70 50 Z" fill="url(#lapelHighlight)" />
    {/* Right Shoulder & Sleeve */}
    <path d="M122 26 L158 58 L180 115 L160 120 L142 75 L130 50 Z" fill="#121316" />

    {/* Suit Lapels */}
    <path d="M80 26 L96 72 L86 75 L68 45 Z" fill="#22252c" stroke="#353844" strokeWidth="0.75" />
    <path d="M120 26 L104 72 L114 75 L132 45 Z" fill="#18191e" stroke="#25272e" strokeWidth="0.75" />

    {/* Collar V-Cut */}
    <path d="M96 72 L100 130 L104 72 Z" fill="#08080a" />
    <circle cx="100" cy="85" r="2.5" fill="#30333b" />
    <circle cx="100" cy="102" r="2.5" fill="#30333b" />
  </svg>
);

export const ImgShirts: React.FC<CardImageProps> = () => (
  <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
    <defs>
      <radialGradient id="bgShirts" cx="50%" cy="35%" r="70%">
        <stop offset="0%" stopColor="#282a33" />
        <stop offset="100%" stopColor="#0f1013" />
      </radialGradient>
      <linearGradient id="tshirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#24262e" />
        <stop offset="60%" stopColor="#15161b" />
        <stop offset="100%" stopColor="#0b0b0e" />
      </linearGradient>
    </defs>
    <rect width="200" height="130" fill="url(#bgShirts)" />
    
    {/* T-Shirt Torso */}
    <path d="M72 25 C82 32 118 32 128 25 L156 46 L144 72 L130 65 L132 130 L68 130 L70 65 L56 72 L44 46 Z" fill="url(#tshirtGrad)" />
    
    {/* Neck Collar Ribbing */}
    <path d="M78 25 C88 35 112 35 122 25 C118 20 82 20 78 25 Z" fill="#121316" stroke="#363945" strokeWidth="1" />

    {/* Sleeve Creases & Folds */}
    <path d="M56 72 L70 65 L68 85 Z" fill="#0d0e11" opacity="0.6" />
    <path d="M144 72 L130 65 L132 85 Z" fill="#0d0e11" opacity="0.6" />
    <path d="M88 65 Q100 75 112 65" stroke="#2a2c35" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />
    <path d="M84 90 Q100 102 116 90" stroke="#22242c" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />
  </svg>
);

export const ImgPants: React.FC<CardImageProps> = () => (
  <svg viewBox="0 0 140 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
    <defs>
      <radialGradient id="bgPants" cx="50%" cy="30%" r="80%">
        <stop offset="0%" stopColor="#2c2e38" />
        <stop offset="100%" stopColor="#0d0e11" />
      </radialGradient>
      <linearGradient id="pantsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#252730" />
        <stop offset="50%" stopColor="#15171d" />
        <stop offset="100%" stopColor="#090a0d" />
      </linearGradient>
    </defs>
    <rect width="140" height="240" fill="url(#bgPants)" />
    
    {/* Waist / Belt */}
    <path d="M35 15 L105 15 L108 30 L32 30 Z" fill="#181a20" stroke="#363945" strokeWidth="0.8" />
    <rect x="62" y="16" width="16" height="12" rx="2" fill="#2d303b" stroke="#525666" strokeWidth="0.8" />

    {/* Cargo Pants Legs */}
    <path d="M32 30 C28 65 24 110 26 185 L52 185 C56 140 64 85 70 60 C76 85 84 140 88 185 L114 185 C116 110 112 65 108 30 Z" fill="url(#pantsGrad)" />
    
    {/* Left Cargo Pocket */}
    <rect x="23" y="85" width="16" height="24" rx="2" fill="#1a1c22" stroke="#353845" strokeWidth="0.8" />
    <path d="M23 85 L39 85 L35 91 L27 91 Z" fill="#2c2f3a" />

    {/* Right Cargo Pocket */}
    <rect x="101" y="85" width="16" height="24" rx="2" fill="#14151a" stroke="#252730" strokeWidth="0.8" />
    <path d="M101 85 L117 85 L113 91 L105 91 Z" fill="#22242c" />

    {/* Shoes at bottom */}
    <path d="M25 185 L53 185 L54 225 L18 225 L18 215 C18 200 22 190 25 185 Z" fill="#111215" stroke="#333642" strokeWidth="1" />
    <path d="M87 185 L115 185 C118 190 122 200 122 215 L122 225 L86 225 L87 185 Z" fill="#111215" stroke="#333642" strokeWidth="1" />
    <path d="M16 220 L56 220 L56 226 L16 226 Z" fill="#e2e8f0" />
    <path d="M84 220 L124 220 L124 226 L84 226 Z" fill="#e2e8f0" />
  </svg>
);

export const ImgAccessories: React.FC<CardImageProps> = ({ locked = true }) => (
  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
    <defs>
      <radialGradient id="bgAcc" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#2c2e38" />
        <stop offset="100%" stopColor="#0c0d10" />
      </radialGradient>
      <linearGradient id="glossTorso" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#30333e" />
        <stop offset="40%" stopColor="#17181f" />
        <stop offset="100%" stopColor="#08080b" />
      </linearGradient>
      <linearGradient id="silverChain" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#cbd5e1" />
        <stop offset="50%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#94a3b8" />
      </linearGradient>
    </defs>
    <rect width="200" height="120" fill="url(#bgAcc)" />

    {/* Glossy Black Mannequin Neck and Torso */}
    <path d="M85 0 L115 0 L118 25 C135 30 170 42 185 75 L155 120 L45 120 L15 75 C30 42 65 30 82 25 Z" fill="url(#glossTorso)" />
    
    {/* Chain Necklace */}
    <path d="M78 20 C82 55 92 82 100 85 C108 82 118 55 122 20" stroke="url(#silverChain)" strokeWidth="2.5" strokeDasharray="3 1.5" fill="none" />
    
    {/* Dog Tag / Pendant */}
    <rect x="96" y="85" width="8" height="14" rx="2" fill="url(#silverChain)" stroke="#64748b" strokeWidth="0.75" />

    {/* Lock Circle Icon (Like reference) */}
    {locked && (
      <g transform="translate(100, 58)">
        <circle cx="0" cy="0" r="14" fill="rgba(20, 22, 28, 0.75)" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.2" />
        <path d="M-4 -1 L-4 -4 C-4 -6.2 -2.2 -8 0 -8 C2.2 -8 4 -6.2 4 -4 L4 -1 Z" stroke="#ffffff" strokeWidth="1.2" fill="none" />
        <rect x="-6" y="-1" width="12" height="9" rx="1.5" fill="#ffffff" />
        <circle cx="0" cy="3.5" r="1.2" fill="#18191e" />
      </g>
    )}
  </svg>
);

export const ImgHands: React.FC<CardImageProps> = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
    <defs>
      <radialGradient id="bgHands" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#2a2c36" />
        <stop offset="100%" stopColor="#0e0f12" />
      </radialGradient>
      <linearGradient id="gloveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#262830" />
        <stop offset="100%" stopColor="#0d0e11" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" fill="url(#bgHands)" />
    
    {/* Arm / Wrist */}
    <path d="M35 0 L65 0 L62 40 L38 40 Z" fill="#d19a79" />

    {/* Fingerless Tactical Glove */}
    <path d="M32 35 C32 35 68 35 68 35 L72 70 L60 76 L52 74 L44 76 L36 74 L26 62 Z" fill="url(#gloveGrad)" stroke="#3e4252" strokeWidth="0.8" />
    
    {/* Fingers Exiting Glove */}
    <rect x="23" y="58" width="8" height="12" rx="3" fill="#d19a79" transform="rotate(-20 23 58)" />
    <rect x="36" y="70" width="7" height="12" rx="3" fill="#d19a79" />
    <rect x="44" y="72" width="7" height="14" rx="3" fill="#d19a79" />
    <rect x="52" y="70" width="7" height="13" rx="3" fill="#d19a79" />
    <rect x="60" y="68" width="6" height="10" rx="3" fill="#d19a79" />

    {/* Glove Strap */}
    <rect x="34" y="42" width="32" height="6" rx="1.5" fill="#14151a" stroke="#4f5466" strokeWidth="0.6" />
  </svg>
);

export const ImgHats: React.FC<CardImageProps> = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
    <defs>
      <radialGradient id="bgHats" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#2a2c36" />
        <stop offset="100%" stopColor="#0e0f12" />
      </radialGradient>
      <linearGradient id="mannequinHead" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2c2f38" />
        <stop offset="100%" stopColor="#090a0d" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" fill="url(#bgHats)" />
    
    {/* Mannequin Head */}
    <ellipse cx="50" cy="56" rx="26" ry="32" fill="url(#mannequinHead)" />
    <path d="M38 80 L62 80 L66 100 L34 100 Z" fill="#15171d" />

    {/* Fedora Hat */}
    <path d="M12 44 C12 44 28 39 50 39 C72 39 88 44 88 44 C84 48 68 49 50 49 C32 49 16 48 12 44 Z" fill="#15171d" stroke="#363945" strokeWidth="0.8" />
    <path d="M28 42 C28 42 32 20 42 16 C46 19 54 19 58 16 C68 20 72 42 72 42 Z" fill="#1e2027" stroke="#3e4252" strokeWidth="0.8" />
    {/* Pink/Accent Ribbon Band */}
    <path d="M28 40 C35 38 65 38 72 40 L72 44 C65 42 35 42 28 44 Z" fill="#e11d48" opacity="0.85" />
  </svg>
);

export const ImgGlasses: React.FC<CardImageProps> = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
    <defs>
      <radialGradient id="bgGlasses" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#2a2c36" />
        <stop offset="100%" stopColor="#0e0f12" />
      </radialGradient>
      <linearGradient id="glossGlass" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
        <stop offset="50%" stopColor="rgba(15,23,42,0.85)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" fill="url(#bgGlasses)" />
    
    {/* Mannequin Face */}
    <ellipse cx="50" cy="50" rx="30" ry="36" fill="#17181f" />
    <path d="M48 48 L52 48 L54 62 L46 62 Z" fill="#252732" opacity="0.5" />
    <path d="M42 74 Q50 78 58 74" stroke="#252732" strokeWidth="1.5" fill="none" opacity="0.4" />

    {/* Aviator Sunglasses Frame */}
    {/* Left Lens */}
    <path d="M22 42 C22 36 34 35 44 38 C45 48 43 60 34 62 C25 62 22 52 22 42 Z" fill="url(#glossGlass)" stroke="#e2e8f0" strokeWidth="1.2" />
    {/* Right Lens */}
    <path d="M78 42 C78 36 66 35 56 38 C55 48 57 60 66 62 C75 62 78 52 78 42 Z" fill="url(#glossGlass)" stroke="#e2e8f0" strokeWidth="1.2" />
    {/* Bridge Bar */}
    <line x1="44" y1="38" x2="56" y2="38" stroke="#e2e8f0" strokeWidth="1.2" />
    <line x1="43" y1="42" x2="57" y2="42" stroke="#e2e8f0" strokeWidth="0.8" />
  </svg>
);

export const ImgShoes: React.FC<CardImageProps> = () => (
  <svg viewBox="0 0 200 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
    <defs>
      <radialGradient id="bgShoes" cx="50%" cy="35%" r="70%">
        <stop offset="0%" stopColor="#2c2e38" />
        <stop offset="100%" stopColor="#0e0f12" />
      </radialGradient>
      <linearGradient id="sneakerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#24262f" />
        <stop offset="100%" stopColor="#0d0e12" />
      </linearGradient>
    </defs>
    <rect width="200" height="110" fill="url(#bgShoes)" />
    
    {/* Reflection / Floor Grid */}
    <ellipse cx="100" cy="98" rx="80" ry="10" fill="rgba(0,0,0,0.45)" />

    {/* Left High-Top Sneaker */}
    <g transform="translate(42, 10)">
      <path d="M22 25 L46 25 L45 55 L75 68 L78 80 L10 80 L12 60 L22 25 Z" fill="url(#sneakerGrad)" stroke="#3e4354" strokeWidth="0.8" />
      {/* Toe Cap */}
      <path d="M62 65 C68 65 76 72 78 80 L60 80 C60 72 61 66 62 65 Z" fill="#f8fafc" />
      {/* Laces */}
      <line x1="28" y1="36" x2="38" y2="38" stroke="#f8fafc" strokeWidth="1.5" />
      <line x1="30" y1="44" x2="40" y2="46" stroke="#f8fafc" strokeWidth="1.5" />
      <line x1="33" y1="52" x2="44" y2="54" stroke="#f8fafc" strokeWidth="1.5" />
      <line x1="37" y1="60" x2="48" y2="62" stroke="#f8fafc" strokeWidth="1.5" />
      {/* Sole */}
      <rect x="8" y="80" width="72" height="8" rx="2" fill="#ffffff" />
      <line x1="8" y1="84" x2="80" y2="84" stroke="#0f172a" strokeWidth="0.8" />
    </g>

    {/* Right High-Top Sneaker */}
    <g transform="translate(108, 12)">
      <path d="M22 25 L46 25 L45 55 L75 68 L78 80 L10 80 L12 60 L22 25 Z" fill="url(#sneakerGrad)" stroke="#3e4354" strokeWidth="0.8" />
      {/* Toe Cap */}
      <path d="M62 65 C68 65 76 72 78 80 L60 80 C60 72 61 66 62 65 Z" fill="#f8fafc" />
      {/* Laces */}
      <line x1="28" y1="36" x2="38" y2="38" stroke="#f8fafc" strokeWidth="1.5" />
      <line x1="30" y1="44" x2="40" y2="46" stroke="#f8fafc" strokeWidth="1.5" />
      <line x1="33" y1="52" x2="44" y2="54" stroke="#f8fafc" strokeWidth="1.5" />
      <line x1="37" y1="60" x2="48" y2="62" stroke="#f8fafc" strokeWidth="1.5" />
      {/* Sole */}
      <rect x="8" y="80" width="72" height="8" rx="2" fill="#ffffff" />
      <line x1="8" y1="84" x2="80" y2="84" stroke="#0f172a" strokeWidth="0.8" />
    </g>
  </svg>
);

/* ----------------- PAGE 2 ASSETS ----------------- */

export const ImgBags: React.FC<CardImageProps> = () => (
  <svg viewBox="0 0 140 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
    <defs>
      <radialGradient id="bgBags" cx="50%" cy="30%" r="80%">
        <stop offset="0%" stopColor="#2c2e38" />
        <stop offset="100%" stopColor="#0d0e11" />
      </radialGradient>
      <linearGradient id="bagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#282a35" />
        <stop offset="100%" stopColor="#0d0e12" />
      </linearGradient>
    </defs>
    <rect width="140" height="240" fill="url(#bgBags)" />

    {/* Back of Mannequin */}
    <path d="M45 20 C45 20 70 28 95 20 C110 30 135 50 135 110 L120 220 L20 220 L5 110 C5 50 30 30 45 20 Z" fill="#14151a" />

    {/* Tactical Backpack */}
    <rect x="35" y="45" width="70" height="120" rx="16" fill="url(#bagGrad)" stroke="#45495c" strokeWidth="1" />
    <rect x="44" y="60" width="52" height="42" rx="8" fill="#191a21" stroke="#353846" strokeWidth="0.8" />
    <rect x="44" y="112" width="52" height="42" rx="8" fill="#191a21" stroke="#353846" strokeWidth="0.8" />
    {/* Straps */}
    <path d="M45 45 C45 30 50 20 58 20" stroke="#4b5063" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M95 45 C95 30 90 20 82 20" stroke="#4b5063" strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
);

export const ImgEarrings: React.FC<CardImageProps> = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
    <defs>
      <radialGradient id="bgEar" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#2a2c36" />
        <stop offset="100%" stopColor="#0e0f12" />
      </radialGradient>
      <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="50%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#64748b" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" fill="url(#bgEar)" />
    
    {/* Mannequin Profile Ear */}
    <path d="M15 10 C35 10 70 25 70 55 C70 85 45 95 25 95 L15 95 Z" fill="#171820" stroke="#2a2c38" strokeWidth="1" />
    <path d="M35 30 C50 35 55 50 55 60 C55 72 45 78 35 78" stroke="#252732" strokeWidth="1.5" fill="none" />

    {/* Diamond / Crystal Drop Earring */}
    <circle cx="48" cy="62" r="2" fill="#ffffff" />
    <line x1="48" y1="64" x2="48" y2="72" stroke="#e2e8f0" strokeWidth="1" />
    <polygon points="48,72 54,80 48,90 42,80" fill="url(#crystalGrad)" stroke="#ffffff" strokeWidth="0.5" />
  </svg>
);

export const ImgDecals: React.FC<CardImageProps> = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
    <defs>
      <radialGradient id="bgDecal" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#2a2c36" />
        <stop offset="100%" stopColor="#0e0f12" />
      </radialGradient>
    </defs>
    <rect width="100" height="100" fill="url(#bgDecal)" />
    
    {/* Raglan Shirt */}
    <path d="M30 20 L70 20 L86 38 L76 48 L70 42 L70 100 L30 100 L30 42 L24 48 L14 38 Z" fill="#f1f5f9" />
    {/* Black Sleeves */}
    <path d="M30 20 L14 38 L24 48 L30 42 Z" fill="#0f172a" />
    <path d="M70 20 L86 38 L76 48 L70 42 Z" fill="#0f172a" />
    
    {/* Decal Graphic Wave Print */}
    <g transform="translate(38, 40)">
      <path d="M0 5 Q12 -2 24 5 T24 18 Q12 10 0 18 Z" fill="#0f172a" />
      <path d="M0 22 Q12 15 24 22 T24 35 Q12 27 0 35 Z" fill="#0f172a" />
    </g>
  </svg>
);

export const ImgArmor: React.FC<CardImageProps> = ({ locked = true }) => (
  <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
    <defs>
      <radialGradient id="bgArmor" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#2d303b" />
        <stop offset="100%" stopColor="#0e0f13" />
      </radialGradient>
      <linearGradient id="vestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#353945" />
        <stop offset="100%" stopColor="#181a20" />
      </linearGradient>
    </defs>
    <rect width="200" height="130" fill="url(#bgArmor)" />

    {/* Mannequin Body */}
    <path d="M80 0 C80 0 90 15 100 15 C110 15 120 0 120 0 C140 10 165 30 175 65 L155 130 L45 130 L25 65 C35 30 60 10 80 0 Z" fill="#121318" />

    {/* Tactical Bulletproof Vest */}
    <path d="M68 15 L82 15 L88 38 C94 40 106 40 112 38 L118 15 L132 15 L144 55 L138 120 L62 120 L56 55 Z" fill="url(#vestGrad)" stroke="#4e5366" strokeWidth="1" />
    
    {/* Pouches and MOLLE webbing */}
    <rect x="70" y="68" width="16" height="32" rx="3" fill="#20222a" stroke="#414656" strokeWidth="0.8" />
    <rect x="92" y="68" width="16" height="32" rx="3" fill="#20222a" stroke="#414656" strokeWidth="0.8" />
    <rect x="114" y="68" width="16" height="32" rx="3" fill="#20222a" stroke="#414656" strokeWidth="0.8" />
    
    <line x1="66" y1="52" x2="134" y2="52" stroke="#4a4f61" strokeWidth="1.5" />
    <line x1="66" y1="58" x2="134" y2="58" stroke="#4a4f61" strokeWidth="1.5" />

    {/* Lock Circle Icon (Like reference) */}
    {locked && (
      <g transform="translate(100, 60)">
        <circle cx="0" cy="0" r="14" fill="rgba(20, 22, 28, 0.75)" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.2" />
        <path d="M-4 -1 L-4 -4 C-4 -6.2 -2.2 -8 0 -8 C2.2 -8 4 -6.2 4 -4 L4 -1 Z" stroke="#ffffff" strokeWidth="1.2" fill="none" />
        <rect x="-6" y="-1" width="12" height="9" rx="1.5" fill="#ffffff" />
        <circle cx="0" cy="3.5" r="1.2" fill="#18191e" />
      </g>
    )}
  </svg>
);

export const ImgMasks: React.FC<CardImageProps> = () => (
  <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
    <defs>
      <radialGradient id="bgMask" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#2c2e38" />
        <stop offset="100%" stopColor="#0e0f12" />
      </radialGradient>
      <linearGradient id="gasMaskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#252730" />
        <stop offset="100%" stopColor="#0a0b0d" />
      </linearGradient>
    </defs>
    <rect width="140" height="140" fill="url(#bgMask)" />

    {/* Mannequin Head */}
    <ellipse cx="70" cy="65" rx="38" ry="46" fill="#15161d" />

    {/* Gas Mask Body */}
    <path d="M42 45 C42 45 52 38 70 38 C88 38 98 45 98 45 C104 68 100 95 86 108 L54 108 C40 95 36 68 42 45 Z" fill="url(#gasMaskGrad)" stroke="#3f4354" strokeWidth="1" />
    
    {/* Eye Goggles */}
    <circle cx="56" cy="58" r="10" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
    <circle cx="84" cy="58" r="10" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
    <circle cx="56" cy="58" r="7" fill="#1e293b" opacity="0.8" />
    <circle cx="84" cy="58" r="7" fill="#1e293b" opacity="0.8" />

    {/* Dual Filter Canisters */}
    <rect x="25" y="78" width="18" height="22" rx="4" fill="#1e2027" stroke="#474d5f" strokeWidth="1" transform="rotate(-15 25 78)" />
    <rect x="97" y="74" width="18" height="22" rx="4" fill="#1e2027" stroke="#474d5f" strokeWidth="1" transform="rotate(15 97 74)" />
    
    {/* Center Voice Diaphragm */}
    <circle cx="70" cy="86" r="9" fill="#1a1c22" stroke="#52586b" strokeWidth="1.2" />
  </svg>
);

export const ImgBracelets: React.FC<CardImageProps> = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
    <defs>
      <radialGradient id="bgBrac" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#2a2c36" />
        <stop offset="100%" stopColor="#0e0f12" />
      </radialGradient>
      <linearGradient id="metalBrac" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#94a3b8" />
        <stop offset="50%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#64748b" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" fill="url(#bgBrac)" />
    
    {/* Glossy Black Arm */}
    <path d="M20 100 L45 0 L65 0 L80 100 Z" fill="#171820" />
    
    {/* Metallic Bangle Bracelet */}
    <ellipse cx="50" cy="58" rx="26" ry="9" fill="none" stroke="url(#metalBrac)" strokeWidth="4.5" />
    <ellipse cx="50" cy="58" rx="26" ry="9" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.7" />
  </svg>
);

export const ImgWatches: React.FC<CardImageProps> = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
    <defs>
      <radialGradient id="bgWatch" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#2a2c36" />
        <stop offset="100%" stopColor="#0e0f12" />
      </radialGradient>
      <linearGradient id="silverWatch" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="50%" stopColor="#94a3b8" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" fill="url(#bgWatch)" />
    
    {/* Glossy Black Wrist */}
    <path d="M25 100 L40 0 L60 0 L75 100 Z" fill="#171820" />
    
    {/* Watch Strap */}
    <rect x="42" y="25" width="16" height="50" rx="3" fill="url(#silverWatch)" stroke="#64748b" strokeWidth="0.8" />
    
    {/* Watch Dial */}
    <circle cx="50" cy="50" r="15" fill="#0f172a" stroke="url(#silverWatch)" strokeWidth="2.5" />
    <circle cx="50" cy="50" r="11" fill="#1e293b" />
    {/* Watch Hands */}
    <line x1="50" y1="50" x2="50" y2="43" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="50" y1="50" x2="56" y2="52" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);
