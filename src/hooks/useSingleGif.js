import { useContext, useState } from 'react';
import { useEffect } from 'react';
import getSingleGif from 'services/getSingleGif';
import { Context } from '../context/GifsContext';

export default function useSingleGif({ id }){
    const { gifs } = useContext(Context);
    const gifFromCache = gifs.find(singleGif => singleGif.id === id);

    const [ gif, setGif ] = useState(gifFromCache);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isError, setIsError ] = useState(false);

    useEffect(
        () => {
            setIsLoading(true);
            if (!gif) {
                getSingleGif({ id })
                    .then(res => {
                        setIsLoading(false);
                        setGif(res);
                        setIsError(false);
                    })
                    .catch(() => {
                        setIsError(true);
                        setIsLoading(false);
                    });
            }
            else {
                setIsLoading(false);
            }
        },
        [ gif, id ],
    );

    return {
        gif,
        isError,
        isLoading,
    };
}
