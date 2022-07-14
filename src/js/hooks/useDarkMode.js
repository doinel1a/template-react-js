import useStorage from './useStorage';

import { THEME_PREFERENCE_KEY } from '../const/KEYS';

const themePreference = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useStorage(
        THEME_PREFERENCE_KEY,
        themePreference()
    );

    return [isDarkMode, setIsDarkMode];
};

export default useDarkMode;
