

import { useState } from "react";


const useFetch = (cb, options = {}) => {
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fn = async (...args) => {
        setLoading(true);
        setError(null);
        try {
            const res = await cb( ...args);
            setData(res);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, data, fn };
}

export default useFetch;