import React, { useEffect, useState } from 'react'
import { getServicesBySolution } from '../../../../services/service'
import ServicesTable from "../../service/services-table"
import { useParams } from "react-router-dom";
import { Box, Text } from '@chakra-ui/react';

export const PartnerComponent = () => {
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
            {partnerServices.length ? <ServicesTable services={partnerServices} solutionView={true} /> : <Text>Sin servicios dados de alta</Text>}
        </Box>

    )
}