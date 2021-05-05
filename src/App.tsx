import React from 'react';
import { RightImageLayout, LeftImageLayout, Footer } from 'components';

function App() {
    const image = 'https://via.placeholder.com/150';

    return (
        <div className="main-layout">
            <RightImageLayout image={image}>
                <div>
                    Lum Network introduces the first decentralized protocol for companies to build authentic trust with
                    their customers.
                </div>
            </RightImageLayout>
            <LeftImageLayout image={image}>
                <div>Right</div>
            </LeftImageLayout>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}

export default App;
