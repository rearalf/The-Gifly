import React, { Fragment } from 'react';
import { Link } from 'wouter';
import { Spinner } from 'components/Spinner';
import { ListOfGifs } from 'components/ListOfGifs';
import { SearchForm } from 'components/SearchForm';
import { useGifsTranding } from 'hooks/useGifsTrending';
import TrendingSearches from 'components/TrendingSearches';
import { Helmet } from 'react-helmet-async';
import './styles.css';

export const Home = () => {
    const Lastkeyword = localStorage.getItem('LastKeyword');
    const { loading, gifs } = useGifsTranding();

    return (
        <Fragment>
            <Helmet>
                <title>Home || The Gifly</title>
                <meta name="description" content="Search of Gifs" />
            </Helmet>
            <SearchForm />
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
