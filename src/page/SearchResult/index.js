import React, { Fragment, useCallback, useEffect, useRef } from 'react';
import './styles.css';
import { Link } from 'wouter';
import { ListOfGifs } from '../../components/ListOfGifs';
import { Spinner } from '../../components/Spinner';
import { useGifs } from '../../hooks/useGifs';
import { useNearScreen } from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';

export const SearchResult = ({ params }) => {
    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs({ keyword });

    const externalRef = useRef();
    const { isNearScreen } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false,
    });

    //const handleNextPage = () => setPage(prevPage => prevPage + 1);

    const debounceHandleNextPage = useCallback(
        () => {
            debounce(setPage(prevPage => prevPage + 1), 1000);
        },
        [ setPage ],
    );

    useEffect(
        () => {
            if (isNearScreen) debounceHandleNextPage();
        },
        [ isNearScreen, debounceHandleNextPage ],
    );

    return (
        <Fragment>
            <h1 className="Title">Los Gifs sobre {decodeURI(keyword)} </h1>
            <Link to="/">
                <a href="/" className="Return">
                    Retornar
                </a>
            </Link>
            {loading ? (
                <Spinner />
            ) : (
                <Fragment>
                    <ListOfGifs gifs={gifs} />
                    <div id="visor" ref={externalRef} />
                </Fragment>
            )}
        </Fragment>
    );
};
