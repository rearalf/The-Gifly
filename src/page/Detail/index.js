import React, { Fragment } from 'react';
import './styles.css';
import { Link } from 'wouter';
import { Gifs } from '../../components/Gifs';
import useGlobalGifs from '../../hooks/useGlobalGifs';

export const Detail = ({ params }) => {
    const gifs = useGlobalGifs();
    const { id } = params;
    const data = gifs.find(singleGif => singleGif.id === id);
    return (
        <Fragment>
            <Link to="/">
                <a href="/" className="Return">
                    Retornar
                </a>
            </Link>
            <div className="Gif">
                <Gifs {...data} />
            </div>
        </Fragment>
    );
};
