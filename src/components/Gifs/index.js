import React from 'react';
import { Link } from 'wouter';
import './styles.css';

export const Gifs = data => {
    const { id, title, url } = data;

    return (
        <Link to={`/gif/${id}`}>
            <a href="/" id={id} className="Gif">
                <h3>{title}</h3>
                <img src={url} alt={title} />
            </a>
        </Link>
    );
};
