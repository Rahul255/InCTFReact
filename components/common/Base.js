import React from 'react';
import '../../styles/style.sass';
import '../../styles/bootstrap.sass';
import Head from "next/head";

const Base = ({ children, meta }) => {

    const title = `${meta.title ? `${meta.title} |` : null }`;

    return <React.Fragment>
        <Head>
            <title>{title}</title>
            <meta name="description" content={meta.description} />
            <meta name="twitter:title" content={title} />
            <meta name="og:title" property="og:title" content={title} />
        </Head>
        {children}
    </React.Fragment>;

};

export default Base;