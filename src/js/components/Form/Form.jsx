import { useStateContext } from '../../contexts/ContextProvider';

import { ButtonPrimary } from '../Buttons/index';

const Form = ({ children, onSubmit }) => {
    const { isDarkMode } = useStateContext();

    return (
        <form
            autoComplete='off'
            className={`
                w-96 h-full flex flex-col justify-between p-2 md:p-3 lg:p-4 rounded-lg transition-colors
                ${isDarkMode ? 'bg-slate-500' : 'bg-gray-300'}
            `}
            onSubmit={(e) => onSubmit(e)}
        >
            {children}

            <div className='flex justify-end'>
                <ButtonPrimary type='submit' text='Submit' />
            </div>
        </form>
    );
};

export default Form;
