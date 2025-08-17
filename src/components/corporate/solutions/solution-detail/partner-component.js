import React, { useEffect, useState } from 'react'
import { getServicesBySolution } from '../../../../services/service'
import ServicesTable from "../../service/services-table"
import { useParams } from "react-router-dom";
import { Box, Center, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const PartnerComponent = ({ isDemo }) => {
    const { id } = useParams();
    const { t } = useTranslation("global");

    const [partnerServices, setPartnerServices] = useState([])

    useEffect(() => {
        getServices()
    }, [])

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
                {partnerServices.length ? <ServicesTable services={partnerServices} solutionView={true} /> : <div className='h-80 w-full flex items-center justify-center'>
                    <div className='text-white flex flex-col items-center'>
                        <span className="text-3xl font-bold">
                            {t("common.nothingHere")}
                        </span>
                        <span color='white'> {t("partners.empty")}</span>
                    </div>
                </div>}
            </Box>
        </Box>

    )
}