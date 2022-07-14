import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Paragraph } from '../Text';

const ButtonPrimary = ({ type, text, icon, stateCss, onClick }) => {
    return (
        <button
            type={type}
            className={`
                flex justify-center items-center flex-shrink-0 px-7 md:px-8 lg:px-10 py-3 lg:py-4 outline-blue-600 rounded-lg transition-colors
                ${
                    stateCss
                        ? stateCss
                        : 'bg-blue-600 hover:bg-blue-700 focus:bg-blue-700'
                } 
            `}
            onClick={onClick}
        >
            {icon ? (
                <FontAwesomeIcon
                    icon={icon}
                    className='text-lg lg:text-xl flex-shrink-0 mr-2 transition-colors text-white'
                />
            ) : (
                <></>
            )}
            <Paragraph
                text={text}
                customCss={` 
                    font-bold !text-white
                    ${icon ? 'ml-2' : ''} 
                `}
            />
        </button>
    );
};

export default ButtonPrimary;
