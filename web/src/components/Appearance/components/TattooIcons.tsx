import React from 'react';

// Golden Tattoo Machine Icon
export const IconTattooMachine: React.FC<{ size?: number; color?: string }> = ({
  size = 28,
  color = '#E5C058',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 6L20 12M20 12L34 26M20 12L12 20M34 26L38 30M34 26L26 34M38 30L42 34M38 30L30 38M42 34L44 36M42 34L36 40"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 32L6 42L16 40L38 18L30 10L8 32Z"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 42L2 46"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="16" cy="16" r="3" stroke={color} strokeWidth="2" />
    <circle cx="24" cy="24" r="2.5" stroke={color} strokeWidth="2" />
  </svg>
);

// Head Icon for Cabeça category
export const IconTattooHead: React.FC<{ size?: number; color?: string }> = ({
  size = 22,
  color = '#E5C058',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3C7.58 3 4 6.58 4 11C4 13.5 5.15 15.73 7 17.18V21H17V17.18C18.85 15.73 20 13.5 20 11C20 6.58 16.42 3 12 3Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 11C9 11 10.5 12 12 12C13.5 12 15 11 15 11"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

// Torso Icon for Torso category
export const IconTattooTorso: React.FC<{ size?: number; color?: string }> = ({
  size = 22,
  color = '#E5C058',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 4L9 8H15L18 4L21 8L18 13V21H6V13L3 8L6 4Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8V18M9 14H15"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

// Arm / Bicep Icon for Braços category
export const IconTattooArm: React.FC<{ size?: number; color?: string }> = ({
  size = 22,
  color = '#E5C058',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 12C19 12 21 8 18 5C15 2 12 4 10 7C8 10 5 11 3 13C2 14 2 17 5 18C8 19 12 18 14 15C16 16 18 15 19 12Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 9C13 11 15 12 17 11"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

// Legs Icon for Pernas category
export const IconTattooLegs: React.FC<{ size?: number; color?: string }> = ({
  size = 22,
  color = '#E5C058',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 3V10L7 17L5 21H9L10 16L11 9M16 3V10L17 17L19 21H15L14 16L13 9"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Micropigmentation / Hair Fade Icon
export const IconTattooMicropig: React.FC<{ size?: number; color?: string }> = ({
  size = 22,
  color = '#E5C058',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 14C4 8 8 3 16 3C18 3 20 4.5 20 7C20 9.5 17.5 11 15 11C15 13 16 15 17 17M6 18C7 19.5 9 21 12 21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="8" r="1" fill={color} />
    <circle cx="11" cy="7" r="1" fill={color} />
    <circle cx="14" cy="7" r="1" fill={color} />
    <circle cx="9" cy="11" r="1" fill={color} />
    <circle cx="12" cy="10" r="1" fill={color} />
  </svg>
);

// Razor / Scraper Icon for LIMPAR button
export const IconTattooRazor: React.FC<{ size?: number; color?: string }> = ({
  size = 18,
  color = '#E5C058',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 21L12 12M12 12L15 9L20 14L17 17L12 12ZM15 9L18 6L21 9L18 12M15 9L12 12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line x1="2" y1="2" x2="6" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Rose Tattoo Watermark
export const IconTattooRose: React.FC<{ size?: number; opacity?: number }> = ({
  size = 54,
  opacity = 0.35,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    <path
      d="M32 14C36 8 46 10 46 18C46 26 34 32 32 38C30 32 18 26 18 18C18 10 28 8 32 14Z"
      stroke="#E5C058"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 38C32 46 26 54 20 56M32 44C36 48 44 48 48 44"
      stroke="#E5C058"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M26 22C30 20 34 20 38 22M28 26C30 28 34 28 36 26"
      stroke="#E5C058"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);
