import React from 'react';
import './styles.css';
import { Gifs } from '../Gif';

export const ListOfGifs = ({ gifs }) => {
    return <div className="ListOfGifs">{gifs.map(data => <Gifs key={data.id} {...data} />)}</div>;
};
