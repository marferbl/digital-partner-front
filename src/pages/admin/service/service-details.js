import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ServiceDetails from "../../../components/corporate/service/service-details";
import { getServiceById } from "../../../services/service";
import { Box } from "@chakra-ui/react";


const ServiceDetailsPage = () => {
    const [service, setService] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getMyService();
    }, []);

    const getMyService = () => {
        getServiceById(id)
            .then((res) => {
                setService(res.data.service);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Box mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"} minH={400}>
            <ServiceDetails service={service} />
        </Box>

    )
}

export default ServiceDetailsPage