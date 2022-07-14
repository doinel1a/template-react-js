import { createContext, useState, useContext } from 'react';
import { useDarkMode } from '../hooks';

import { isSmartphoneDevice } from '../utils/deviceDetector';

const StateContext = createContext();

const ContextProvider = ({ children }) => {
    const [isSmartphone] = useState(isSmartphoneDevice());
    const [isDarkMode, setIsDarkMode] = useDarkMode();

    return (
        <StateContext.Provider
            value={{
                isDarkMode,
                setIsDarkMode,
                isSmartphone,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
export default ContextProvider;
