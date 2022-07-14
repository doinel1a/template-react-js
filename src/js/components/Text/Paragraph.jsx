import { useStateContext } from '../../contexts/ContextProvider';

import { TEXT_PRIMARY_DARK, TEXT_PRIMARY_LIGHT } from '../../const/COLORS';

const Paragraph = ({ text, customCss }) => {
    const { isDarkMode } = useStateContext();

    return (
        <p
            className={` 
                flex-shrink-0 md:text-lg lg:text-xl transition-colors
                ${isDarkMode ? TEXT_PRIMARY_DARK : TEXT_PRIMARY_LIGHT} 
                ${customCss ? customCss : ''} 
            `}
        >
            {text}
        </p>
    );
};

export default Paragraph;
