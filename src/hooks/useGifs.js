import { useContext, useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import { Context } from '../context/GifsContext';

export function useGifs({ keyword } = { keyword: null }){
    const [ loading, setLoading ] = useState(false);
    /* const [ gifs, setGifs ] = useState([]); */
    const { gifs, setGifs } = useContext(Context);

    const keywordToUse = keyword || localStorage.getItem('LastKeyword') || 'random';

    useEffect(
        () => {
            setLoading(true);
            getGifs({ keyword: keywordToUse }).then(gifs => {
                setGifs(gifs);
                setLoading(false);
                localStorage.setItem('LastKeyword', keyword);
            });
        },
        [ keyword, keywordToUse, setGifs ],
    );

    return {
        loading,
        gifs,
    };
}
