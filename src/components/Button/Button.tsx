import React from 'react';

import './styles/Button.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    outline?: boolean;
    inverted?: boolean;
}

const Button = (props: Props): JSX.Element => {
    const { children, className, outline, inverted, ...rest } = props;
    return (
        <button {...rest} className={`normal-btn ${outline && 'btn-outlined'} ${inverted && 'inverted'} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
