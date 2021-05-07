import React from 'react';
import { RightImageLayout, LeftImageLayout, Footer, Header } from 'components';
import { Trans } from 'react-i18next';

const App = (): JSX.Element => {
    const image = 'https://via.placeholder.com/150';

    return (
        <div className="main-layout">
            <Header />
            <div className="main-layout-content">
                <RightImageLayout image={image}>
                    <div>
                        <h2 className="fw-normal">
                            <Trans i18nKey="business.title" />
                        </h2>
                        <br />
                        Lum Network introduces the first decentralized protocol for companies to build authentic trust
                        with their customers.
                    </div>
                </RightImageLayout>
                <LeftImageLayout image={image}>
                    <div>Right</div>
                </LeftImageLayout>
            </div>
            <Footer />
        </div>
    );
};

export default App;
