import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from 'components';
import { LUM_NETWORK_GITHUB, NavigationConstants } from 'constant';

import tools from 'assets/images/tools.png';
import github from 'assets/images/github.png';

import './LumTools.scss';

const Tools = (): JSX.Element => {
    const openGithub = (): void => {
        const newWindow = window.open(LUM_NETWORK_GITHUB, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    return (
        <section id="lum-tools">
            <div className="container py-4 py-lg-auto">
                <div className="row gy-4 gy-lg-0">
                    <div className="col-12 col-lg-5 my-auto">
                        <div>
                            <h1>We Build Tools for Everyone</h1>
                            <p className="my-4">
                                Open-source tools are the future of
                                <br />
                                Web3 in the Interchain.
                            </p>
                            <div className="d-flex flex-column flex-lg-row">
                                <NavLink
                                    to={NavigationConstants.TOOLS}
                                    className="tools-btn d-block scale-anim text-decoration-none py-3 px-4 rounded-pill me-4"
                                >
                                    Discover our tools
                                </NavLink>
                                <Button outline inverted className="github-btn mt-3 mt-lg-0" onClick={openGithub}>
                                    <span className="me-2">
                                        <img src={github} alt="" />
                                    </span>
                                    Access our github
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 ms-auto">
                        <img src={tools} alt="Tools overview" className="w-100" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
