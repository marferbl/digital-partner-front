import React from 'react';
import { useTranslation } from 'react-i18next';
import ImageGallerySlider from '../base/GallerySlider';

const DigitalProfileDetails = ({ item }) => {

    const { t } = useTranslation('global');


    const labelWorkType = (workType) => {
        const type = workType[0]
        const object = {
            remote: 'Remoto',
            presential: 'Presencial',
            hybrid: 'Híbrido'
        }

        return object[type];
    }


    return (
        <div className="min-h-screen bg-black text-white flex flex-col py-6 lg:py-10 px-3 lg:px-20">
            {/* Header Section */}
            <div className="flex justify-between items-start mb-8 font-light">
                <div>
                    <h1 className="text-xl  md:text-6xl font-bold  uppercase font-light">{item.fullName}</h1>
                    <h2 className="text-lg  md:text-3xl text-neutral uppercase font-light">{t(item.job)}</h2>
                    <div className="flex gap-10 mt-8">
                        <span className="text-md">{labelWorkType(item.prefferedWork)}</span>
                        <span className="text-md">Mínimo: {item.salary}€</span>
                    </div>
                </div>
                <div className="text-right">
                    <h3 className="text-xl  md:text-6xl text-neutral ">{item.city}</h3>
                    <h4 className="text-lg  md:text-4xl text-neutral">{item.country}</h4>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start gap-8">
                {/* Profile Image */}
                <div className="flex items-center gap-5 flex-wrap">
                    <img
                        src={item.user?.avatar}
                        alt={item.fullName}
                        className="w-48 h-48 rounded-full object-cover"
                    />
                    <div className="text-md text-neutral leading-relaxed max-w-lg">
                        {item.introducction}
                    </div>
                </div>

                {/* Description */}
            </div>
            <section className="text-white p-8">
                <h2 className="text-4xl lg:text-6xl pt-4 md:pt-20 font-light mb-8 text-center uppercase">formación</h2>
                <div className="space-y-8">
                    {item?.studies.map((study, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-start md:items-center justify-between border-t border-gray-700 pt-4">
                            <div className='w-full lg:w-1/4'>
                                <h3 className="text-xl">{study.name}</h3>
                                <p className="text-sm text-gray-400">{study.entity}</p>
                            </div>
                            <div className="text-neutral md:text-right">
                                {study.start} - {study.end || "Presente"}
                            </div>
                            <div className="md:w-1/3 text-gray-300 mt-4 md:mt-0 text-sm">
                                <p>{study.description || "Sin descripción"}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="text-white p-8">
                <h2 className="text-4xl lg:text-6xl pt-4 md:pt-20 font-light mb-8 text-center uppercase">experiencia</h2>
                <div className="space-y-8">
                    {item?.experience.map((study, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-start md:items-center justify-between border-t border-gray-700 pt-4">

                            <div className="text-white lg:w-1/6">
                                {study.start}- {study.end || "Presente"}
                            </div>
                            <div className='w-full lg:w-1/4'>
                                <h3 className="text-xl">{study.name}</h3>
                                <p className="text-sm text-gray-400">{study.entity}</p>
                            </div>
                            <div className="md:w-1/3 text-gray-300 mt-4 md:mt-0 text-sm">
                                <p>{study.description || "Sin descripción"}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="text-white p-8">
                <h2 className="text-4xl lg:text-6xl pt-4 md:pt-20 font-light mb-8 text-center uppercase">tecnología</h2>
                <div className="flex items-center justify-center w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {item?.technologies.map((technology, index) => (
                            <div
                                key={index}
                                className="p-4 px-8 bg-neutralblack text-white rounded-full border border-gray-700 w-fit"
                            >
                                <span className="text-lg font-medium">{technology.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="text-white p-8">
                <h2 className="text-4xl lg:text-12xl pt-4 md:pt-20 font-light mb-8 text-left">Sobre mí</h2>
                <span className='text-neutral'>{item.aboutMe}</span>
            </section>

            <section className="text-white p-8">
                <h2 className="text-4xl lg:text-6xl pt-4 md:pt-20 font-light mb-8 text-center uppercase">detalles</h2>
                <div className="flex items-center justify-center w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                        <div className="w-full  px-2 md:px-10 pr-10">
                            <p className="text-white mb-4 text-light text-3xl">Idiomas</p>
                            {item?.languages.map((language, index) => (
                                <div className="flex justify-between items-center w-full font-light border-b-1 border-neutral py-2">
                                    <p className="text-sm text-neutral-400">{language.name}</p>
                                    <p className="text-sm text-neutral-400">{t(language.level?.toLowerCase())}</p>
                                </div>
                            ))}
                        </div>
                        <div className="w-full px-2 md:px-10  pr-10">
                            <p className="text-white mb-4 text-light text-3xl">Rango de salario</p>
                            <div className="flex justify-between items-center w-full font-light border-b-1 border-neutral py-2">
                                <p className="text-sm text-neutral-400">{item.salary}</p>
                            </div>
                            <div className="flex justify-between items-center w-full font-light border-b-1 border-neutral py-2">
                                <p className="text-sm text-neutral-400">{item.openSalary ? 'Abierto a escuchar ofertas' : ''}</p>
                            </div>
                        </div>
                        <div className="w-full  px-2 md:px-10 pr-10">
                            <p className="text-white mb-4 text-light text-3xl">Modalidad preferida</p>
                            <div className="flex justify-between items-center w-full font-light border-b-1 border-neutral py-2">
                                <p className="text-sm text-neutral-400">{t(item.prefferedWork)}</p>
                            </div>
                            <div className="flex justify-between items-center w-full font-light border-b-1 border-neutral py-2">
                                <p className="text-sm text-neutral-400">{item.openSalary ? 'Abierto a escuchar ofertas con otras condiciones' : ''}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {item && item?.gallery && item.gallery.length ?
                <div>
                    <ImageGallerySlider images={item.gallery} height={500} width={500} />
                </div>
                : ''}


            {/* Actions */}

        </div>
    );
};

export default DigitalProfileDetails;
