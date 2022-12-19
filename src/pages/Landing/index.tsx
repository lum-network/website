import React from 'react';

import WelcomeSection from './WelcomeSection';
import TrustedBySection from './TrustedBySection';
import CoreValues from './CoreValues/CoreValues';
import UseCases from './UseCases/UseCases';
import NetworkNumbers from './NetworkNumbers/NetworkNumbers';
import JoinLumCommunity from './JoinLumCommunity/JoinLumCommunity';
import LumTools from './LumTools/LumTools';

import './index.scss';

const Landing = (): JSX.Element => {
    return (
        <main>
            <WelcomeSection />
            <CoreValues />
            <UseCases />
            <NetworkNumbers />
            <TrustedBySection />
            <JoinLumCommunity />
            <LumTools />
        </main>
    );
};

export { Landing };
