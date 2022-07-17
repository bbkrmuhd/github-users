import React, {useEffect, useRef, useState} from "react";

export default function UseFetch(uri){
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)
    const mounted = useMountedRef();


    useEffect(() =>{
        if (!uri) return;
        if (!mounted.current) return;
        setLoading(true);

        fetch(uri)
            .then(data => { if (!mounted.current) throw new Error("component is not mounted");
            return data})
            .then(data => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(error =>
            {if (!mounted.current) return;
                setError(error);})
    }, [uri]);

    return {
        loading,
        data,
        error
    }

}

export function useMountedRef() {
    const mounted = useRef(false);

    useEffect(() => {
        mounted.current = true;
        return () => (mounted.current = false);
    } );

    return mounted;
}

