import React from 'react';

import WelcomeSection from './WelcomeSection';
import TrustedBySection from './TrustedBySection';
//import GreenSection from './GreenSection';
//import LumSection from './LumSection';
//import ShowCaseSection from './ShowCaseSection';
//import TrustLayerSection from './TrustLayerSection';
//import PartneringSection from './PartneringSection';
// import LatestHighlights from './LatestHighlights';
import CoreValues from './CoreValues/CoreValues';
import UseCases from './UseCases/UseCases';
import NetworkNumbers from './NetworkNumbers/NetworkNumbers';
import JoinLumCommunity from './JoinLumCommunity/JoinLumCommunity';
import LumTools from './LumTools/LumTools';

import './index.scss';

const Landing = (): JSX.Element => {
    return (
        <>
            <WelcomeSection />
            <CoreValues />
            <UseCases />
            <NetworkNumbers />
            <TrustedBySection />
            <JoinLumCommunity />
            <LumTools />
            {/*<LatestHighlights />*/}
        </>
    );
};

export { Landing };
