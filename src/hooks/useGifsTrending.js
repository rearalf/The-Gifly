import { useContext, useState, useEffect } from 'react';
import { Context } from 'context/GifsContext';
import getTrendingGifs from 'services/getTrendingGifs';

export function useGifsTranding(){
    const [ loading, setLoading ] = useState(false);
    const { gifs, setGifs } = useContext(Context);

    useEffect(
        () => {
            const controller = new AbortController();
            setLoading(true);
            getTrendingGifs().then(gifs => {
                setGifs(gifs);
                setLoading(false);
            });
            return controller.abort();
        },
        [ setGifs ],
    );

    return {
        loading,
        gifs,
    };
}
