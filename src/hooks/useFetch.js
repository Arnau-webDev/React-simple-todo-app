import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
        let isMounted = useRef(true);
        const [state, setState] = useState({data: null, loading: true, error: null})

        useEffect(() => {
            setState({data: null, loading: true, error: null});

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    if(isMounted) {
                        setState({
                            loading: false,
                            error: null,
                            data: data
                        }) 
                    }
                })
                .catch(e => console.log(e))
                return () => isMounted.current = false;
        }, [url])

        return state;
}
