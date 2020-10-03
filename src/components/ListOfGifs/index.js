import React from 'react';
import './styles.css';
import Gif from '../Gif';

export const ListOfGifs = ({ gifs }) => {
    return <div className="ListOfGifs">{gifs.map(data => <Gif key={data.id} {...data} />)}</div>;
};
