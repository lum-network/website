import React from 'react';

import { Footer, Header } from 'components';

import WelcomeSection from './WelcomeSection';
import TrustLayerSection from './TrustLayerSection';
import PartneringSection from './PartneringSection';
import LumSection from './LumSection';
import GreenSection from './GreenSection';
import TrustedBySection from './TrustedBySection';

const Landing = (): JSX.Element => {
    return (
        <>
            <Header modalId="#getInformedModal" />
            <WelcomeSection />
            <TrustLayerSection />
            <PartneringSection />
            <LumSection />
            <TrustedBySection />
            <GreenSection />
            <Footer />
        </>
    );
};

export { Landing };
