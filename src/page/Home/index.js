import React, { Fragment, useState } from 'react';
import { Link, useLocation } from 'wouter';
import TrendingSearches from 'components/TrendingSearches';
import { useGifsTranding } from 'hooks/useGifsTrending';
import { Spinner } from 'components/Spinner';
import { ListOfGifs } from 'components/ListOfGifs';
import './styles.css';

export const Home = () => {
    const [ keyword, setKeyword ] = useState('');
    const Location = useLocation();
    const setLocation = Location[1];
    const Lastkeyword = localStorage.getItem('LastKeyword');
    const { loading, gifs } = useGifsTranding();

    const handleSubmit = e => {
        e.preventDefault();
        setLocation(`/search/${keyword}`);
    };

    const handleChange = e => {
        setKeyword(e.target.value);
    };

    return (
        <Fragment>
            <h1 className="Title">The Gifytify</h1>
            <form onSubmit={handleSubmit} className="SearchForm">
                <input type="text" value={keyword} onChange={handleChange} />
                <button type="submit">Buscar</button>
            </form>
            {Lastkeyword && (
                <p>
                    Ultima busqueda &nbsp;
                    <Link to={`/search/${Lastkeyword}`}>
                        <a className="LastSearch" href="/">
                            {decodeURI(Lastkeyword)}
                        </a>
                    </Link>
                </p>
            )}
            <div className="Contetn">
                <div className="ResultsTrending">
                    <h3 className="TitleTrending">Gifs en tendencia</h3>
                    {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
                </div>
                <div className="Category">
                    <TrendingSearches />
                </div>
            </div>
        </Fragment>
    );
};
