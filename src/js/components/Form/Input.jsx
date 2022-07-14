import { useStateContext } from '../../contexts/ContextProvider';

import { TEXT_PRIMARY_DARK, TEXT_PRIMARY_LIGHT } from '../../const/COLORS';

const Input = ({
    id,
    type,
    value,
    label,
    labelCss,
    onChange,
    onFocus,
    onBlur,
}) => {
    const { isDarkMode } = useStateContext();

    switch (type) {
        case 'text':
            return (
                <div className='flex flex-col justify-end'>
                    <label
                        htmlFor={id}
                        className={` 
                            text-left flex-shrink-0 md:text-lg lg:text-xl transition-colors
                            ${
                                isDarkMode
                                    ? TEXT_PRIMARY_DARK
                                    : TEXT_PRIMARY_LIGHT
                            } 
                            ${labelCss ? labelCss : ''} 
                        `}
                    >
                        {label}
                    </label>
                    <input
                        type='text'
                        id={id}
                        name={id}
                        value={value}
                        placeholder={`Insert ${label.toLowerCase()}`}
                        className={` ml-2 p-1 rounded-lg outline-blue-600 text-[#333] md:text-lg lg:text-xl `}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                </div>
            );

        case 'number':
            return (
                <div className='flex flex-col mb-4'>
                    <label
                        htmlFor={id}
                        className={` 
                            text-left flex-shrink-0 md:text-lg lg:text-xl transition-colors
                            ${
                                isDarkMode
                                    ? TEXT_PRIMARY_DARK
                                    : TEXT_PRIMARY_LIGHT
                            } 
                            ${labelCss ? labelCss : ''} 
                        `}
                    >
                        {label}
                    </label>
                    <input
                        type='number'
                        id={id}
                        name={id}
                        inputMode='numeric'
                        step='0.0001'
                        placeholder={`Insert ${label.toLowerCase()}`}
                        className={` 
                            ml-2 p-1 rounded-lg outline-blue-600 text-[#333] md:text-lg lg:text-xl
                            ${
                                id === 'day' || id === 'month' || id === 'year'
                                    ? 'w-20'
                                    : (id === 'apr' || id === 'apy') && 'w-32'
                            }
                        `}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                </div>
            );

        default:
            return <input type='text' />;
    }
};

export default Input;
