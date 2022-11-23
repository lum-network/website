import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import numeral from 'numeral';

import './NetworkNumbers.scss';
import { useTranslation } from 'react-i18next';

const NetworkNumbers = (): JSX.Element => {
    const { t } = useTranslation();
    const lumStats = useSelector((state: RootState) => state.stats.lum);

    return (
        <section id="numbers">
            <div className="container py-4">
                <h1 className="mb-4">{t('networkNumbers.title')}</h1>
                <div className="row row-cols-2 row-cols-lg-5 numbers-container mx-1 mx-lg-0 gy-4 gy-lg-0 px-2 pb-4 pb-lg-4 pt-lg-4 mt-4 mt-lg-0">
                    <div className="col">
                        <div className="py-3">
                            <div className="stat-number">
                                {lumStats.marketCap
                                    ? numeral(lumStats.marketCap).format('($0.00 a)').toUpperCase() + '+'
                                    : '-'}
                            </div>
                            <p>{t('networkNumbers.numbers.marketCap')}</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="py-3">
                            <div className="stat-number">
                                {lumStats.txs ? numeral(lumStats.txs).format('0.[00]') : '-'}
                            </div>
                            <p>{t('networkNumbers.numbers.transactions')}</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="py-3">
                            <div className="stat-number">
                                {lumStats.blocks ? numeral(lumStats.blocks).format('0.[00]') : '-'}
                            </div>
                            <p>{t('networkNumbers.numbers.blocks')}</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="py-3">
                            <div className="stat-number">
                                {lumStats.blockTime ? numeral(lumStats.blockTime).format('0.00') + 's' : '-'}
                            </div>
                            <p>{t('networkNumbers.numbers.blockTime')}</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="py-3">
                            <div className="stat-number">
                                {lumStats.apr ? numeral(lumStats.apr).format('0.00%') : '-'}
                            </div>
                            <p>{t('networkNumbers.numbers.apr')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NetworkNumbers;
