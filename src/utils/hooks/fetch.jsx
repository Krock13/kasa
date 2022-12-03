import { useState, useEffect } from 'react';

// Function to fetch a url using useEffect
export function useFetch(url) {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Return empty if url parameter is empty
        if (!url) return;
        // Set a loading indicator to true before fetching
        setLoading(true);
        // Declaration of an asynchronous function (fetch, parse then save in the state data) + error handling
        async function fetchData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            } catch (err) {
                console.log(err);
                setError(true);
            } finally {
                setLoading(false); // Set the loading indicator to false after fetching
            }
        }
        fetchData();
    }, [url]);
    return { data, isLoading, error };
}
