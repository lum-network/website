import React from 'react';
import { NavLink } from 'react-router-dom';

import skr from 'assets/images/skr.png';
import dfract from 'assets/images/dfract.png';

import './UseCases.scss';
import { NavigationConstants } from 'constant';

const UseCases = (): JSX.Element => {
    return (
        <section id="use-cases">
            <div className="container">
                <h1 className="mb-4">Use Cases</h1>
                <div className="d-flex flex-lg-row flex-column justify-content-between">
                    <div className="use-case-card w-100">
                        <img src={skr} alt="skeepers-rewards" className="w-100" />
                        <div className="p-4">
                            <div className="fw-bold fs-3">Skeepers Rewards</div>
                            <div className="d-flex flex-column flex-lg-row justify-content-between mt-2">
                                <p>
                                    Companies can now easily provide crypto rewards to their consumers for great
                                    user-generated content.
                                </p>
                                <NavLink
                                    to={NavigationConstants.SKR}
                                    className="discover-btn scale-anim text-decoration-none py-2 px-3 rounded-pill ms-0 ms-lg-4"
                                >
                                    Discover
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="use-case-card w-100 mt-4 mt-lg-0">
                        <img src={dfract} alt="dfract" className="w-100" />
                        <div className="p-4">
                            <div className="fw-bold fs-3">DFract</div>
                            <div className="d-flex  flex-column flex-lg-row justify-content-between mt-2">
                                <p>
                                    First Interchain yield earning index with the mission to bring more users to the
                                    Internet of Blockchains.
                                </p>
                                <NavLink
                                    to={NavigationConstants.DFRACT}
                                    className="discover-btn scale-anim text-decoration-none py-2 px-3 rounded-pill ms-0 ms-lg-4"
                                >
                                    Discover
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UseCases;
