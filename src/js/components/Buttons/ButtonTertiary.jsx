import { useStateContext } from '../../contexts/ContextProvider';

import { Paragraph } from '../Text';

const ButtonTertiary = ({ type, text, stateCss, onClick }) => {
    const { isDarkMode } = useStateContext();

    return (
        <button
            type={type}
            className={`
                flex-shrink-0 px-7 md:px-8 lg:px-10 py-3 lg:py-4 outline-blue-600 rounded-lg transition-colors group
                ${isDarkMode ? '' : ''}
                ${stateCss ? stateCss : ''}
            `}
            onClick={onClick}
        >
            <Paragraph
                text={text}
                customCss='font-bold text-blue-400 group-hover:text-blue-600 group-focus:text-blue-600'
            />
        </button>
    );
};

export default ButtonTertiary;
