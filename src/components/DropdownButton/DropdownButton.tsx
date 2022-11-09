import React from 'react';

import Button from '../Button/Button';
import arrow from 'assets/images/dropdown-arrow.svg';

import './DropdownButton.scss';

interface Props {
    title: string;
    items: {
        title: string;
        onPress: string | (() => void);
    }[];
}

const DropdownButton = (props: Props): JSX.Element => {
    const { title, items } = props;

    return (
        <div className="dropdown-center">
            <Button
                className="dropdown-button rounded-pill"
                type="button"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                data-bs-offset="0,50"
            >
                {title} <img src={arrow} className="ms-2 arrow" />
            </Button>
            <ul className="dropdown-menu pt-5">
                {items.map((item, index) => (
                    <li key={`dropdown-item-${index}`}>
                        <a
                            {...(typeof item.onPress === 'string'
                                ? {
                                      href: item.onPress,
                                  }
                                : {
                                      onClick: item.onPress,
                                  })}
                            className="dropdown-item scale-anim mb-3"
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropdownButton;
