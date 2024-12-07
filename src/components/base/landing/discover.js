import React from 'react'
import { useTranslation } from 'react-i18next'

const DiscoverLanding = () => {
    const { t } = useTranslation("global")

    return (
        <div className="bg-black flex flex-col text-white py-10 md:py-20 font-bold">
            <div className="flex justify-end">
                <span className="text-5xl sm:text-7xl md:text-8xl lg:text-12xl leading-none -mr-6">{t('descub')}</span>
            </div>
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-12xl leading-none -ml-6">{t('cubre')}</span>
        </div>

    )

}

export default DiscoverLanding