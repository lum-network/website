import React from 'react';

import { Footer, Header } from 'components';

import WelcomeSection from './WelcomeSection';
import TrustLayerSection from './TrustLayerSection';
import PartneringSection from './PartneringSection';
import LumSection from './LumSection';
import ShowCaseSection from './ShowCaseSection';
import GreenSection from './GreenSection';
import TrustedBySection from './TrustedBySection';

const Landing = (): JSX.Element => {
    return (
        <>
            <Header modalId="#getInformedModal" bgTriggerElem="#welcome" />
            <WelcomeSection />
            <TrustLayerSection />
            <PartneringSection />
            <LumSection />
            <ShowCaseSection />
            <TrustedBySection />
            <GreenSection />
            <Footer />
        </>
    );
};

export { Landing };
