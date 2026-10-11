import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useTransition as useTransitionAnimation, animated } from 'react-spring';
import { useNuiState } from '../../hooks/nuiState';
import Nui from '../../Nui';
import mock from '../../mock';
import { DEV_NUI_FIXTURE_LOCALES } from '../../dev/fixtureLocales';
import defaultAppearanceTheme from '../../theme/defaultAppearanceTheme';

import {
  CustomizationConfig,
  PedAppearance,
  AppearanceSettings,
  PedHeadBlend,
  PedFaceFeatures,
  PedHeadOverlays,
  PedHeadOverlayValue,
  PedHair,
  CameraState,
  ClothesState,
  Tattoo,
  TattoosSettings,
} from './interfaces';

import {
  APPEARANCE_INITIAL_STATE,
  SETTINGS_INITIAL_STATE,
  CAMERA_INITIAL_STATE,
  ROTATE_INITIAL_STATE,
  CLOTHES_INITIAL_STATE,
  DEV_APPEARANCE_EXAMPLE,
} from './settings';

import Ped from './Ped';
import HeadBlend from './HeadBlend';
import FaceFeatures from './FaceFeatures';
import HeadOverlays from './HeadOverlays';
import Components from './Components';
import Props from './Props';
import Modal from '../Modal';
import Tattoos from './Tattoos';
import GustaSidebar, { CategoryItem } from './components/GustaSidebar';
import GustaBottomBar from './components/GustaBottomBar';
import GustaSearchBox from './components/GustaSearchBox';
import GustaCustomizationPopover from './components/GustaCustomizationPopover';
import ThumbnailGrid from './components/ThumbnailGrid';
import RangeInput from './components/RangeInput';
import MosaicCategoryGrid from './components/MosaicCategoryGrid';
import ClothStoreHeader from './components/ClothStoreHeader';
import ClothStoreFooter from './components/ClothStoreFooter';
import ItemSelectionView from './components/ItemSelectionView';
import { LocaleCode } from './components/LocaleSwitcher';
import { setThumbnailBatchSize } from '../../utils/thumbnails';
import DevPanel, { type DevStore } from './components/DevPanel';
import BarberStoreView from './components/BarberStoreView';
import TattooStoreView from './components/TattooStoreView';

import {
  IconMask,
  IconJackets,
  IconShirt,
  IconHands,
  IconPants,
  IconShoes,
  IconBag,
  IconArmor,
  IconBadge,
  IconNecklace,
  IconHats,
  IconGlasses,
  IconEarrings,
  IconWatch,
  IconBracelet,
  IconHair,
  IconBeard,
  IconEyebrows,
  IconChestHair,
  IconEyes,
  IconMakeup,
  IconSmile,
  IconLipstick,
  IconAgeing,
  IconComplexion,
  IconSundamage,
  IconFreckles,
  IconTorso,
  IconCameraHead,
  IconArm,
  IconLeg,
  IconMicropig,
  IconParents,
  IconFaceFeatures,
  IconPed,
} from './components/GustaIcons';

import {
  Wrapper,
  ClothStoreFloatingCard,
  ClothStoreBody,
  GustaDrawer,
  GustaContentWrapper,
  GustaWorkArea,
  GustaContentColumn,
  GustaScrollArea,
  GustaHeader,
  GustaTitle,
  GustaDomainTabs,
  GustaDomainTab,
  GustaCategoryHeader,
  GustaCategoryTitle,
  GustaFloatingPopoverWrapper,
} from './styles';

const isDev = !import.meta.env.PROD;

// Dev mode config
const DEV_CONFIG = {
  ped: true,
  headBlend: true,
  faceFeatures: true,
  headOverlays: true,
  components: true,
  props: true,
  tattoos: true,
  enableExit: true,
  automaticFade: false,
  hasTracker: false,
  componentConfig: {
    masks: true,
    upperBody: true,
    lowerBody: true,
    bags: true,
    shoes: true,
    scarfAndChains: true,
    shirts: true,
    bodyArmor: true,
    decals: true,
    jackets: true,
  },
  propConfig: {
    hats: true,
    glasses: true,
    ear: true,
    watches: true,
    bracelets: true,
  },
};

// Dev-only: example tattoo items per zone so tattoos tab has data in pnpm dev
const DEV_TATTOO_ITEMS: Record<string, { name: string; label: string; hashMale: string; hashFemale: string; zone: string; collection: string }[]> = {
  ZONE_HEAD: [
    { name: 'tattoo_head_1', label: 'Skull Front', hashMale: 'mpbeach_overlays', hashFemale: 'mpbeach_overlays', zone: 'ZONE_HEAD', collection: 'mpbeach_overlays' },
    { name: 'tattoo_head_2', label: 'Tribal Lines', hashMale: 'mpbiker_overlays', hashFemale: 'mpbiker_overlays', zone: 'ZONE_HEAD', collection: 'mpbiker_overlays' },
    { name: 'tattoo_head_3', label: 'Star', hashMale: 'mpchristmas2_overlays', hashFemale: 'mpchristmas2_overlays', zone: 'ZONE_HEAD', collection: 'mpchristmas2_overlays' },
  ],
  ZONE_TORSO: [
    { name: 'tattoo_torso_1', label: 'Dragon', hashMale: 'mpbeach_overlays', hashFemale: 'mpbeach_overlays', zone: 'ZONE_TORSO', collection: 'mpbeach_overlays' },
    { name: 'tattoo_torso_2', label: 'Wings', hashMale: 'mpbiker_overlays', hashFemale: 'mpbiker_overlays', zone: 'ZONE_TORSO', collection: 'mpbiker_overlays' },
    { name: 'tattoo_torso_3', label: 'Chest Script', hashMale: 'mpchristmas2_overlays', hashFemale: 'mpchristmas2_overlays', zone: 'ZONE_TORSO', collection: 'mpchristmas2_overlays' },
  ],
  ZONE_LEFT_ARM: [
    { name: 'tattoo_arm_l_1', label: 'Sleeve Start', hashMale: 'mpbeach_overlays', hashFemale: 'mpbeach_overlays', zone: 'ZONE_LEFT_ARM', collection: 'mpbeach_overlays' },
    { name: 'tattoo_arm_l_2', label: 'Banded', hashMale: 'mpbiker_overlays', hashFemale: 'mpbiker_overlays', zone: 'ZONE_LEFT_ARM', collection: 'mpbiker_overlays' },
  ],
  ZONE_RIGHT_ARM: [
    { name: 'tattoo_arm_r_1', label: 'Sleeve Start', hashMale: 'mpbeach_overlays', hashFemale: 'mpbeach_overlays', zone: 'ZONE_RIGHT_ARM', collection: 'mpbeach_overlays' },
    { name: 'tattoo_arm_r_2', label: 'Banded', hashMale: 'mpbiker_overlays', hashFemale: 'mpbiker_overlays', zone: 'ZONE_RIGHT_ARM', collection: 'mpbiker_overlays' },
  ],
  ZONE_LEFT_LEG: [
    { name: 'tattoo_leg_l_1', label: 'Calf', hashMale: 'mpbeach_overlays', hashFemale: 'mpbeach_overlays', zone: 'ZONE_LEFT_LEG', collection: 'mpbeach_overlays' },
  ],
  ZONE_RIGHT_LEG: [
    { name: 'tattoo_leg_r_1', label: 'Calf', hashMale: 'mpbeach_overlays', hashFemale: 'mpbeach_overlays', zone: 'ZONE_RIGHT_LEG', collection: 'mpbeach_overlays' },
  ],
};

