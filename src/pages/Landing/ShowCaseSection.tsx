import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';

import { Link } from 'components';

import './ShowCaseSection.scss';

import showcaseLumkiIllu from 'assets/images/showcase_lumki_illu.png';
import showcaseNetreviewsIllu from 'assets/images/showcase_netreviews_illu.png';
import showcaseJoinIllu from 'assets/images/showcase_join_illu.png';

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
        <div
            className={`tab-pane fade ${selected ? 'show active' : ''}`}
            id={caseId}
            role="tabpanel"
            aria-labelledby={`${caseId}-tab`}
        >
            <div className="row">
                <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center">
                    <img src={imgUrl} alt={`${caseId}`} />
                </div>
                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
                    <p dangerouslySetInnerHTML={{ __html: description }}></p>
                    <Link className="scale-anim d-flex flex-row align-items-baseline" link={ctaUrl}>
                        <strong className="border-bottom border-2 pb-2 me-2">{ctaTitle}</strong>
                        {'➤'}
                    </Link>
                </div>
            </div>
        </div>
    );
};

const ShowCaseSection = (): JSX.Element => {
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
            scrollTrigger: scrollTrigger,
        });
        gsap.from(`#showcase .section-content-info`, {
            y: 50,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
    }, []);

    return (
        <section className="light" id="showcase">
            <div id="usecases-content" className="container">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <h1
                            className="section-content-info"
                            dangerouslySetInnerHTML={{ __html: t('showcaseSection.title') }}
                        />
                    </div>
                    <div className="col-12">
                        <ul className="nav nav-tabs justify-content-center" id="showCaseTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="lumki-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#lumki"
                                    type="button"
                                    role="tab"
                                    aria-controls="lumki"
                                    aria-selected="true"
                                >
                                    {t('showcaseSection.lumki.title')}
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="netreviews-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#netreviews"
                                    type="button"
                                    role="tab"
                                    aria-controls="netreviews"
                                    aria-selected="false"
                                >
                                    {t('showcaseSection.netreviews.title')}
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="join-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#join"
                                    type="button"
                                    role="tab"
                                    aria-controls="join"
                                    aria-selected="false"
                                >
                                    {t('showcaseSection.join.title')}
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content section-content-info" id="showCaseTabContent">
                            <CaseContent
                                caseId={'lumki'}
                                description={t('showcaseSection.lumki.description')}
                                imgUrl={showcaseLumkiIllu}
                                ctaTitle={t('showcaseSection.lumki.cta.title')}
                                ctaUrl={t('showcaseSection.lumki.cta.url')}
                                selected
                            />
                            <CaseContent
                                caseId={'netreviews'}
                                description={t('showcaseSection.netreviews.description')}
                                imgUrl={showcaseNetreviewsIllu}
                                ctaTitle={t('showcaseSection.netreviews.cta.title')}
                                ctaUrl={t('showcaseSection.netreviews.cta.url')}
                            />
                            <CaseContent
                                caseId={'join'}
                                description={t('showcaseSection.join.description')}
                                imgUrl={showcaseJoinIllu}
                                ctaTitle={t('showcaseSection.join.cta.title')}
                                ctaUrl={t('showcaseSection.join.cta.url')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowCaseSection;
