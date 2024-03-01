import React, { useEffect, useState } from 'react'
import { getServicesBySolution } from '../../../../services/service'
import ServicesTable from "../../service/services-table"
import { useParams } from "react-router-dom";

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
    console.log("asd", partnerServices)


    return (
        <ServicesTable services={partnerServices} solutionView={true} />
    )
}