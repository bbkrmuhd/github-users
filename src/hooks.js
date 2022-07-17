import React, { useEffect, useState } from "react";

export default function UseFetch(uri){
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)


    useEffect(() =>{
        if (!uri) return;

        fetch(uri)
            .then(data => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    }, [uri]);

    return {
        loading,
        data,
        error
    }

}

