import React from 'react';

import styles from './styles/Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    outline?: boolean;
    inverted?: boolean;
}

const Button = (props: Props): JSX.Element => {
    const { children, className, outline, inverted, ...rest } = props;
    return (
        <button
            {...rest}
            className={`${styles['normal-btn']} ${outline && styles['btn-outlined']} ${
                inverted && styles.inverted
            } ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
