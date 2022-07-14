import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { useStateContext } from '../contexts/ContextProvider';

import { Logo } from './Text';
import { ButtonIcon } from './Buttons';

import { BG_PRIMARY_DARK, BG_PRIMARY_LIGHT } from '../const/COLORS';

const Header = () => {
    const { isDarkMode, setIsDarkMode } = useStateContext();

    return (
        <header
            className={`
                w-full header-h fixed top-0 z-10 flex justify-center px-3 transition-colors
                ${isDarkMode ? BG_PRIMARY_DARK : BG_PRIMARY_LIGHT}
            `}
        >
            <div className='container h-full flex justify-between items-center'>
                <Logo text='APP' ariaLabel='Homepage' />
                <ButtonIcon
                    type='button'
                    icon={isDarkMode ? faSun : faMoon}
                    ariaLabel={
                        isDarkMode
                            ? 'Set website in light mode'
                            : 'Set website in dark mode'
                    }
                    iconCss={`${
                        isDarkMode ? 'text-amber-200' : 'text-amber-500'
                    }`}
                    onClick={() => setIsDarkMode(!isDarkMode)}
                />
            </div>
        </header>
    );
};

export default Header;
