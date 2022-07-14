import { useFetch } from './hooks';

import { useStateContext } from './contexts/ContextProvider';

import { Heading } from './components/Text';
import Main from './components/Main';

import { BG_SECONDARY_DARK, BG_SECONDARY_LIGHT } from './const/COLORS';

const URL = 'https://api.coingecko.com/api/v3/coins/list';

const OPTIONS = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
};

const App = () => {
    const { isDarkMode } = useStateContext();
    const { data, isLoading, isError, errorMessage } = useFetch(URL, OPTIONS);

    if (isLoading) {
        return (
            <main
                className={`
                    w-full h-screen flex justify-center items-center transition-colors 
                    ${isDarkMode ? BG_SECONDARY_DARK : BG_SECONDARY_LIGHT} 
                `}
            >
                <Heading type='h1' text='LOADING...' />
            </main>
        );
    } else if (isError) {
        return (
            <main
                className={`
                    w-full h-screen flex justify-center items-center transition-colors
                    ${isDarkMode ? BG_SECONDARY_DARK : BG_SECONDARY_LIGHT}
                `}
            >
                <Heading type='h1' text={errorMessage} />
            </main>
        );
    } else {
        return (
            <main
                className={`
                    w-full h-screen transition-colors
                    ${isDarkMode ? BG_SECONDARY_DARK : BG_SECONDARY_LIGHT}
                `}
            >
                <Main />
            </main>
        );
    }
};

export default App;
