import React from 'react';

import Assets from 'assets';
import { Button, Link } from 'components';
import { LUM_NETWORK_GITHUB } from 'constant';

import './styles/Landing.scss';

const Landing = (): JSX.Element => {
    return (
        <div className="landing-container">
            <div className="d-flex flex-md-row flex-column align-items-center justify-content-between">
                <div>
                    <h1 className="display-1 fw-bold">
                        Companies <br />
                        Trust Engine
                    </h1>
                    <p className="my-5">
                        Lum Network introduces the first decentralized protocol
                        <br />
                        for companies to build authentic trust with their customers.
                    </p>
                    <div className="d-inline-flex align-items-center">
                        <Button>
                            <strong className="px-3">Get Lum</strong>
                        </Button>
                        <Link
                            className="ms-5 scale-anim d-flex flex-row align-items-baseline"
                            link={LUM_NETWORK_GITHUB}
                        >
                            <div className="border-bottom border-2 pb-2 me-2">
                                <strong>White paper</strong>
                            </div>
                            {'>'}
                        </Link>
                    </div>
                </div>
                <img src={Assets.images.lumLogo} alt="" className="lum-logo" />
            </div>
            <div className="d-flex flex-row align-self-end align-items-center mb-5">
                Get enlightened by scrolling
                <div className="border rounded-circle ms-4 arrow-icon-container">
                    <img src={Assets.images.downArrowIcon} width="11" height="11" />
                </div>
            </div>
        </div>
    );
};

export default Landing;
