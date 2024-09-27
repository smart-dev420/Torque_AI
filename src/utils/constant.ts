export const APP_VERSION = process.env.REACT_APP_VERSION;
export const ASSET_IMAGES = process.env.REACT_APP_ASSETS_PATH + "/images";
export const ASSET_ICONS = process.env.REACT_APP_ASSETS_PATH + "/icons";

const LOGIN_IMAGES = ASSET_IMAGES + "/login";
export const imageAssets = {
  analytics: `${LOGIN_IMAGES}/analytics.png`,
  ashely: `${LOGIN_IMAGES}/ashely.png`,
  content: `${LOGIN_IMAGES}/content.png`,
  facebook: `${LOGIN_IMAGES}/facebook.png`,
  haworth: `${LOGIN_IMAGES}/haworth.png`,
  herman: `${LOGIN_IMAGES}/herman.png`,
  hni: `${LOGIN_IMAGES}/hni.png`,
  hubspot: `${LOGIN_IMAGES}/hubspot.png`,
  ikea: `${LOGIN_IMAGES}/ikea.png`,
  instagram: `${LOGIN_IMAGES}/instagram.png`,
  kimball: `${LOGIN_IMAGES}/kimball.png`,
  la: `${LOGIN_IMAGES}/la.png`,
  linkedin: `${LOGIN_IMAGES}/linkedin.png`,
  logo: `${LOGIN_IMAGES}/logo.png`,
  mail: `${LOGIN_IMAGES}/mail.png`,
  saleforce: `${LOGIN_IMAGES}/saleforce.png`,
  steelcase: `${LOGIN_IMAGES}/steelcase.png`,
  twitter: `${LOGIN_IMAGES}/twitter.png`,
  williams: `${LOGIN_IMAGES}/williams.png`,
  profile: `${ASSET_IMAGES}/profile.png`,
  symbol: `${ASSET_IMAGES}/symbol.png`,
};

export const iconAssets = {
  ic_hand: `${ASSET_ICONS}/ic_hand.png`,
  ic_arrow_down: `${ASSET_ICONS}/ic_arrow_down.png`,
  ic_check: `${ASSET_ICONS}/ic_check.png`,
  ic_lock: `${ASSET_ICONS}/ic_lock.png`,
  ic_radio_checked: `${ASSET_ICONS}/ic_radio_checked.png`,
  ic_radio_disabled: `${ASSET_ICONS}/ic_radio_disabled.png`,
  ic_analyze: `${ASSET_ICONS}/ic_analyze.png`,
  ic_close: `${ASSET_ICONS}/ic_close.png`,
};

export const scrollTop = () => {
  window.scrollTo(0, 0);
};
