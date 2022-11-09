import React from 'react';

import './styles/Button.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    outline?: boolean;
    inverted?: boolean;
    custom?: boolean;
}

const Button = (props: Props): JSX.Element => {
    const { children, className, outline, inverted, custom, ...rest } = props;
    return (
        <button
            {...rest}
            className={`${
                !custom ? `normal-btn rounded-pill ${outline && 'btn-outlined'} ${inverted && 'inverted'} ` : ''
            }${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
