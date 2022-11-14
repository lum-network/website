import React from 'react';

import './NetworkNumbers.scss';

const NetworkNumbers = (): JSX.Element => {
    return (
        <section id="numbers">
            <div className="container">
                <h1 className="mb-4">Lum Network In Numbers</h1>
                <div className="row row-cols-5 numbers-container p-5">
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
