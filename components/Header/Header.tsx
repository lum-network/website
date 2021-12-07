import React, { useEffect } from 'react';
import { useTranslation } from 'next-i18next';

import { AssetsSrc, LUM_EXPLORER, LUM_MEDIUM, LUM_WALLET } from 'constant';
import { Button, Link } from 'components';
import { gsap } from 'utils';

import styles from './styles/Header.module.scss';

const Header = ({
    onGetInformed,
    gsapScrollTrigger,
    bgTriggerElem,
    mainnetEnded,
}: {
    onGetInformed: () => void;
    gsapScrollTrigger: string;
    mainnetEnded: boolean;
    bgTriggerElem?: string;
}): JSX.Element => {
    const { t } = useTranslation();
    useEffect(() => {
        gsap.fromTo(
            'header',
            {
                opacity: 0,
                y: -50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.35,
                delay: 3,
            },
        );
    }, []);

    useEffect(() => {
        const q = gsap.utils.selector('header');
        if (bgTriggerElem) {
            gsap.to(q(`#background`), {
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: gsapScrollTrigger,
                    start: '10% top',
                    end: '30% top',
                    scrub: true,
                },
            });
        } else {
            gsap.to(q(`#background`), {
                opacity: 1,
                duration: 0,
            });
        }
    }, [bgTriggerElem]);

    return (
        <header id={styles.header} className="navbar fixed-top">
            <div id="background" className={`${styles.background} ${mainnetEnded ? styles.blue : ''}`} />
            <nav className="container d-flex flex-row justify-content-center justify-content-md-between align-items-center">
                <a href="/" className={`navbar-brand ${styles['navbar-brand']}`}>
                    <img
                        src={AssetsSrc.images.lumNetworkLogoDark}
                        width="235"
                        height="38"
                        className={styles['lum-logo-header']}
                    />
                </a>
                <div className="navbar-items-container d-none d-md-flex flex-row align-items-center">
                    <Link link={LUM_MEDIUM} className="me-sm-3 me-md-5">
                        Blog
                    </Link>
                    <Link link={LUM_WALLET} className="me-sm-3 me-md-5">
                        Wallet
                    </Link>
                    <Link link={LUM_EXPLORER} className="me-sm-3 me-md-5">
                        Explorer
                    </Link>
                    <Button outline inverted onClick={onGetInformed}>
                        {t('header.getInformed')}
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
