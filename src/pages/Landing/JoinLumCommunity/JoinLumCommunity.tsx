import React from 'react';

import { Link } from 'components';
import { LUM_DISCORD, LUM_MEDIUM, LUM_TELEGRAM, LUM_TWITTER } from 'constant';

import medium from 'assets/images/medium.svg';
import twitter from 'assets/images/twitter.svg';
import discord from 'assets/images/discord.svg';
import telegram from 'assets/images/telegram.svg';

import './JoinLumCommunity.scss';

const JoinLumCommunity = (): JSX.Element => {
    return (
        <section id="join-lum-community">
            <div className="container">
                <div className="d-flex flex-row justify-content-between align-items-center socials-container">
                    <h1 className="section-content-title">
                        Join the Lum
                        <br /> Community
                    </h1>
                    <div className="d-flex flex-row">
                        <Link link={LUM_MEDIUM} custom className="social-button scale-anim me-3">
                            <img src={medium} alt="Medium logo" />
                        </Link>
                        <Link link={LUM_TWITTER} custom className="social-button scale-anim me-3">
                            <img src={twitter} alt="Twitter logo" />
                        </Link>
                        <Link link={LUM_DISCORD} custom className="social-button scale-anim me-3">
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
