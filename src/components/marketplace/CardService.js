// CardSoftware.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';
import GalleryPhotoCard from './gallery-photo-card';
import LabelTag from '../base/label-tag';
import { useTranslation } from 'react-i18next';


const CardService = ({ item, isFavorites }) => {

    const { t } = useTranslation('global');



    return (
        <div className="w-full border border-gray-200 rounded-2xl overflow-hidden bg-white backdrop-blur-2xl shadow-xl p-2">

            {isFavorites && (
                <div className="flex justify-end pr-1 items-center h-6">
                    <FcLike size={20} className="text-primary" />
                </div>
            )}

            <div className="flex px-4 items-center gap-2 pt-2">
                <Link to={`/service/${item._id}`}>
                    <div className="h-full flex justify-center items-center">
                        {item.logo ? (
                            <img src={item.logo} alt={item.name} className="h-10 w-10 rounded-lg" />
                        ) : (
                            <div className="h-10 w-10 rounded-lg bg-gray-300 flex items-center justify-center text-white uppercase">
                                {item.title ? [0] : item.serviceType[0]}
                            </div>
                        )}
                    </div>
                </Link>
                <div className="flex flex-col gap-1 items-start">
                    <h3 className="text-3xs font-bold font-montserrat text-center flex justify-center items-center hover:underline">
                        <Link to={`/service/${item._id}`}>
                            {item.title || item.serviceType}
                        </Link>
                    </h3>
                    <span className="text-xs text-darkgray text-center">Servicio</span>
                </div>
            </div>

            <div className="w-full p-4 pb-1">
                <GalleryPhotoCard gallery={item.gallery} />
            </div>

            <div className="p-1  text-neutral">
                <div className="h-14 mt-3 px-3 text-xxs mb-4 overflow-hidden text-ellipsis text-left">
                    <p className="line-clamp-3">{item.description}</p>
                </div>
                <LabelTag label={t(item.serviceType || 'Servicio')} />
            </div>
        </div>
    );
};

export default CardService;
