import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonIcon = ({ type, icon, ariaLabel, buttonCss, iconCss, onClick }) => {
    return (
        <button
            type={type}
            aria-label={ariaLabel}
            className={`
                p-1 outline-blue-600 rounded-full
                ${buttonCss ? buttonCss : ''}
            `}
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon={icon}
                className={`
                    text-3xl lg:text-4xl
                    ${iconCss ? iconCss : ''}
                `}
            />
        </button>
    );
};

export default ButtonIcon;
