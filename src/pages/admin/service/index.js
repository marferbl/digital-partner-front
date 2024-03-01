import { Box, Text } from "@chakra-ui/react";
import React, { useState, useContext, useEffect } from "react";
import { EmptyServiceState } from "./empty-state";
import axios from "axios";
import { CorporateProfile } from "../../../components/corporate/corporate-profile";
import { getServiceByUserCorporate } from "../../../services/service";
import ServicesTable from "../../../components/corporate/service/services-table";

export const ServicePage = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        getMyServices();
    }, []);

    const getMyServices = async () => {
        getServiceByUserCorporate().then((res) => {
            setServices(res.data.services);
        }
        ).catch((error) => {
            console.log(error);
        }
        );
    };

    return (
        <Box mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"} minH={400}>
            <Text fontSize={22} mb={5} pb={3} borderBottomWidth={1}>Servicios</Text>
            {services.length === 0 ? <EmptyServiceState refreshServices={getMyServices} /> : <ServicesTable services={services} />}
        </Box>
    )
};
