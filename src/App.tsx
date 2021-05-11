import React, { useState } from 'react';
import { RightImageLayout, LeftImageLayout, Footer, Header } from 'components';
import { Trans } from 'react-i18next';
import Loading from 'Loading';

const App = (): JSX.Element => {
    const [isLoading, setIsLoading] = useState(true);
    const image = 'https://via.placeholder.com/150';

    if (isLoading) {
        return <Loading callback={() => setIsLoading(false)} />;
    }

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
