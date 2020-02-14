import React from 'react';
import '../../styles/style.sass';
import '../../styles/bootstrap.sass';
import Head from "next/head";
import TopBar from "./TopBar";

const Base = ({ children, meta, hideTopbar }) => {

    const title = `${meta.title ? `${meta.title} |` : null } List App`;

    return <React.Fragment>
        <Head>
            <title>{title}</title>
            <meta name="description" content={meta.description} />
            <meta name="twitter:title" content={title} />
            <meta name="og:title" property="og:title" content={title} />
        </Head>
        { !hideTopbar ? <TopBar/> : null}
        {children}
    </React.Fragment>;

};

export default Base;