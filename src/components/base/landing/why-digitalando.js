import React from 'react';
import { useTranslation } from 'react-i18next';

const WhyDigitalando = () => {
    const { t } = useTranslation('global');

    return (
        <div className="bg-black flex flex-col pb-10 md:pb-20 font-bold text-gridyellow bg-darkgray pt-20 italic">
            <div className="flex justify-end">
                <span className="text-5xl sm:text-7xl md:text-8xl lg:text-11xl leading-none">
                    {t('why_digitalando.why')}
                </span>
            </div>
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-11xl leading-none text-right -mr-4 md:-mr-10">
                {t('why_digitalando.digitalando')}
            </span>
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-11xl leading-none -ml-2">
                {t('why_digitalando.do')}
                <span className="text-lg md:text-2xl pl-8 md:pl-14 pt-10 pb-6 text-neutral text-center -mt-6">
                    {t('why_digitalando.reason')}
                </span>
            </span>
        </div>
    );
};

export default WhyDigitalando;