if (isDev) {
  mock('appearance_get_locales', () => DEV_NUI_FIXTURE_LOCALES);
  mock('appearance_get_settings', () => ({
    appearanceSettings: {
      ...SETTINGS_INITIAL_STATE,
      eyeColor: { min: 0, max: 24 },
      hair: {
        ...SETTINGS_INITIAL_STATE.hair,
        color: {
          items: [
            [35, 30, 25], [50, 40, 30], [70, 55, 40], [90, 70, 50],
            [110, 85, 60], [130, 100, 70], [150, 115, 80], [170, 130, 90],
            [190, 145, 100], [210, 160, 110], [230, 175, 120], [250, 190, 130],
          ],
        },
        highlight: {
          items: [
            [255, 220, 180], [255, 200, 150], [255, 180, 120], [255, 160, 90],
            [230, 140, 70], [200, 120, 50], [170, 100, 40], [140, 80, 30],
          ],
        },
      },
      tattoos: {
        ...SETTINGS_INITIAL_STATE.tattoos,
        items: Object.fromEntries(
          Object.entries(DEV_TATTOO_ITEMS).map(([zone, arr]) => [
            zone,
            arr.map((t) => ({ ...t, opacity: 1 })),
          ])
        ),
      },
    },
  }));

  // This mock returns BOTH config and appearanceData (with example clothing in dev)
  mock('appearance_get_data', () => ({
    config: DEV_CONFIG,
    appearanceData: DEV_APPEARANCE_EXAMPLE,
  }));

  mock('appearance_change_model', (model: string) => ({
    appearanceSettings: SETTINGS_INITIAL_STATE,
    appearanceData: { ...DEV_APPEARANCE_EXAMPLE, model },
  }));
  mock('appearance_change_component', () => SETTINGS_INITIAL_STATE.components);
  mock('appearance_change_prop', () => SETTINGS_INITIAL_STATE.props);
  mock('appearance_set_camera', () => 1);
  mock('appearance_rotate_ped', () => 1);
  mock('appearance_set_heading', () => 1);
  mock('get_theme_configuration', () => ({ ...defaultAppearanceTheme }));
}

/** Dev-only: config for each store type (which sidebar sections are visible) */
function getDevStoreConfig(store: DevStore): CustomizationConfig {
  const base = { ...DEV_CONFIG } as CustomizationConfig;
  const cfg = { ...base, componentConfig: { ...base.componentConfig }, propConfig: { ...base.propConfig } };
  switch (store) {
    case 'barber':
      cfg.ped = true;
      cfg.headBlend = true;
      cfg.faceFeatures = true;
      cfg.headOverlays = true;
      cfg.components = false;
      cfg.props = false;
      cfg.tattoos = false;
      break;
    case 'clothing':
      cfg.ped = false;
      cfg.headBlend = false;
      cfg.faceFeatures = false;
      cfg.headOverlays = false;
      cfg.components = true;
      cfg.props = true;
      cfg.tattoos = false;
      break;
    case 'tattoo':
      cfg.ped = false;
      cfg.headBlend = false;
      cfg.faceFeatures = false;
      cfg.headOverlays = false;
      cfg.components = false;
      cfg.props = false;
      cfg.tattoos = true;
      break;
    default:
      break;
  }
  return cfg;
}

const DEV_STORE_HEADERS: Record<DevStore, { title: string; subtitle: string }> = {
  full: { title: 'Appearance Editor', subtitle: 'Customize your character' },
  barber: { title: 'Barber', subtitle: 'Hair & appearance' },
  clothing: { title: 'Clothing Store', subtitle: 'Outfit & accessories' },
  tattoo: { title: 'Tattoo Shop', subtitle: 'Tattoos' },
};

