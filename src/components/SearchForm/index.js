import React, { useState } from 'react';
import { useLocation } from 'wouter';
import './styles.css';

export function SearchForm(){
    const Location = useLocation();
    const setLocation = Location[1];
    const [ keyword, setKeyword ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        setLocation(`/search/${keyword}`);
    };

    const handleChange = e => {
        setKeyword(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="SearchForm">
            <input type="text" value={keyword} onChange={handleChange} />
            <button type="submit">Buscar</button>
        </form>
    );
}
