import React from 'react';
import './styles.css';
import { Gifs } from '../Gifs';

export const ListOfGifs = ({ gifs }) => {
    return <div className="ContentGifs">{gifs.map(data => <Gifs key={data.id} {...data} />)}</div>;
};
