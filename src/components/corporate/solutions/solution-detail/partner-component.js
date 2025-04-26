import React, { useEffect, useState } from 'react'
import { getServicesBySolution } from '../../../../services/service'
import ServicesTable from "../../service/services-table"
import { useParams } from "react-router-dom";
import { Box, Center, Text } from '@chakra-ui/react';

export const PartnerComponent = ({ isDemo }) => {
    const { id } = useParams();

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
                            Nada por aqui...
                        </span>
                        <span color='white'> Está solución todavía no tiene partners dados de alta</span>
                    </div>
                </div>}
            </Box>
        </Box>

    )
}