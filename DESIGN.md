---
name: Barbearia & Appearance Suite - Distrito Paulista
version: 2.1.0
description: Design tokens and specifications for the high-end Barbearia (Barbershop) and Mosaic Cloth Store interfaces with glassmorphic cards, gold/amber accents, interactive categories, and smooth viewport framing.
colors:
  primary: "#FFFFFF"
  primary-accent: "#E6CD00"
  primary-gold: "#E5C058"
  primary-glow: "rgba(229, 192, 88, 0.35)"
  background-panel: "rgba(18, 19, 24, 0.92)"
  background-header: "rgba(14, 15, 18, 0.96)"
  background-card: "rgba(26, 28, 35, 0.85)"
  background-card-hover: "rgba(38, 41, 52, 0.95)"
  surface-card: "rgba(32, 34, 42, 0.75)"
  surface-card-hover: "rgba(45, 48, 60, 0.9)"
  surface-card-active: "rgba(230, 205, 0, 0.2)"
  surface-button: "rgba(35, 38, 48, 0.85)"
  surface-button-active: "#E6CD00"
  border-subtle: "rgba(255, 255, 255, 0.08)"
  border-gold: "rgba(229, 192, 88, 0.45)"
  border-active: "#E6CD00"
  border-focus: "rgba(230, 205, 0, 0.6)"
  border-danger: "rgba(239, 68, 68, 0.4)"
  text-white: "#FFFFFF"
  text-gold: "#E5C058"
  text-muted: "rgba(255, 255, 255, 0.7)"
  text-faint: "rgba(255, 255, 255, 0.4)"
  text-dark: "#111111"
  status-success: "#22C55E"
  status-danger: "#EF4444"
typography:
  family: "'Montserrat', sans-serif"
  serif-display: "'Playfair Display', 'Cinzel', 'Georgia', serif"
  heading-barber:
    fontFamily: "{typography.serif-display}"
    fontSize: "26px"
    fontWeight: 900
    letterSpacing: "3px"
    textTransform: "uppercase"
  heading-category:
    fontFamily: "{typography.family}"
    fontSize: "14px"
    fontWeight: 800
    letterSpacing: "1px"
    textTransform: "uppercase"
  subtitle-sm:
    fontFamily: "{typography.family}"
    fontSize: "10px"
    fontWeight: 600
    letterSpacing: "1.5px"
    textTransform: "uppercase"
  body-sm:
    fontFamily: "{typography.family}"
    fontSize: "12px"
    fontWeight: 500
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "22px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "18px"
  xl: "24px"
components:
  barberContainer:
    padding: "24px"
    backdropFilter: "blur(12px)"
  barberHeader:
    height: "64px"
    borderBottom: "1px solid rgba(229, 192, 88, 0.15)"
  categoryGrid:
    gap: "8px"
  categoryCard:
    rounded: "{rounded.md}"
    backgroundColor: "{colors.background-card}"
    borderColor: "{colors.border-subtle}"
    activeBorderColor: "{colors.border-gold}"
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
  footerNavigation:
    height: "60px"
    padding: "12px 18px"
  tattooStudio:
    primaryGold: "#D4AF37"
    goldGradient: "linear-gradient(135deg, #F5D77F 0%, #D4AF37 50%, #996515 100%)"
    cardBorder: "1px solid rgba(212, 175, 55, 0.3)"
    cardBorderHover: "1px solid rgba(245, 215, 127, 0.8)"
    glowGold: "0 0 20px rgba(212, 175, 55, 0.35)"
---

# Barbearia, Loja de Roupas & Estúdio de Tatuagem - Visual Specification

## 1. Overview
The **Distrito Paulista Appearance Suite** provides custom luxury UI modules for:
1. **Barbearia (Barbershop)**: Golden macro-photography grooming suite.
2. **Loja de Roupas (Cloth Store)**: 2-page cyber mosaic grid with category badges and variation controller.
3. **Estúdio de Tatuagem (Tattoo Studio)**: Golden vintage tattoo studio interface ("ARTE NA SUA HISTÓRIA") with category cards for Cabeça, Torso, Braços, Pernas e Micropigmentação, real-time tattoo placement preview, opacity controls, and selective clearing.

## 2. Estúdio de Tatuagem - Design Tokens & Structure
- **Header:**
  - Left: Golden Tattoo Machine Line Icon.
  - Center: `ESTÚDIO DE` (Small gold antique font) + `TATUAGEM` (Bold luxury distressed gold serif) + `— ARTE NA SUA HISTÓRIA —`.
  - Right: Script lettering `Mais que tatuagens, identidade.` with a golden mini crown doodle.
- **Categories (5 Distinct Zones):**
  - **Cabeça**: Tatuagens no rosto e crânio (`ZONE_HEAD`).
  - **Torso**: Tatuagens no peito e abdômen (`ZONE_TORSO`).
  - **Braços**: Tatuagens nos braços (`ZONE_LEFT_ARM` & `ZONE_RIGHT_ARM` with arm selector).
  - **Pernas**: Tatuagens nas pernas (`ZONE_LEFT_LEG` & `ZONE_RIGHT_LEG` with leg selector).
  - **Micropigmentação**: Detalhes e micropigmentação capilar (`ZONE_HAIR`).
- **Footer:**
  - Left: `← VOLTAR` (Red glowing return button).
  - Center: `🪒 LIMPAR` (Gold/cyan outline button to clear tattoos in selected zone or all zones).
  - Right: Rose tattoo line art watermark / `✔ SALVAR` action.
- **Background Transparency:**
  - Screen wrapper has `background: transparent !important;` to ensure the player character in the game world is fully visible.

