import { useStateContext } from '../../contexts/ContextProvider';

import { TEXT_PRIMARY_DARK, TEXT_PRIMARY_LIGHT } from '../../const/COLORS';

const Heading = ({ type, text, customCss }) => {
    const { isDarkMode } = useStateContext();

    return type === 'h1' ? (
        <h1
            className={`
                text-4xl md:text-5xl lg:text-6xl font-medium transition-colors
                ${isDarkMode ? TEXT_PRIMARY_DARK : TEXT_PRIMARY_LIGHT}
                ${customCss ? customCss : ''}
            `}
        >
            {text}
        </h1>
    ) : type === 'h2' ? (
        <h2
            className={`
                text-3xl md:text-4xl lg:text-5xl font-medium transition-colors
                ${isDarkMode ? TEXT_PRIMARY_DARK : TEXT_PRIMARY_LIGHT}
                ${customCss ? customCss : ''}
            `}
        >
            {text}
        </h2>
    ) : type === 'h3' ? (
        <h3
            className={`
                text-2xl md:text-3xl lg:text-4xl font-medium transition-colors
                ${isDarkMode ? TEXT_PRIMARY_DARK : TEXT_PRIMARY_LIGHT}
                ${customCss ? customCss : ''}
            `}
        >
            {text}
        </h3>
    ) : type === 'h4' ? (
        <h4
            className={`
                text-xl md:text-2xl lg:text-3xl font-medium transition-colors
                ${isDarkMode ? TEXT_PRIMARY_DARK : TEXT_PRIMARY_LIGHT}
                ${customCss ? customCss : ''}
            `}
        >
            {text}
        </h4>
    ) : type === 'h5' ? (
        <h5
            className={`
                text-lg md:text-xl lg:text-2xl font-medium transition-colors
                ${isDarkMode ? TEXT_PRIMARY_DARK : TEXT_PRIMARY_LIGHT}
                ${customCss ? customCss : ''}
            `}
        >
            {text}
        </h5>
    ) : type === 'h6' ? (
        <h6
            className={`
                md:text-lg lg:text-xl font-medium transition-colors
                ${isDarkMode ? TEXT_PRIMARY_DARK : TEXT_PRIMARY_LIGHT}
                ${customCss ? customCss : ''}
            `}
        >
            {text}
        </h6>
    ) : (
        <></>
    );
};

export default Heading;
