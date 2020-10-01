import React, { Fragment } from 'react';
import './styles.css';
import { Link } from 'wouter';
import { ListOfGifs } from '../../components/ListOfGifs';
import { Spinner } from '../../components/Spinner';
import { useGifs } from '../../hooks/useGifs';

export const SearchResult = ({ params }) => {
    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs({ keyword });

    const handleNextPage = () => setPage(prevPage => prevPage + 1);

    return (
        <Fragment>
            <h1 className="Title">Los Gifs sobre {decodeURI(keyword)} </h1>
            <Link to="/">
                <a href="/" className="Return">
                    Retornar
                </a>
            </Link>
            {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
            <div className="ButtonPage">
                <button className="NextPage" onClick={handleNextPage}>
                    Next page
                </button>
            </div>
        </Fragment>
    );
};
