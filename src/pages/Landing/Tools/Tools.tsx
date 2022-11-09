import React from 'react';

import { Button } from 'components';

import tools from 'assets/images/tools.png';
import github from 'assets/images/github.png';

import './Tools.scss';
import { NavLink } from 'react-router-dom';
import { LUM_NETWORK_GITHUB, NavigationConstants } from 'constant';

const Tools = (): JSX.Element => {
    const openGithub = (): void => {
        const newWindow = window.open(LUM_NETWORK_GITHUB, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    return (
        <section id="tools">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-5 my-auto">
                        <div>
                            <h1>
                                We Build Tools
                                <br />
                                for Everyone
                            </h1>
                            <p className="my-4">
                                Open-source tools are the future of
                                <br />
                                Web3 in the Interchain.
                            </p>
                            <div className="d-flex flex-row">
                                <NavLink
                                    to={NavigationConstants.TOOLS}
                                    className="tools-btn d-block scale-anim text-decoration-none py-3 px-4 rounded-pill me-4"
                                >
                                    Discover our tools
                                </NavLink>
                                <Button outline inverted className="github-btn" onClick={openGithub}>
                                    <span className="me-2">
                                        <img src={github} alt="" />
                                    </span>
                                    Access our github
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 ms-auto">
                        <img src={tools} alt="Tools overview" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
