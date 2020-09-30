import React, { Fragment, useState } from 'react';
import { Link, useLocation } from 'wouter';
import './styles.css';

export const Home = () => {
    const [ keyword, setKeyword ] = useState('');
    const Location = useLocation();
    const setLocation = Location[1];

    const Lastkeyword = localStorage.getItem('LastKeyword');

    const handleSubmit = e => {
        e.preventDefault();
        setLocation(`/search/${keyword}`);
    };

    const handleChange = e => {
        setKeyword(e.target.value);
    };

    return (
        <Fragment>
            <br />
            <form onSubmit={handleSubmit} className="SearchForm">
                <input type="text" value={keyword} onChange={handleChange} />
                <button type="submit">Buscar</button>
            </form>
            <h1 className="Title">Los Gifs</h1>
            {Lastkeyword && (
                <p>
                    Ultima busqueda &nbsp;
                    <Link to={`/search/${Lastkeyword}`}>
                        <a className="LastSearch" href="/">
                            {Lastkeyword}
                        </a>
                    </Link>
                </p>
            )}
        </Fragment>
    );
};
