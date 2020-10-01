import React from 'react';
import { Link } from 'wouter';
import './styles.css';

export const Gifs = data => {
    const { id, title, url } = data;

    return (
        <div className="Gif">
            <Link to={`/gif/${id}`} className="Gif-link">
                <h4>{title}</h4>
                <img src={url} alt={title} />
            </Link>
        </div>
    );
};
