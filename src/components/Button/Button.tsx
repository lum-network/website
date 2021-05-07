import React from 'react';

import './styles/Button.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    outline?: boolean;
}

const Button = (props: Props): JSX.Element => {
    const { children, className, outline, ...rest } = props;
    return (
        <button {...rest} className={`normal-btn px-4 py-3 ${outline && 'btn-outlined'} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
