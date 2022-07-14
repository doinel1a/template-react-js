import { Link } from 'react-router-dom';

import { useStateContext } from '../../contexts/ContextProvider';

import { TEXT_PRIMARY_DARK, TEXT_PRIMARY_LIGHT } from '../../const/COLORS';

const Logo = ({ text, ariaLabel }) => {
    const { isDarkMode } = useStateContext();

    return (
        <Link to='/'>
            <span
                aria-label={ariaLabel}
                className={`
                    logo p-1 outline-blue-600 rounded-lg 
                    text-xl lg:text-3xl font-bold cursor-pointer transition-colors
                    ${isDarkMode ? TEXT_PRIMARY_DARK : TEXT_PRIMARY_LIGHT}
                `}
                tabIndex={0}
            >
                {text}
            </span>
        </Link>
    );
};

export default Logo;
