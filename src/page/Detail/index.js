import React, { Fragment } from 'react';
import './styles.css';
import { Link, Redirect } from 'wouter';
import Gif from '../../components/Gif';
import useSingleGif from 'hooks/useSingleGif';
import { Spinner } from 'components/Spinner';
import { Helmet } from 'react-helmet-async';

export const Detail = ({ params }) => {
    const { gif, isError, isLoading } = useSingleGif({ id: params.id });
    const title = gif ? gif.title : '';

    if (!gif) return null;

    if (isLoading) return <Spinner />;

    if (isError) return <Redirect to="404" />;

    return (
        <Fragment>
            <Helmet>
                <title>{title} || The Gifly</title>
                <meta name="description" content={`Gif of ${title}`} />
            </Helmet>
            <Link to="/">
                <a href="/" className="Return">
                    Retornar
                </a>
            </Link>
            <h3 className="Title">{gif.title}</h3>
            <div className="Gif">
                <Gif {...gif} />
            </div>
        </Fragment>
    );
};
