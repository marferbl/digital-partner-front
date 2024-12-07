import React from 'react';
import { useTranslation } from 'react-i18next';

const FeaturesDigitalando = () => {
    const { t } = useTranslation("global");

    return (
        <>
            <div className="bg-digiwhite flex flex-col items-center justify-center">
                <div className="max-w-full md:max-w-5xl px-6 text-black flex flex-col gap-6 md:gap-14">
                    <span className="text-lg md:text-4xl font-bold mb-4 text-left leading-9 font-light py-6 md:py-20">
                        {t('featuresDigitalando.search')}
                    </span>
                    <span className="text-lg md:text-4xl font-bold mb-4 text-left leading-9 font-light py-6 md:py-20">
                        {t('featuresDigitalando.advertise')}
                    </span>
                    <span className="text-lg md:text-4xl font-bold mb-4 text-left leading-9 font-light py-6 md:py-20">
                        {t('featuresDigitalando.update')}
                    </span>
                    <span className="text-lg md:text-4xl font-bold mb-4 text-left leading-9 font-light py-6 md:py-20">
                        {t('featuresDigitalando.jobs')}
                    </span>
                </div>
            </div>
            {/* <div className="bg-digiwhite flex flex-col w-full h-screen">
                <span className="text-lg md:text-12xl font-bold mb-4 text-left h-full break-words whitespace-normal">
                    {t('featuresDigitalando.more')}
                </span>
            </div> */}

        </>
    );
};

export default FeaturesDigitalando;
