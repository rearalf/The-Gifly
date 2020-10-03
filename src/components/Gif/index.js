import React from 'react';
import { Link } from 'wouter';
import './styles.css';

function Gif({ id, title, url }){
    return (
        <div className="Gif">
            <Link to={`/gif/${id}`} className="Gif-link">
                <h4>{title}</h4>
                <img src={url} alt={title} />
            </Link>
        </div>
    );
}

export default React.memo(Gif);
