import { useState, useEffect, useCallback } from 'react';

const useFetch = (url, options) => {
    const [fetchedData, setFetchedData] = useState({
        data: [],
        isLoading: true,
        isError: false,
        errorMessage: '',
    });

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                setFetchedData({
                    data: [],
                    isLoading: false,
                    isError: true,
                    errorMessage: `Status: ${response.status} /\n Status: ${response.statusText}`,
                });

                console.log(
                    `RESPONSE WITH STATUS & ERROR MESSAGE: ${response.status} & ${response.statusText}`
                );
            }

            const data = await response.json();

            if (response.ok && data) {
                setFetchedData({
                    data: data,
                    isLoading: false,
                    isError: false,
                    errorMessage: '',
                });
            }
        } catch (error) {
            setFetchedData({
                data: [],
                isLoading: false,
                isError: true,
                errorMessage: error,
            });

            console.error(`AN ERROR HAS OCCURED: ${error}`);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [url, fetchData]);

    const { data, isLoading, isError, errorMessage } = fetchedData;

    return { data, isLoading, isError, errorMessage };
};

export default useFetch;
