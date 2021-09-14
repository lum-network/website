import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Footer, Header, Modal } from 'components';

import WelcomeSection from './WelcomeSection';
import TrustLayerSection from './TrustLayerSection';
import PartneringSection from './PartneringSection';
import LumSection from './LumSection';
import ShowCaseSection from './ShowCaseSection';
import GreenSection from './GreenSection';
import TrustedBySection from './TrustedBySection';

import './index.scss';

const Landing = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <>
            <Header modalId="#get-informed-modal" bgTriggerElem="#welcome" />
            <WelcomeSection />
            <TrustLayerSection />
            <PartneringSection />
            <LumSection />
            <ShowCaseSection />
            <TrustedBySection />
            <GreenSection />
            <Footer />
            <Modal id={'get-informed-modal'}>
                <h1 dangerouslySetInnerHTML={{ __html: t('getInformedModal.title') }} />
                <p>{t('getInformedModal.description')}</p>
                <Button outline inverted>
                    <strong>{t('getInformedModal.button')}</strong> {'➤'}
                </Button>
            </Modal>
        </>
    );
};

export { Landing };
