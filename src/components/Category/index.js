import React, { Fragment } from 'react';
import { Link } from 'wouter';
import './styles.css';

export const Category = ({ name, list = [] }) => {
    return (
        <Fragment>
            <h3 className="CategoryTitle">{name}</h3>
            <ul className="CategoryList">
                {list.map(single => (
                    <li key={single}>
                        <Link className="CategoryLink" to={`/search/${single}`}>
                            {single}
                        </Link>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
};
