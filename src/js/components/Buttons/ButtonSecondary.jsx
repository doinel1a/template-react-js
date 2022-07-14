import { useStateContext } from '../../contexts/ContextProvider';

import { Paragraph } from '../Text';

const ButtonSecondary = ({ type, text, stateCss, onClick }) => {
    const { isDarkMode } = useStateContext();

    return (
        <button
            type={type}
            className={`
                flex-shrink-0 px-7 md:px-8 lg:px-10 py-3 lg:py-4 border outline-blue-600 rounded-lg transition-colors group
                ${isDarkMode ? 'border-white' : 'border-black'}
                ${stateCss ? stateCss : 'hover:bg-white focus:bg-white'}
            `}
            onClick={onClick}
        >
            <Paragraph
                text={text}
                customCss='font-bold group-hover:text-[#333] group-focus:text-[#333]'
            />
        </button>
    );
};

export default ButtonSecondary;
