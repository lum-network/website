import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';

import { Link } from 'components';
import { LUM_DISCORD, LUM_MEDIUM, LUM_TELEGRAM, LUM_TWITTER } from 'constant';

import medium from 'assets/images/medium.svg';
import twitter from 'assets/images/twitter.svg';
import discord from 'assets/images/discord.svg';
import telegram from 'assets/images/telegram.svg';

import './JoinLumCommunity.scss';

const JoinLumCommunity = (): JSX.Element => {
    const { t } = useTranslation();

    const timeline = useRef<gsap.core.Timeline>();

    useEffect(() => {
        // GSAP Section Scroll Animations
        const scrollTrigger = {
            trigger: `#join-lum-community`,
            start: 'top 60%',
            end: 'top 10%',
            scrub: true,
        };

        if (!timeline.current) {
            const tl = gsap.timeline({
                scrollTrigger,
            });

            timeline.current = tl;

            tl.from('#join-lum-community .socials-container', {
                y: 50,
                opacity: 0,
                ease: 'none',
            });
        }
    }, []);

    return (
        <section id="join-lum-community">
            <div className="container">
                <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center socials-container">
                    <h1 className="section-content-title">{t('joinLumCommunity.title')}</h1>
                    <div className="d-flex flex-row justify-content-center justify-content-lg-end flex-wrap socials-btn-container mt-4 mt-lg-0 w-100">
                        <Link link={LUM_MEDIUM} custom className="social-button scale-anim">
                            <img src={medium} alt="Medium logo" />
                        </Link>
                        <Link link={LUM_TWITTER} custom className="social-button scale-anim">
                            <img src={twitter} alt="Twitter logo" />
                        </Link>
                        <Link link={LUM_DISCORD} custom className="social-button scale-anim">
                            <img src={discord} alt="Discord logo" />
                        </Link>
                        <Link link={LUM_TELEGRAM} custom className="social-button scale-anim">
                            <img src={telegram} alt="Telegram logo" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinLumCommunity;