const Appearance = () => {
  const { display, setDisplay, locales, setLocales } = useNuiState();
  const isDragging = useRef(false);
  const lastMouseX = useRef(0);

  // In dev mode, initialize with mock data immediately
  const [config, setConfig] = useState<CustomizationConfig | undefined>(
    isDev ? DEV_CONFIG as CustomizationConfig : undefined
  );

  const [devStore, setDevStore] = useState<DevStore>('clothing');

  const [data, setData] = useState<PedAppearance | undefined>(
    isDev ? DEV_APPEARANCE_EXAMPLE : undefined
  );
  const [storedData, setStoredData] = useState<PedAppearance | undefined>(
    isDev ? DEV_APPEARANCE_EXAMPLE : undefined
  );
  const [appearanceSettings, setAppearanceSettings] = useState<AppearanceSettings | undefined>(
    isDev ? SETTINGS_INITIAL_STATE : undefined
  );

  const [camera, setCamera] = useState(CAMERA_INITIAL_STATE);
  const [rotate, setRotate] = useState(ROTATE_INITIAL_STATE);
  const [clothes, setClothes] = useState(CLOTHES_INITIAL_STATE);

  const [saveModal, setSaveModal] = useState(false);
  const [exitModal, setExitModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('components');
  const [activeCamera, setActiveCamera] = useState<string>('default');
  const [currentLocale, setCurrentLocale] = useState<LocaleCode>('en');

  // Gusta Appearance state
  const [activeDomain, setActiveDomain] = useState<string>('clothing');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('comp_11');
  const [rotation, setRotation] = useState<number>(0);
  const [cameraType, setCameraType] = useState<'body' | 'head'>('body');
  const [isCustomizationOpen, setIsCustomizationOpen] = useState<boolean>(false);

  // Modern Mosaic Cloth Store state
  const [clothView, setClothView] = useState<'mosaic' | 'detail'>('mosaic');
  const [clothPage, setClothPage] = useState<1 | 2>(1);

  const CAMERA_PRESETS = useMemo(() => ['default', 'head', 'body', 'bottom'], []);

  const handleToggleCamera = useCallback(() => {
    setActiveCamera(prev => {
      const next = prev === 'head' ? 'body' : 'head';
      setCameraType(next === 'head' ? 'head' : 'body');
      Nui.post('appearance_set_camera', next);
      return next;
    });
  }, []);

  const handleNextCamera = useCallback(() => {
    const idx = CAMERA_PRESETS.indexOf(activeCamera);
    const next = CAMERA_PRESETS[(idx + 1) % CAMERA_PRESETS.length];
    setActiveCamera(next);
    setCameraType(next === 'head' ? 'head' : 'body');
    Nui.post('appearance_set_camera', next);
  }, [CAMERA_PRESETS, activeCamera]);

  const handlePrevCamera = useCallback(() => {
    const idx = CAMERA_PRESETS.indexOf(activeCamera);
    const prev = CAMERA_PRESETS[(idx - 1 + CAMERA_PRESETS.length) % CAMERA_PRESETS.length];
    setActiveCamera(prev);
    setCameraType(prev === 'head' ? 'head' : 'body');
    Nui.post('appearance_set_camera', prev);
  }, [CAMERA_PRESETS, activeCamera]);

  const handleRotateStep = useCallback((step: number) => {
    setRotation(prev => {
      const next = (prev + step) % 360;
      return next < 0 ? Math.round(next + 360) : Math.round(next);
    });
    Nui.post('appearance_rotate_ped', step);
  }, []);

  const handleSelectMosaicCategory = useCallback((categoryId: string) => {
    setActiveSubCategory(categoryId);
    setClothView('detail');

    if (['prop_0', 'prop_1', 'prop_2', 'comp_1', 'hair', 'beard'].includes(categoryId)) {
      setActiveCamera('head');
      setCameraType('head');
      Nui.post('appearance_set_camera', 'head');
    } else if (['comp_4', 'comp_6'].includes(categoryId)) {
      setActiveCamera('bottom');
      setCameraType('body');
      Nui.post('appearance_set_camera', 'bottom');
    } else {
      setActiveCamera('body');
      setCameraType('body');
      Nui.post('appearance_set_camera', 'body');
    }
  }, []);

  // Mouse drag rotation handlers (throttled with RAF to avoid flooding NUI / re-renders)
  const pendingDeltaX = useRef(0);
  const rotRafId = useRef<number | null>(null);

  const flushPedRotation = useCallback(() => {
    if (rotRafId.current !== null) {
      cancelAnimationFrame(rotRafId.current);
      rotRafId.current = null;
    }
    const delta = pendingDeltaX.current;
    if (Math.abs(delta) > 0.1) {
      pendingDeltaX.current = 0;
      setRotation(prev => {
        const next = (prev + delta) % 360;
        return next < 0 ? Math.round(next + 360) : Math.round(next);
      });
      Nui.post('appearance_rotate_ped', delta);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (rotRafId.current !== null) {
        cancelAnimationFrame(rotRafId.current);
      }
    };
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    // Only start drag on left mouse button and on the background area
    if (e.button === 0 && e.target === e.currentTarget) {
      isDragging.current = true;
      lastMouseX.current = e.clientX;
      pendingDeltaX.current = 0;
      e.preventDefault();
    }
  }, []);

  const handleViewportDragStart = useCallback((e: React.MouseEvent) => {
    if (e.button === 0) {
      isDragging.current = true;
      lastMouseX.current = e.clientX;
      pendingDeltaX.current = 0;
      e.preventDefault();
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    
    const deltaX = e.clientX - lastMouseX.current;
    lastMouseX.current = e.clientX;
    
    // Convert pixel movement to rotation (3x multiplier)
    const rotationDelta = -deltaX * 3;
    pendingDeltaX.current += rotationDelta;

    if (rotRafId.current === null) {
      rotRafId.current = requestAnimationFrame(() => {
        rotRafId.current = null;
        const delta = pendingDeltaX.current;
        if (Math.abs(delta) > 0.1) {
          pendingDeltaX.current = 0;
          setRotation(prev => {
            const next = (prev + delta) % 360;
            return next < 0 ? Math.round(next + 360) : Math.round(next);
          });
          Nui.post('appearance_rotate_ped', delta);
        }
      });
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    if (isDragging.current) {
      isDragging.current = false;
      flushPedRotation();
    }
  }, [flushPedRotation]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging.current) {
      isDragging.current = false;
      flushPedRotation();
    }
  }, [flushPedRotation]);

  const wrapperTransition = useTransitionAnimation(display.appearance, null, {
    from: { transform: 'translateX(-50px)', opacity: 0 },
    enter: { transform: 'translateY(0)', opacity: 1 },
    leave: { transform: 'translateX(-50px)', opacity: 0 },
  });

  const saveModalTransition = useTransitionAnimation(saveModal, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const exitModalTransition = useTransitionAnimation(exitModal, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const handleTurnAround = useCallback(() => {
    Nui.post('appearance_turn_around');
  }, []);

  const handleSetClothes = useCallback(
    (key: keyof ClothesState) => {
      setClothes({ ...clothes, [key]: !clothes[key] });
      if (!clothes[key]) {
        Nui.post('appearance_remove_clothes', key);
      } else {
        Nui.post('appearance_wear_clothes', { data, key });
      }
    },
    [data, clothes, setClothes],
  );

  const handleLocaleChange = useCallback(
    (code: LocaleCode) => {
      setCurrentLocale(code);
      if (isDev) return; // dev fixture only ships English strings
      Nui.post('appearance_set_locale', code).then(result => setLocales(result));
    },
    [setCurrentLocale, setLocales],
  );

  const handleSetCamera = useCallback(
    (key: keyof CameraState) => {
      setCamera({ ...CAMERA_INITIAL_STATE, [key]: !camera[key] });
      setRotate(ROTATE_INITIAL_STATE);

      if (!camera[key]) {
        Nui.post('appearance_set_camera', key);
      } else {
        Nui.post('appearance_set_camera', 'default');
      }
    },
    [camera, setCamera, setRotate],
  );

  const handleRotateLeft = useCallback(() => {
    setRotate({ left: !rotate.left, right: false });

    if (!rotate.left) {
      Nui.post('appearance_rotate_camera', 'left');
    } else {
      Nui.post('appearance_set_camera', 'current');
    }
  }, [setRotate, rotate]);

  const handleRotateRight = useCallback(() => {
    setRotate({ left: false, right: !rotate.right });

    if (!rotate.right) {
      Nui.post('appearance_rotate_camera', 'right');
    } else {
      Nui.post('appearance_set_camera', 'current');
    }
  }, [setRotate, rotate]);

  const handleSaveModal = useCallback(() => {
    setSaveModal(true);
  }, [setSaveModal]);

  const handleExitModal = useCallback(() => {
    setExitModal(true);
  }, [setExitModal]);

  const handleSave = useCallback(
    async (accept: boolean) => {
      if (accept) {
        await Nui.post('appearance_save', data);
        setSaveModal(false);
      } else {
        setSaveModal(false);
      }
    },
    [setSaveModal, data],
  );

  const handleExit = useCallback(
    async (accept: boolean) => {
      if (accept) {
        await Nui.post('appearance_exit');
        setExitModal(false);
      } else {
        setExitModal(false);
      }
    },
    [setExitModal],
  );

  const handleModelChange = useCallback(
    async (value: string) => {
      const { appearanceSettings: _appearanceSettings, appearanceData } = await Nui.post(
        'appearance_change_model',
        value,
      );

      setAppearanceSettings(_appearanceSettings);
      setData(appearanceData);
    },
    [setData, setAppearanceSettings],
  );

  const handleHeadBlendChange = useCallback(
    (key: keyof PedHeadBlend, value: number) => {
      if (!data) return;

      const updatedHeadBlend = { ...data.headBlend, [key]: value };

      const updatedData = { ...data, headBlend: updatedHeadBlend };

      setData(updatedData);

      Nui.post('appearance_change_head_blend', updatedHeadBlend);
    },
    [data, setData],
  );

  const handleFaceFeatureChange = useCallback(
    (key: keyof PedFaceFeatures, value: number) => {
      if (!data) return;

      const updatedFaceFeatures = { ...data.faceFeatures, [key]: value };

      const updatedData = { ...data, faceFeatures: updatedFaceFeatures };

      setData(updatedData);

      Nui.post('appearance_change_face_feature', updatedFaceFeatures);
    },
    [data, setData],
  );

  const handleHairChange = useCallback(
    async (key: keyof PedHair, value: number) => {
      if (!data || !appearanceSettings) return;

      const updatedHair = { ...data.hair, [key]: value };

      const updatedData = { ...data, hair: updatedHair };

      setData(updatedData);

      const updatedHairSettings = await Nui.post('appearance_change_hair', updatedHair);

      const updatedSettings = { ...appearanceSettings, hair: updatedHairSettings };

      setAppearanceSettings(updatedSettings);
    },
    [data, setData, appearanceSettings, setAppearanceSettings],
  );

  const handleChangeFade = useCallback(async (value: number) => {
    if (!data || !appearanceSettings) return;
      const { tattoos } = data;
      const updatedTattoos = { ...tattoos };
      const tattoo = appearanceSettings.tattoos.items['ZONE_HAIR'][value]
      if (!updatedTattoos[tattoo.zone]) updatedTattoos[tattoo.zone] = [];
      updatedTattoos[tattoo.zone] = [tattoo];
      await Nui.post('appearance_apply_tattoo', updatedTattoos);
      setData({ ...data, tattoos: updatedTattoos });
  }, [appearanceSettings, data, setData])

  const handleHeadOverlayChange = useCallback(
    (key: keyof PedHeadOverlays, option: keyof PedHeadOverlayValue, value: number) => {
      if (!data) return;

      const updatedValue = { ...data.headOverlays[key], [option]: value };

      const updatedData = { ...data, headOverlays: { ...data.headOverlays, [key]: updatedValue } };

      setData(updatedData);

      Nui.post('appearance_change_head_overlay', { ...data.headOverlays, [key]: updatedValue });
    },
    [data, setData],
  );

  const handleEyeColorChange = useCallback(
    (value: number) => {
      if (!data) return;

      const updatedData = { ...data, eyeColor: value };

      setData(updatedData);

      Nui.post('appearance_change_eye_color', value);
    },
    [data, setData],
  );

  const handleComponentDrawableChange = useCallback(
    async (component_id: number, drawable: number) => {
      if (!data || !appearanceSettings) return;

      const component = data.components.find(c => c.component_id === component_id);

      if (!component) return;

      const updatedComponent = { ...component, drawable, texture: 0 };

      const filteredComponents = data.components.filter(c => c.component_id !== component_id);

      const updatedComponents = [...filteredComponents, updatedComponent];

      const updatedData = { ...data, components: updatedComponents };

      setData(updatedData);

      const updatedComponentSettings = await Nui.post('appearance_change_component', updatedComponent);

      const filteredComponentsSettings = appearanceSettings.components.filter(c => c.component_id !== component_id);

      const updatedComponentsSettings = [...filteredComponentsSettings, updatedComponentSettings];

      const updatedSettings = { ...appearanceSettings, components: updatedComponentsSettings };

      setAppearanceSettings(updatedSettings);
    },
    [data, setData, appearanceSettings, setAppearanceSettings],
  );

  const handleComponentTextureChange = useCallback(
    async (component_id: number, texture: number) => {
      if (!data || !appearanceSettings) return;

      const component = data.components.find(c => c.component_id === component_id);

      if (!component) return;

      const updatedComponent = { ...component, texture };

      const filteredComponents = data.components.filter(c => c.component_id !== component_id);

      const updatedComponents = [...filteredComponents, updatedComponent];

      const updatedData = { ...data, components: updatedComponents };

      setData(updatedData);

      const updatedComponentSettings = await Nui.post('appearance_change_component', updatedComponent);

      const filteredComponentsSettings = appearanceSettings.components.filter(c => c.component_id !== component_id);

      const updatedComponentsSettings = [...filteredComponentsSettings, updatedComponentSettings];

      const updatedSettings = { ...appearanceSettings, components: updatedComponentsSettings };

      setAppearanceSettings(updatedSettings);
    },
    [data, setData, appearanceSettings, setAppearanceSettings],
  );

  const handlePropDrawableChange = useCallback(
    async (prop_id: number, drawable: number) => {
      if (!data || !appearanceSettings) return;

      const prop = data.props.find(p => p.prop_id === prop_id);

      if (!prop) return;

      const updatedProp = { ...prop, drawable, texture: 0 };

      const filteredProps = data.props.filter(p => p.prop_id !== prop_id);

      const updatedProps = [...filteredProps, updatedProp];

      const updatedData = { ...data, props: updatedProps };

      setData(updatedData);

      const updatedPropSettings = await Nui.post('appearance_change_prop', updatedProp);

      const filteredPropsSettings = appearanceSettings.props.filter(c => c.prop_id !== prop_id);

      const updatedPropsSettings = [...filteredPropsSettings, updatedPropSettings];

      const updatedSettings = { ...appearanceSettings, props: updatedPropsSettings };

      setAppearanceSettings(updatedSettings);
    },
    [data, setData, appearanceSettings, setAppearanceSettings],
  );

  const handlePropTextureChange = useCallback(
    async (prop_id: number, texture: number) => {
      if (!data || !appearanceSettings) return;

      const prop = data.props.find(p => p.prop_id === prop_id);

      if (!prop) return;

      const updatedProp = { ...prop, texture };

      const filteredProps = data.props.filter(p => p.prop_id !== prop_id);

      const updatedProps = [...filteredProps, updatedProp];

      const updatedData = { ...data, props: updatedProps };

      setData(updatedData);

      const updatedPropSettings = await Nui.post('appearance_change_prop', updatedProp);

      const filteredPropsSettings = appearanceSettings.props.filter(c => c.prop_id !== prop_id);

      const updatedPropsSettings = [...filteredPropsSettings, updatedPropSettings];

      const updatedSettings = { ...appearanceSettings, props: updatedPropsSettings };

      setAppearanceSettings(updatedSettings);
    },
    [data, setData, appearanceSettings, setAppearanceSettings],
  );

  const isPedFreemodeModel = useMemo(() => {
    if (!data) return;

    return data.model === 'mp_m_freemode_01' || data.model === 'mp_f_freemode_01';
  }, [data]);

  const isPedMale = useMemo(() => {
    if(!data) return;

    if (data.model === 'mp_m_freemode_01') {
      return true;
    }

    return false;
  }, [data]);

  const handleToggleGender = useCallback(() => {
    if (isPedMale) {
      handleModelChange('mp_f_freemode_01');
    } else {
      handleModelChange('mp_m_freemode_01');
    }
  }, [isPedMale, handleModelChange]);

  const filterTattoos = (tattooSettings: TattoosSettings) => {
    for(const zone in tattooSettings.items) {
      tattooSettings.items[zone] = tattooSettings.items[zone].filter(tattoo => {
        if(isPedMale && tattoo.hashMale !== "") {
          return tattoo;
        } else if(!isPedMale && tattoo.hashFemale !== "") {
          return tattoo;
        }
      })
    }
    return tattooSettings;
  };

  const handleApplyTattoo = useCallback(
    async (tattoo: Tattoo, opacity: number) => {
      if (!data) return;
      tattoo.opacity = opacity;
      const { tattoos } = data;
      const updatedTattoos = JSON.parse(JSON.stringify({ ...tattoos}));
      if (!updatedTattoos[tattoo.zone]) updatedTattoos[tattoo.zone] = [];
      updatedTattoos[tattoo.zone].push(tattoo);
      const applied = await Nui.post('appearance_apply_tattoo', {tattoo, updatedTattoos});
      if(applied) {
        setData({ ...data, tattoos: updatedTattoos });
      }
    },
    [data, setData],
  );

  const handlePreviewTattoo = useCallback(
    (tattoo: Tattoo, opacity: number) => {
      if (!data) return;
      tattoo.opacity = opacity;
      const { tattoos } = data;
      Nui.post('appearance_preview_tattoo', { data: tattoos, tattoo });
    },
    [data],
  );

  const handleDeleteTattoo = useCallback(
    async (tattoo: Tattoo) => {
      if (!data) return;
      const { tattoos } = data;
      const updatedTattoos = tattoos;
      // eslint-disable-next-line prettier/prettier
      updatedTattoos[tattoo.zone] = updatedTattoos[tattoo.zone].filter(tattooDelete => tattooDelete.name !== tattoo.name);
      await Nui.post('appearance_delete_tattoo', updatedTattoos);
      setData({ ...data, tattoos: updatedTattoos });
    },
    [data, setData],
  );

  const handleClearTattoos = useCallback(
    async () => {
      if (!data) return;
      const { tattoos } = data;
      const updatedTattoos = { ...tattoos };
      for (var zone in updatedTattoos) {
        if (zone !== "ZONE_HAIR") {
          updatedTattoos[zone] = [];
        }
      }
      await Nui.post('appearance_delete_tattoo', updatedTattoos);
      setData({ ...data, tattoos: updatedTattoos });
    },
    [data, setData],
  );

  useEffect(() => {
    if(!locales) {
      Nui.post('appearance_get_locales').then(result => setLocales(result));
    }

    Nui.onEvent('appearance_display', (data : any) => {
      setDisplay({ appearance: true, asynchronous: data.asynchronous });
      if (data.thumbnailBatchSize) setThumbnailBatchSize(data.thumbnailBatchSize);
    });

    Nui.onEvent('appearance_hide', () => {
      setDisplay({ appearance: false, asynchronous: false });
      setData(APPEARANCE_INITIAL_STATE);
      setStoredData(APPEARANCE_INITIAL_STATE);
      //setAppearanceSettings(SETTINGS_INITIAL_STATE);
      setCamera(CAMERA_INITIAL_STATE);
      setRotate(ROTATE_INITIAL_STATE);
    });
  }, []);

  const reloadAppearancePayload = useCallback(async (sequentialLoading: boolean) => {
    const applySettings = (raw: unknown) => {
      const r = raw as { appearanceSettings?: AppearanceSettings };
      if (r?.appearanceSettings) setAppearanceSettings(r.appearanceSettings);
    };

    const applyData = (raw: unknown) => {
      const r = raw as { config?: CustomizationConfig; appearanceData?: PedAppearance };
      if (r?.config && r?.appearanceData) {
        setConfig(r.config);
        setStoredData(r.appearanceData);
        setData(r.appearanceData);
      }
    };

    if (sequentialLoading) {
      applySettings(await Nui.post('appearance_get_settings'));
      applyData(await Nui.post('appearance_get_data'));
    } else {
      const [settingsRes, dataRes] = await Promise.all([
        Nui.post('appearance_get_settings'),
        Nui.post('appearance_get_data'),
      ]);
      applySettings(settingsRes);
      applyData(dataRes);
    }
  }, []);

  useEffect(() => {
    if (!display.appearance) return undefined;
    let cancelled = false;
    reloadAppearancePayload(display.asynchronous).catch(err => {
      if (!cancelled) console.error('[Appearance]', err);
    });
    return () => {
      cancelled = true;
    };
  }, [display.appearance, display.asynchronous, reloadAppearancePayload]);

  const effectiveConfig = useMemo(
    () => (!config ? undefined : isDev ? getDevStoreConfig(devStore) : config),
    [config, devStore],
  );

  const handleResetData = useCallback(() => {
    setData(DEV_APPEARANCE_EXAMPLE);
    setStoredData(DEV_APPEARANCE_EXAMPLE);
  }, []);

  const availableDomains = useMemo(() => {
    const cfg = effectiveConfig ?? config;
    if (!cfg) return [];
    const list: { id: string; label: string }[] = [];
    if (cfg.components || cfg.props) list.push({ id: 'clothing', label: 'Roupas' });
    if (cfg.headOverlays) list.push({ id: 'barber', label: 'Barbearia' });
    if (cfg.tattoos && isPedFreemodeModel) list.push({ id: 'tattoos', label: 'Tatuagens' });
    if (cfg.headBlend && isPedFreemodeModel) list.push({ id: 'genetics', label: 'Genética' });
    if (cfg.faceFeatures && isPedFreemodeModel) list.push({ id: 'face', label: 'Rosto' });
    if (cfg.ped) list.push({ id: 'ped', label: 'Modelos' });
    return list;
  }, [effectiveConfig, config, isPedFreemodeModel]);

  // Ensure activeDomain is valid
  useEffect(() => {
    if (availableDomains.length > 0 && !availableDomains.some(d => d.id === activeDomain)) {
      setActiveDomain(availableDomains[0].id);
    }
  }, [availableDomains, activeDomain]);

  // Build sidebar categories for the active domain
  const sidebarCategories = useMemo<CategoryItem[]>(() => {
    const cfg = effectiveConfig ?? config;
    if (!cfg) return [];

    if (activeDomain === 'clothing') {
      const list: CategoryItem[] = [];
      if (cfg.componentConfig?.jackets) list.push({ id: 'comp_11', title: 'JAQUETAS', icon: <IconJackets /> });
      if (cfg.componentConfig?.shirts) list.push({ id: 'comp_8', title: 'CAMISAS', icon: <IconShirt /> });
      if (cfg.componentConfig?.lowerBody) list.push({ id: 'comp_4', title: 'CALÇAS', icon: <IconPants /> });
      if (cfg.componentConfig?.scarfAndChains) list.push({ id: 'comp_7', title: 'ACESSÓRIOS', icon: <IconNecklace /> });
      if (cfg.componentConfig?.shoes) list.push({ id: 'comp_6', title: 'SAPATOS', icon: <IconShoes /> });
      if (cfg.componentConfig?.bodyArmor) list.push({ id: 'comp_9', title: 'COLETES', icon: <IconArmor /> });
      if (cfg.componentConfig?.masks) list.push({ id: 'comp_1', title: 'MÁSCARAS', icon: <IconMask /> });
      if (cfg.componentConfig?.bags) list.push({ id: 'comp_5', title: 'MOCHILAS', icon: <IconBag /> });
      if (cfg.propConfig?.ear) list.push({ id: 'prop_2', title: 'BRINCOS', icon: <IconEarrings /> });
      if (cfg.propConfig?.bracelets) list.push({ id: 'prop_7', title: 'BRACELETES', icon: <IconBracelet /> });
      if (cfg.propConfig?.watches) list.push({ id: 'prop_6', title: 'RELÓGIO', icon: <IconWatch /> });
      if (cfg.propConfig?.hats) list.push({ id: 'prop_0', title: 'CHAPÉUS', icon: <IconHats /> });
      if (cfg.propConfig?.glasses) list.push({ id: 'prop_1', title: 'ÓCULOS', icon: <IconGlasses /> });
      if (cfg.componentConfig?.upperBody) list.push({ id: 'comp_3', title: 'MÃOS', icon: <IconHands /> });
      if (cfg.componentConfig?.decals) list.push({ id: 'comp_10', title: 'ADESIVOS', icon: <IconBadge /> });
      return list;
    }

    if (activeDomain === 'barber') {
      return [
        { id: 'hair', title: 'Cabelo', icon: <IconHair /> },
        { id: 'beard', title: 'Barba', icon: <IconBeard /> },
        { id: 'eyebrows', title: 'Sobrancelhas', icon: <IconEyebrows /> },
        { id: 'chestHair', title: 'Pelos do Peito', icon: <IconChestHair /> },
        { id: 'eyes', title: 'Olhos', icon: <IconEyes /> },
        { id: 'makeUp', title: 'Maquiagem', icon: <IconMakeup /> },
        { id: 'blush', title: 'Blush', icon: <IconSmile /> },
        { id: 'lipstick', title: 'Batom', icon: <IconLipstick /> },
        { id: 'blemishes', title: 'Manchas', icon: <IconSmile /> },
        { id: 'ageing', title: 'Rugas', icon: <IconAgeing /> },
        { id: 'complexion', title: 'Aspecto', icon: <IconComplexion /> },
        { id: 'sunDamage', title: 'Danos do Sol', icon: <IconSundamage /> },
        { id: 'moleAndFreckles', title: 'Sardas', icon: <IconFreckles /> },
      ];
    }

    if (activeDomain === 'tattoos') {
      return [
        { id: 'ZONE_TORSO', title: 'Torso', icon: <IconTorso /> },
        { id: 'ZONE_HEAD', title: 'Cabeça', icon: <IconCameraHead /> },
        { id: 'ZONE_LEFT_ARM', title: 'Braço Esq', icon: <IconArm /> },
        { id: 'ZONE_RIGHT_ARM', title: 'Braço Dir', icon: <IconArm style={{ transform: 'scaleX(-1)' }} /> },
        { id: 'ZONE_LEFT_LEG', title: 'Perna Esq', icon: <IconLeg /> },
        { id: 'ZONE_RIGHT_LEG', title: 'Perna Dir', icon: <IconLeg style={{ transform: 'scaleX(-1)' }} /> },
        { id: 'ZONE_HAIR', title: 'Micropigmentação', icon: <IconMicropig /> },
      ];
    }

    if (activeDomain === 'genetics') {
      return [{ id: 'parents', title: 'Genética', icon: <IconParents /> }];
    }

    if (activeDomain === 'face') {
      return [{ id: 'features', title: 'Rosto', icon: <IconFaceFeatures /> }];
    }

    if (activeDomain === 'ped') {
      return [{ id: 'model', title: 'Modelo', icon: <IconPed /> }];
    }

    return [];
  }, [effectiveConfig, config, activeDomain]);

  // Ensure activeSubCategory is valid within the domain
  useEffect(() => {
    if (sidebarCategories.length > 0 && !sidebarCategories.some(c => c.id === activeSubCategory)) {
      setActiveSubCategory(sidebarCategories[0].id);
    }
  }, [sidebarCategories, activeSubCategory]);

  // Adjust camera to focus on body part when changing tattoo categories
  useEffect(() => {
    if (!display.appearance) return;
    if (activeDomain === 'tattoos') {
      if (activeSubCategory === 'ZONE_HEAD' || activeSubCategory === 'ZONE_HAIR') {
        Nui.post('appearance_set_camera', 'head');
        setCameraType('head');
      } else if (activeSubCategory === 'ZONE_LEFT_LEG' || activeSubCategory === 'ZONE_RIGHT_LEG') {
        Nui.post('appearance_set_camera', 'bottom');
        setCameraType('body');
      } else {
        Nui.post('appearance_set_camera', 'body');
        setCameraType('body');
      }
    }
  }, [display.appearance, activeDomain, activeSubCategory]);

  const currentCategoryObj = useMemo(() => {
    return sidebarCategories.find(c => c.id === activeSubCategory) || sidebarCategories[0];
  }, [sidebarCategories, activeSubCategory]);

  const activeCategoryTitle = currentCategoryObj?.title ?? 'Customização';

  const handlePrevCategory = useCallback(() => {
    if (sidebarCategories.length === 0) return;
    const idx = sidebarCategories.findIndex(c => c.id === activeSubCategory);
    const prevIdx = (idx - 1 + sidebarCategories.length) % sidebarCategories.length;
    setActiveSubCategory(sidebarCategories[prevIdx].id);
  }, [sidebarCategories, activeSubCategory]);

  const handleNextCategory = useCallback(() => {
    if (sidebarCategories.length === 0) return;
    const idx = sidebarCategories.findIndex(c => c.id === activeSubCategory);
    const nextIdx = (idx + 1) % sidebarCategories.length;
    setActiveSubCategory(sidebarCategories[nextIdx].id);
  }, [sidebarCategories, activeSubCategory]);

  const currentCategoryItemCount = useMemo(() => {
    if (!appearanceSettings) return 0;
    if (activeSubCategory.startsWith('comp_')) {
      const compId = parseInt(activeSubCategory.replace('comp_', ''), 10);
      const compSetting = appearanceSettings.components.find(c => c.component_id === compId);
      if (!compSetting) return 0;
      const min = compSetting.drawable?.min ?? 0;
      const max = compSetting.drawable?.max ?? 0;
      const blacklist = compSetting.blacklist?.drawables ?? [];
      const blocked = new Set(blacklist.map(n => Number(n)));
      let count = 0;
      for (let i = Math.max(0, min); i <= max; i++) {
        if (!blocked.has(i)) count++;
      }
      return count;
    }
    if (activeSubCategory.startsWith('prop_')) {
      const propId = parseInt(activeSubCategory.replace('prop_', ''), 10);
      const propSetting = appearanceSettings.props.find(p => p.prop_id === propId);
      if (!propSetting) return 0;
      const min = propSetting.drawable?.min ?? -1;
      const max = propSetting.drawable?.max ?? 0;
      const blacklist = propSetting.blacklist?.drawables ?? [];
      const blocked = new Set(blacklist.map(n => Number(n)));
      let count = 0;
      for (let i = Math.max(0, min); i <= max; i++) {
        if (!blocked.has(i)) count++;
      }
      return count;
    }
    if (activeSubCategory === 'hair') {
      const min = appearanceSettings.hair?.style?.min ?? 0;
      const max = appearanceSettings.hair?.style?.max ?? 0;
      return max - min + 1;
    }
    return 0;
  }, [appearanceSettings, activeSubCategory]);

  // Compute customization options for GustaCustomizationPopover
  const customizationProps = useMemo(() => {
    if (!data || !appearanceSettings) return { hasCustomization: false };

    if (activeSubCategory.startsWith('comp_')) {
      const compId = parseInt(activeSubCategory.replace('comp_', ''), 10);
      const comp = data.components.find(c => c.component_id === compId);
      const compSetting = appearanceSettings.components.find(c => c.component_id === compId);
      const maxTex = compSetting?.texture?.max ?? 0;
      return {
        hasCustomization: maxTex > 0,
        hasVariation: maxTex > 0,
        variation: comp?.texture ?? 0,
        maxVariation: maxTex,
        onVariationChange: (val: number) => handleComponentTextureChange(compId, val),
      };
    }

    if (activeSubCategory.startsWith('prop_')) {
      const propId = parseInt(activeSubCategory.replace('prop_', ''), 10);
      const prop = data.props.find(p => p.prop_id === propId);
      const propSetting = appearanceSettings.props.find(p => p.prop_id === propId);
      const maxTex = propSetting?.texture?.max ?? 0;
      return {
        hasCustomization: maxTex > 0,
        hasVariation: maxTex > 0,
        variation: prop?.texture ?? 0,
        maxVariation: maxTex,
        onVariationChange: (val: number) => handlePropTextureChange(propId, val),
      };
    }

    if (activeSubCategory === 'hair') {
      const maxTex = appearanceSettings.hair?.texture?.max ?? 0;
      return {
        hasCustomization: true,
        hasMainColor: true,
        mainColor: data.hair.color,
        onMainColorChange: (val: number) => handleHairChange('color', val),
        hasSecondaryColor: true,
        secondaryColor: data.hair.highlight,
        onSecondaryColorChange: (val: number) => handleHairChange('highlight', val),
        colorPickerType: 'colors_type_1' as const,
        hasVariation: maxTex > 0,
        variation: data.hair.texture,
        maxVariation: maxTex,
        onVariationChange: (val: number) => handleHairChange('texture', val),
      };
    }

    if (['beard', 'eyebrows', 'chestHair'].includes(activeSubCategory)) {
      const key = activeSubCategory as 'beard' | 'eyebrows' | 'chestHair';
      const overlay = data.headOverlays[key];
      return {
        hasCustomization: true,
        hasMainColor: true,
        mainColor: overlay?.color ?? 0,
        onMainColorChange: (val: number) => handleHeadOverlayChange(key, 'color', val),
        colorPickerType: 'colors_type_1' as const,
        hasOpacity: true,
        opacity: overlay?.opacity ?? 1,
        onOpacityChange: (val: number) => handleHeadOverlayChange(key, 'opacity', val),
      };
    }

    if (['makeUp', 'blush', 'lipstick'].includes(activeSubCategory)) {
      const key = activeSubCategory as 'makeUp' | 'blush' | 'lipstick';
      const overlay = data.headOverlays[key];
      return {
        hasCustomization: true,
        hasMainColor: true,
        mainColor: overlay?.color ?? 0,
        onMainColorChange: (val: number) => handleHeadOverlayChange(key, 'color', val),
        colorPickerType: key === 'makeUp' ? ('colors_type_3' as const) : ('colors_type_2' as const),
        hasOpacity: true,
        opacity: overlay?.opacity ?? 1,
        onOpacityChange: (val: number) => handleHeadOverlayChange(key, 'opacity', val),
      };
    }

    if (['blemishes', 'ageing', 'complexion', 'sunDamage', 'moleAndFreckles'].includes(activeSubCategory)) {
      const key = activeSubCategory as 'blemishes' | 'ageing' | 'complexion' | 'sunDamage' | 'moleAndFreckles';
      const overlay = data.headOverlays[key];
      return {
        hasCustomization: true,
        hasOpacity: true,
        opacity: overlay?.opacity ?? 1,
        onOpacityChange: (val: number) => handleHeadOverlayChange(key, 'opacity', val),
      };
    }

    return { hasCustomization: false };
  }, [
    data,
    appearanceSettings,
    activeSubCategory,
    handleComponentTextureChange,
    handlePropTextureChange,
    handleHairChange,
    handleHeadOverlayChange,
  ]);

  // Close popover if category lacks customization
  useEffect(() => {
    if (!customizationProps.hasCustomization) {
      setIsCustomizationOpen(false);
    }
  }, [customizationProps.hasCustomization]);

  // Jump directly to an item ID via quick search box
  const handleSearchSubmit = useCallback(
    (value: number) => {
      if (activeSubCategory.startsWith('comp_')) {
        const compId = parseInt(activeSubCategory.replace('comp_', ''), 10);
        handleComponentDrawableChange(compId, value);
      } else if (activeSubCategory.startsWith('prop_')) {
        const propId = parseInt(activeSubCategory.replace('prop_', ''), 10);
        handlePropDrawableChange(propId, value);
      } else if (activeSubCategory === 'hair') {
        handleHairChange('style', value);
      } else if (
        [
          'beard',
          'eyebrows',
          'chestHair',
          'makeUp',
          'blush',
          'lipstick',
          'blemishes',
          'ageing',
          'complexion',
          'sunDamage',
          'moleAndFreckles',
        ].includes(activeSubCategory)
      ) {
        handleHeadOverlayChange(activeSubCategory as any, 'style', value);
      }
    },
    [
      activeSubCategory,
      handleComponentDrawableChange,
      handlePropDrawableChange,
      handleHairChange,
      handleHeadOverlayChange,
    ],
  );

  // Variation step handlers for header < [🎨] >
  const handlePrevVariation = useCallback(() => {
    if (customizationProps.onVariationChange) {
      const cur = customizationProps.variation ?? 0;
      const max = customizationProps.maxVariation ?? 0;
      if (max <= 0) return;
      const prev = cur - 1 < 0 ? max : cur - 1;
      customizationProps.onVariationChange(prev);
    }
  }, [customizationProps]);

  const handleNextVariation = useCallback(() => {
    if (customizationProps.onVariationChange) {
      const cur = customizationProps.variation ?? 0;
      const max = customizationProps.maxVariation ?? 0;
      if (max <= 0) return;
      const next = cur + 1 > max ? 0 : cur + 1;
      customizationProps.onVariationChange(next);
    }
  }, [customizationProps]);

  // ESC and A / D keyboard rotation handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;

      if (e.code === 'KeyA' || e.key === 'a' || e.key === 'A') {
        handleRotateStep(-15);
      } else if (e.code === 'KeyD' || e.key === 'd' || e.key === 'D') {
        handleRotateStep(15);
      } else if (e.key === 'ArrowLeft' && clothView === 'mosaic' && activeDomain === 'clothing') {
        setClothPage(1);
      } else if (e.key === 'ArrowRight' && clothView === 'mosaic' && activeDomain === 'clothing') {
        setClothPage(2);
      } else if (e.key === 'Escape') {
        if (isCustomizationOpen) {
          setIsCustomizationOpen(false);
        } else if (clothView === 'detail' && activeDomain === 'clothing') {
          setClothView('mosaic');
        } else {
          handleExitModal();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCustomizationOpen, clothView, activeDomain, handleRotateStep, handleExitModal, setClothPage]);

  const activeLocales = locales || (isDev ? DEV_NUI_FIXTURE_LOCALES : null);

  if (!display.appearance || !config || !appearanceSettings || !data || !storedData || !activeLocales) {
    return null;
  }

  const shopTitle = (() => {
    if (isDev) {
      return DEV_STORE_HEADERS[devStore].title.toUpperCase();
    }
    if (availableDomains.length === 1) {
      switch (availableDomains[0].id) {
        case 'clothing':
          return 'LOJA DE ROUPAS';
        case 'barber':
          return 'BARBEARIA';
        case 'tattoos':
          return 'TATUAGENS';
        case 'genetics':
        case 'face':
          return 'CRIADOR DE PERSONAGEM';
      }
    }
    return (activeLocales.header?.title ?? 'APARÊNCIA').toUpperCase();
  })();

  const renderGustaContent = () => {
    const cfg = effectiveConfig ?? config;

    // Clothing Components
    if (activeSubCategory.startsWith('comp_')) {
      const compId = parseInt(activeSubCategory.replace('comp_', ''), 10);
      const comp = data.components.find(c => c.component_id === compId);
      const compSetting = appearanceSettings.components.find(c => c.component_id === compId);
      const min = compSetting?.drawable?.min ?? 0;
      const max = compSetting?.drawable?.max ?? 0;
      const selected = comp?.drawable ?? 0;
      const blacklist = compSetting?.blacklist?.drawables ?? [];

      return (
        <ThumbnailGrid
          target={{ kind: 'component', id: compId, gender: isPedMale ? 'male' : 'female' }}
          min={min}
          max={max}
          selected={selected}
          blacklisted={blacklist}
          onSelect={val => handleComponentDrawableChange(compId, val)}
        />
      );
    }

    // Props
    if (activeSubCategory.startsWith('prop_')) {
      const propId = parseInt(activeSubCategory.replace('prop_', ''), 10);
      const prop = data.props.find(p => p.prop_id === propId);
      const propSetting = appearanceSettings.props.find(p => p.prop_id === propId);
      const min = propSetting?.drawable?.min ?? -1;
      const max = propSetting?.drawable?.max ?? 0;
      const selected = prop?.drawable ?? -1;
      const blacklist = propSetting?.blacklist?.drawables ?? [];

      return (
        <ThumbnailGrid
          target={{ kind: 'prop', id: propId, gender: isPedMale ? 'male' : 'female' }}
          min={min}
          max={max}
          selected={selected}
          blacklisted={blacklist}
          onSelect={val => handlePropDrawableChange(propId, val)}
        />
      );
    }

    // Hair
    if (activeSubCategory === 'hair') {
      return (
        <ThumbnailGrid
          target={{ kind: 'component', id: 2, gender: isPedMale ? 'male' : 'female' }}
          min={appearanceSettings.hair.style.min}
          max={appearanceSettings.hair.style.max}
          selected={data.hair.style}
          blacklisted={appearanceSettings.hair.blacklist?.drawables ?? []}
          onSelect={val => handleHairChange('style', val)}
        />
      );
    }

    // Eyes
    if (activeSubCategory === 'eyes') {
      return (
        <RangeInput
          title="Cor dos Olhos"
          min={appearanceSettings.eyeColor?.min ?? 0}
          max={appearanceSettings.eyeColor?.max ?? 24}
          defaultValue={data.eyeColor}
          clientValue={storedData.eyeColor}
          onChange={handleEyeColorChange}
        />
      );
    }

    // Barbershop Overlays
    if (
      [
        'beard',
        'eyebrows',
        'chestHair',
        'makeUp',
        'blush',
        'lipstick',
        'blemishes',
        'ageing',
        'complexion',
        'sunDamage',
        'moleAndFreckles',
      ].includes(activeSubCategory)
    ) {
      const key = activeSubCategory as keyof PedHeadOverlays;
      const setting = appearanceSettings.headOverlays[key];
      const overlay = data.headOverlays[key];
      const storedOverlay = storedData.headOverlays[key];
      const title = currentCategoryObj?.title ?? key;

      return (
        <RangeInput
          title={title}
          min={setting?.style?.min ?? 0}
          max={setting?.style?.max ?? 0}
          defaultValue={overlay?.style ?? 0}
          clientValue={storedOverlay?.style ?? 0}
          onChange={val => handleHeadOverlayChange(key, 'style', val)}
        />
      );
    }

    // Tattoos
    if (activeDomain === 'tattoos') {
      const filteredZoneTattoos = (() => {
        const zoneTattoos = appearanceSettings.tattoos.items[activeSubCategory] || [];
        return zoneTattoos.filter(tattoo => {
          if (isPedMale && tattoo.hashMale !== '') return true;
          if (!isPedMale && tattoo.hashFemale !== '') return true;
          return false;
        });
      })();

      return (
        <Tattoos
          activeZone={activeSubCategory}
          settings={{
            ...appearanceSettings.tattoos,
            items: {
              ...appearanceSettings.tattoos.items,
              [activeSubCategory]: filteredZoneTattoos,
            },
          }}
          data={data.tattoos}
          storedData={storedData.tattoos}
          handleApplyTattoo={handleApplyTattoo}
          handlePreviewTattoo={handlePreviewTattoo}
          handleDeleteTattoo={handleDeleteTattoo}
          handleClearTattoos={handleClearTattoos}
        />
      );
    }

    // Genetics
    if (activeDomain === 'genetics') {
      return (
        <HeadBlend
          settings={appearanceSettings.headBlend}
          storedData={storedData.headBlend}
          data={data.headBlend}
          handleHeadBlendChange={handleHeadBlendChange}
        />
      );
    }

    // Face
    if (activeDomain === 'face') {
      return (
        <FaceFeatures
          settings={appearanceSettings.faceFeatures}
          storedData={storedData.faceFeatures}
          data={data.faceFeatures}
          handleFaceFeatureChange={handleFaceFeatureChange}
        />
      );
    }

    // Ped
    if (activeDomain === 'ped') {
      return (
        <Ped
          settings={appearanceSettings.ped}
          storedData={storedData.model}
          data={data.model}
          handleModelChange={handleModelChange}
        />
      );
    }

    return null;
  };

  // Main panel content - Modern Mosaic Cloth Store Floating Card, Bespoke Barbearia, or Tattoo Studio
  const isBarberStoreMode =
    (isDev && devStore === 'barber') ||
    activeDomain === 'barber' ||
    (availableDomains.length === 1 && availableDomains[0].id === 'barber');

  const isTattooStoreMode =
    (isDev && devStore === 'tattoo') ||
    activeDomain === 'tattoos' ||
    (availableDomains.length === 1 && availableDomains[0].id === 'tattoos');

  const mainContent = isBarberStoreMode ? (
    <Wrapper
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: isDragging.current ? 'grabbing' : 'default', justifyContent: 'center' }}
    >
      {isDev && (
        <DevPanel
          store={devStore}
          onStoreChange={(s) => {
            setDevStore(s);
            if (s === 'barber') setActiveDomain('barber');
            else if (s === 'clothing') setActiveDomain('clothing');
            else if (s === 'tattoo') setActiveDomain('tattoos');
          }}
          onLoadExampleData={() => reloadAppearancePayload(false)}
          onResetData={handleResetData}
        />
      )}
      <BarberStoreView
        data={data}
        storedData={storedData}
        appearanceSettings={appearanceSettings}
        isMale={!!isPedMale}
        activeCamera={activeCamera}
        onToggleCamera={handleToggleCamera}
        onToggleGender={handleToggleGender}
        onStartDrag={handleViewportDragStart}
        onHairChange={handleHairChange}
        onHeadOverlayChange={handleHeadOverlayChange}
        onEyeColorChange={handleEyeColorChange}
        onExit={handleExitModal}
        onSave={handleSaveModal}
        isDev={isDev}
      />
    </Wrapper>
  ) : isTattooStoreMode ? (
    <Wrapper
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: isDragging.current ? 'grabbing' : 'default' }}
    >
      {isDev && (
        <DevPanel
          store={devStore}
          onStoreChange={(s) => {
            setDevStore(s);
            if (s === 'barber') setActiveDomain('barber');
            else if (s === 'clothing') setActiveDomain('clothing');
            else if (s === 'tattoo') setActiveDomain('tattoos');
          }}
          onLoadExampleData={() => reloadAppearancePayload(false)}
          onResetData={handleResetData}
        />
      )}
      <TattooStoreView
        data={data}
        storedData={storedData}
        appearanceSettings={appearanceSettings}
        isMale={!!isPedMale}
        activeCamera={activeCamera}
        onToggleCamera={handleToggleCamera}
        handleApplyTattoo={handleApplyTattoo}
        handlePreviewTattoo={handlePreviewTattoo}
        handleDeleteTattoo={handleDeleteTattoo}
        handleClearTattoos={handleClearTattoos}
        onExit={handleExitModal}
        onSave={handleSaveModal}
        isDev={isDev}
      />
    </Wrapper>
  ) : (
    <Wrapper
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: isDragging.current ? 'grabbing' : 'default', justifyContent: 'flex-end' }}
    >
      {isDev && (
        <DevPanel
          store={devStore}
          onStoreChange={(s) => {
            setDevStore(s);
            if (s === 'barber') setActiveDomain('barber');
            else if (s === 'clothing') setActiveDomain('clothing');
            else if (s === 'tattoo') setActiveDomain('tattoos');
          }}
          onLoadExampleData={() => reloadAppearancePayload(false)}
          onResetData={handleResetData}
        />
      )}

      {/* Floating Customization Popover (Colors, Opacity, Variations) */}
      {isCustomizationOpen && customizationProps.hasCustomization && (
        <GustaFloatingPopoverWrapper style={{ position: 'relative', left: 'auto', right: 'auto', marginRight: '16px', zIndex: 100 }}>
          <GustaCustomizationPopover
            hasMainColor={customizationProps.hasMainColor}
            mainColor={customizationProps.mainColor}
            onMainColorChange={customizationProps.onMainColorChange}
            colorPickerType={customizationProps.colorPickerType}
            hasSecondaryColor={customizationProps.hasSecondaryColor}
            secondaryColor={customizationProps.secondaryColor}
            onSecondaryColorChange={customizationProps.onSecondaryColorChange}
            hasOpacity={customizationProps.hasOpacity}
            opacity={customizationProps.opacity}
            onOpacityChange={customizationProps.onOpacityChange}
            hasVariation={customizationProps.hasVariation}
            variation={customizationProps.variation}
            maxVariation={customizationProps.maxVariation}
            onVariationChange={customizationProps.onVariationChange}
          />
        </GustaFloatingPopoverWrapper>
      )}

      {/* Centered Luxury Card */}
      <ClothStoreFloatingCard>
        {/* Header with Camera < [🧍] > & Texture Variations < [🎨] > */}
        <ClothStoreHeader
          title={activeDomain === 'clothing' ? 'CLOTH STORE' : shopTitle}
          cameraType={activeCamera}
          onPrevCamera={handlePrevCamera}
          onNextCamera={handleNextCamera}
          onToggleCamera={handleToggleCamera}
          hasCustomization={customizationProps.hasCustomization}
          isCustomizationOpen={isCustomizationOpen}
          onToggleCustomization={() => setIsCustomizationOpen(prev => !prev)}
          onPrevVariation={handlePrevVariation}
          onNextVariation={handleNextVariation}
        />

        {/* Optional Domain Tabs when multiple domains are available (e.g. Creator mode) */}
        {availableDomains.length > 1 && (
          <div style={{ padding: '6px 12px', background: 'rgba(15, 16, 20, 0.95)', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <GustaDomainTabs>
              {availableDomains.map(d => (
                <GustaDomainTab
                  key={d.id}
                  $active={activeDomain === d.id}
                  onClick={() => {
                    setActiveDomain(d.id);
                    if (d.id === 'clothing') setClothView('mosaic');
                  }}
                >
                  {d.label}
                </GustaDomainTab>
              ))}
            </GustaDomainTabs>
          </div>
        )}

        {/* Card Body */}
        <ClothStoreBody>
          {activeDomain === 'clothing' && clothView === 'mosaic' ? (
            <MosaicCategoryGrid
              page={clothPage}
              onSelectCategory={handleSelectMosaicCategory}
              activeCategoryId={activeSubCategory}
            />
          ) : activeDomain === 'clothing' && clothView === 'detail' ? (
            <ItemSelectionView
              categoryTitle={activeCategoryTitle}
              categoryIcon={currentCategoryObj?.icon}
              totalItems={currentCategoryItemCount}
              onBack={() => setClothView('mosaic')}
              onSearchSubmit={handleSearchSubmit}
            >
              {renderGustaContent()}
            </ItemSelectionView>
          ) : (
            <ItemSelectionView
              categoryTitle={activeCategoryTitle}
              categoryIcon={currentCategoryObj?.icon}
              totalItems={currentCategoryItemCount}
              onBack={() => setActiveDomain('clothing')}
              onSearchSubmit={handleSearchSubmit}
            >
              {renderGustaContent()}
            </ItemSelectionView>
          )}
        </ClothStoreBody>

        {/* Footer Navigation (Pagination < 01 >, Voltar, Salvar & Floating A ⟲ D) */}
        <ClothStoreFooter
          page={clothPage}
          onPageChange={setClothPage}
          isDetailView={activeDomain === 'clothing' && clothView === 'detail'}
          onBackToMosaic={() => setClothView('mosaic')}
          onExit={handleExitModal}
          onSave={handleSaveModal}
          onRotateLeft={() => handleRotateStep(-15)}
          onRotateRight={() => handleRotateStep(15)}
        />
      </ClothStoreFloatingCard>
    </Wrapper>
  );

  // In dev mode, render directly without animation
  if (isDev) {
    return (
      <>
        {mainContent}
        {saveModal && (
          <Modal
            title={activeLocales.modal.save.title}
            description={activeLocales.modal.save.description}
            accept={activeLocales.modal.accept}
            decline={activeLocales.modal.decline}
            handleAccept={() => handleSave(true)}
            handleDecline={() => handleSave(false)}
          />
        )}
        {exitModal && (
          <Modal
            title={activeLocales.modal.exit.title}
            description={activeLocales.modal.exit.description}
            accept={activeLocales.modal.accept}
            decline={activeLocales.modal.decline}
            handleAccept={() => handleExit(true)}
            handleDecline={() => handleExit(false)}
          />
        )}
      </>
    );
  }

  return (
    <>
      {wrapperTransition.map(
        ({ item, key, props: style }) =>
          item && (
            <animated.div key={key} style={style}>
              {mainContent}
            </animated.div>
          ),
      )}
      {saveModalTransition.map(
        ({ item, key, props: style }) =>
          item && (
            <animated.div key={key} style={style}>
              <Modal
                title={activeLocales.modal.save.title}
                description={activeLocales.modal.save.description}
                accept={activeLocales.modal.accept}
                decline={activeLocales.modal.decline}
                handleAccept={() => handleSave(true)}
                handleDecline={() => handleSave(false)}
              />
            </animated.div>
          ),
      )}
      {exitModalTransition.map(
        ({ item, key, props: style }) =>
          item && (
            <animated.div key={key} style={style}>
              <Modal
                title={activeLocales.modal.exit.title}
                description={activeLocales.modal.exit.description}
                accept={activeLocales.modal.accept}
                decline={activeLocales.modal.decline}
                handleAccept={() => handleExit(true)}
                handleDecline={() => handleExit(false)}
              />
            </animated.div>
          ),
      )}
    </>
  );
};

export default Appearance;
