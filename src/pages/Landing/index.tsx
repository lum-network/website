import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Footer, Header, Modal } from 'components';

import WelcomeSection from './WelcomeSection';
import TrustLayerSection from './TrustLayerSection';
import PartneringSection from './PartneringSection';
import LumSection from './LumSection';
import ShowCaseSection from './ShowCaseSection';
import GreenSection from './GreenSection';
import TrustedBySection from './TrustedBySection';
import LatestHighlights from './LatestHighlights';

import { LUM_OSMOSIS } from 'constant';

import notificationIllu from 'assets/images/notification_illu.png';
import videoSrc from 'assets/videos/ATOM_LUM_TUTO.mp4';

import './index.scss';

const Landing = (): JSX.Element => {
    const { t } = useTranslation();
    const giModRef = useRef<React.ElementRef<typeof Modal>>(null);
    const nlModRef = useRef<React.ElementRef<typeof Modal>>(null);

    useEffect(() => {
        if (giModRef.current && nlModRef.current) {
            const hash = location.hash;
            if (hash === '#getLum') {
                setTimeout(giModRef.current.toggle, 2000);
            } else if (hash === '#getNews') {
                setTimeout(nlModRef.current.toggle, 2000);
            }
        }
    }, [giModRef, nlModRef]);

    return (
        <>
            <Header modalId="#get-informed-modal" bgTriggerElem="#welcome" />
            <WelcomeSection />
            <TrustLayerSection />
            <PartneringSection />
            <LumSection />
            <ShowCaseSection />
            <TrustedBySection />
            <LatestHighlights />
            <GreenSection />
            <Footer />
            <Modal id={'get-informed-modal'} ref={giModRef}>
                <div className="row mb-4">
                    {/*<div className="col-12">*/}
                    {/*    <h1 dangerouslySetInnerHTML={{ __html: t('getInformedModal.title') }} />*/}
                    {/*</div>*/}
                    {/*<div className="col-12">*/}
                    {/*    <p dangerouslySetInnerHTML={{ __html: t('getInformedModal.description') }} />*/}
                    {/*</div>*/}
                    <video muted playsInline autoPlay controls>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center flex-column flex-lg-row">
                        <a className="btn-blue mb-3 mb-lg-0" href={LUM_OSMOSIS} target="_blank" rel="noreferrer">
                            <strong dangerouslySetInnerHTML={{ __html: t('getInformedModal.lbp') }} />
                        </a>
                    </div>
                </div>
            </Modal>
            <Modal id={'newsletter-modal'} ref={nlModRef}>
                <img src={notificationIllu} className="illu" alt="Newsletter" />
                <iframe
                    className="mj-w-res-iframe"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://app.mailjet.com/widget/iframe/5YGg/KDl"
                    width="100%"
                />
            </Modal>
        </>
    );
};

export { Landing };
