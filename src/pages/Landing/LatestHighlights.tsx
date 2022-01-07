import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import './LatestHighlights.scss';
import { ARTICLES } from 'constant';

const LatestHighlights = (): JSX.Element => {
    const { t } = useTranslation();

    useEffect(() => {
        const scrollTrigger = {
            trigger: `#latest-highlights`,
            start: 'top 60%',
            end: 'top 10%',
            scrub: true,
        };

        gsap.from(`#latest-highlights .section-content-title`, {
            y: 50,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
        gsap.from(`#latest-highlights .section-content`, {
            y: 100,
            opacity: 0,
            ease: 'none',
            scrollTrigger: scrollTrigger,
        });
    }, []);

    return (
        <section className="dark" id="latest-highlights">
            <div id="latest-highlights" className="container">
                <div className="section-content-title">
                    <h1 dangerouslySetInnerHTML={{ __html: t('latestHighlights.title') }} />
                </div>
                <div className="section-content">
                    {ARTICLES.map((article, index) => (
                        <div key={index} className="article-card">
                            <div className="article-card-content">
                                <div className="article-card-logo">
                                    {article.logo ? (
                                        <img src={article.logo} alt="newspaper name" />
                                    ) : (
                                        <div className="lum-article" />
                                    )}
                                </div>
                                <div className="article-card-title">{article.title}</div>
                                <div className="article-link-container">
                                    <a
                                        href={article.link}
                                        target={'_blank'}
                                        rel={'noreferrer'}
                                        className="article-link"
                                    >
                                        {t('latestHighlights.link')}&nbsp;&nbsp;{'>'}
                                        <div className="bar">
                                            <div className="bar-2">
                                                <div className="bar-3" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestHighlights;
