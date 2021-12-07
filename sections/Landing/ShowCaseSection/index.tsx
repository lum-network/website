import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import { gsap } from 'utils';
import { Link } from 'components';
import { AssetsSrc } from 'constant';

import styles from './ShowCaseSection.module.scss';
import Fade from 'react-bootstrap/Fade';

const CaseContent = ({
    caseId,
    description,
    imgUrl,
    ctaTitle,
    ctaUrl,
    selected,
}: {
    caseId: string;
    description: string;
    imgUrl: string;
    ctaTitle: string;
    ctaUrl: string;
    selected?: boolean;
}): JSX.Element => {
    return (
        <div className={`row section-content-info`}>
            <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center">
                <img src={imgUrl} alt={`${caseId}`} />
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
                <p dangerouslySetInnerHTML={{ __html: description }}></p>
                <Link className="d-flex flex-row align-items-baseline" link={ctaUrl}>
                    <strong className={`border-bottom ${styles['border-bottom']} border-2 pb-2 me-2`}>
                        {ctaTitle}
                    </strong>
                    {'➤'}
                </Link>
            </div>
        </div>
    );
};

const ShowCaseSection = (): JSX.Element => {
    const [activeTab, setActiveTab] = useState('lumki');
    const { t } = useTranslation();

    useEffect(() => {
        const scrollTrigger = {
            trigger: `#showcase`,
            start: 'top 60%',
            end: 'top 10%',
            scrub: true,
        };
        gsap.from(`#showcase .section-content-title`, {
            y: 25,
            opacity: 0,
            ease: 'none',
            scrollTrigger,
        });
        gsap.from(`#showcase .section-content-info`, {
            y: 50,
            opacity: 0,
            ease: 'none',
            scrollTrigger,
        });
    }, []);

    Fade.defaultProps = {
        ...Fade.defaultProps,
        timeout: 1200,
    };

    return (
        <section id="showcase" className={`light ${styles.showcase}`}>
            <div id="usecases-content" className="container">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <h1
                            className="section-content-title"
                            dangerouslySetInnerHTML={{ __html: t('showcaseSection.title') }}
                        />
                    </div>
                    <div className="col-12">
                        <Tabs
                            transition
                            activeKey={activeTab}
                            onSelect={(key) => setActiveTab(key || 'lumki')}
                            className={`${styles['nav-tabs']} justify-content-center`}
                        >
                            <Tab
                                eventKey="lumki"
                                title={t('showcaseSection.lumki.title')}
                                className={styles['tab-pane']}
                                tabClassName={`${styles['nav-link']} ${activeTab === 'lumki' && styles.active}`}
                            >
                                <CaseContent
                                    caseId={'lumki'}
                                    description={t('showcaseSection.lumki.description')}
                                    imgUrl={AssetsSrc.images.showcaseLumkiIllu}
                                    ctaTitle={t('showcaseSection.lumki.cta.title')}
                                    ctaUrl={t('showcaseSection.lumki.cta.url')}
                                    selected
                                />
                            </Tab>
                            <Tab
                                eventKey="skeepers"
                                title={t('showcaseSection.skeepers.title')}
                                className={styles['tab-pane']}
                                tabClassName={`${styles['nav-link']} ${activeTab === 'skeepers' && styles.active}`}
                            >
                                <CaseContent
                                    caseId={'skeepers'}
                                    description={t('showcaseSection.skeepers.description')}
                                    imgUrl={AssetsSrc.images.showcaseNetreviewsIllu}
                                    ctaTitle={t('showcaseSection.skeepers.cta.title')}
                                    ctaUrl={t('showcaseSection.skeepers.cta.url')}
                                />
                            </Tab>
                            <Tab
                                eventKey="join"
                                title={t('showcaseSection.join.title')}
                                className={styles['tab-pane']}
                                tabClassName={`${styles['nav-link']} ${activeTab === 'join' && styles.active}`}
                            >
                                <CaseContent
                                    caseId={'join'}
                                    description={t('showcaseSection.join.description')}
                                    imgUrl={AssetsSrc.images.showcaseJoinIllu}
                                    ctaTitle={t('showcaseSection.join.cta.title')}
                                    ctaUrl={t('showcaseSection.join.cta.url')}
                                />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowCaseSection;
