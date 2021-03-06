import React from 'react';

import './styles/Link.scss';

interface Props {
    link: string;
    children: React.ReactNode;
    className?: string;
}

const Link = (props: Props): JSX.Element => {
    return (
        <a href={props.link} className={`link-btn ${props.className}`} target="_blank" rel="noreferrer">
            {props.children}
        </a>
    );
};

export default Link;
