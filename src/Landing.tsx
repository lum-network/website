import React from 'react';

import Assets from 'assets';
import { Button, Link } from 'components';
import { LUM_NETWORK_GITHUB } from 'constant';

const Landing = (): JSX.Element => {
    return (
        <div className="d-flex flex-md-row flex-column min-vh-100 justify-content-between align-items-center">
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
                    <Button>Get Lum</Button>
                    <div className="ms-5">
                        <Link className="border-bottom border-2 pb-2 me-2" link={LUM_NETWORK_GITHUB}>
                            White paper
                        </Link>
                        <span>{'>'}</span>
                    </div>
                </div>
            </div>
            <img src={Assets.images.lumLogo} alt="" className="lum-logo" />
        </div>
    );
};

export default Landing;
