import React from 'react'
import { useTranslation } from 'react-i18next'

const WelcomePart = () => {
    const { t } = useTranslation("global")

    return (
        <div className="h-96 md:h-screen flex flex-col justify-center items-center bg-black text-center relative">
            <img src='/landing/rectangle-2.png' className="absolute top-4 left-6 md:top-0 md:left-0 w-12 h-18 md:w-52 md:h-64" alt="rectangle" />
            <div className="max-w-full md:max-w-5xl px-6">
                <h1 className="text-lg md:text-4xl font-semibold mb-4 text-white text-left leading-9 ">{t('welcomeFirst')}</h1>
                <p className="text-lg md:text-2xl text-lightgray font-light text-left pt-1">{t('welcomeSecond')}</p>
            </div>
            <img src='/landing/rectangle-1.png' className="absolute bottom-10 right-10 md:bottom-24 md:right-32 w-12 h-18 md:w-52 md:h-64" alt="rectangle" />
        </div>

    )
}

export default WelcomePart