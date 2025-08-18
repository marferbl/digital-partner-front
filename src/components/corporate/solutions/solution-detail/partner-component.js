import React, { useEffect, useState, useContext } from 'react'
import { getServicesBySolution } from '../../../../services/service'
import ServicesTable from "../../service/services-table"
import { useParams } from "react-router-dom";
import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../../../context/userContext';

export const PartnerComponent = ({ isDemo }) => {
    const { id } = useParams();
    const { t } = useTranslation("global");
    const { isLoggedIn } = useContext(UserContext);

    const [partnerServices, setPartnerServices] = useState([])

    useEffect(() => {
        if (isLoggedIn) {
            getServices()
        }
    }, [isLoggedIn])

    const getServices = () => {
        getServicesBySolution(id).then((res) => {
            setPartnerServices(res.data.services)
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <Box>
            <Box>
                {!isLoggedIn ? (
                    <div className='h-80 w-full flex items-center justify-center'>
                        <div className='text-white flex flex-col items-center'>
                            <span className="text-3xl font-bold">
                                {t("partners.notLogged")}
                            </span>
                        </div>
                    </div>
                ) : partnerServices.length ? (
                    <ServicesTable services={partnerServices} solutionView={true} />
                ) : (
                    <div className='h-80 w-full flex items-center justify-center'>
                        <div className='text-white flex flex-col items-center'>
                            <span className="text-3xl font-bold">
                                {t("common.nothingHere")}
                            </span>
                            <span>{t("partners.empty")}</span>
                        </div>
                    </div>
                )}
            </Box>
        </Box>

    )
}
