import React from 'react';

import './NetworkNumbers.scss';

const NetworkNumbers = (): JSX.Element => {
    return (
        <section id="numbers">
            <div className="container py-4">
                <h1 className="mb-4">Lum Network In Numbers</h1>
                <div className="row row-cols-2 row-cols-lg-5 numbers-container mx-1 mx-lg-0 gy-4 gy-lg-0 px-2 pb-4 pb-lg-4 pt-lg-4 mt-4 mt-lg-0">
                    <div className="col">
                        <div className="py-3">
                            <div className="stat-number">7M+</div>
                            <p>Market Cap</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="py-3">
                            <div className="stat-number">7M+</div>
                            <p>Transactions</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="py-3">
                            <div className="stat-number">7M+</div>
                            <p>Blocks</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="py-3">
                            <div className="stat-number">7M+</div>
                            <p>Block Time</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="py-3">
                            <div className="stat-number">7M+</div>
                            <p>$LUM Staking APR</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NetworkNumbers;
