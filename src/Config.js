import ThemeDark from './assets/styles/ThemeDark';
import ThemeLigth from './assets/styles/ThemeLigth';

const THEMES = [
  { title: 'Dark', scheme: ThemeDark },
  { title: 'Light', scheme: ThemeLigth }
];

const Config = {
  URL_API: 'https://restcountries.eu/rest/v2',
  PAGE_TITLE: 'Country API - React',
  THEMES,
  INITIAL_THEME: THEMES[0]
};

export default Config;
