import { Box, Text, Flex } from "@chakra-ui/react";
import React, { useState, useContext, useEffect } from "react";
import { EmptyServiceState } from "./empty-state";
import axios from "axios";
import { CorporateProfile } from "../../../components/corporate/corporate-profile";
import { getServiceByUserCorporate } from "../../../services/service";
import ServicesTable from "../../../components/corporate/service/services-table";
import { ButtonCreateService } from "../../../components/corporate/service/button-create-service";
import ServiceListView from "../../../components/corporate/service/ServiceListView";

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
        <Box mt={6} p={5} rounded={"xl"} bgColor={"black"} w={"100%"} minH={400}>
            {services.length > 0 && <Flex align={'center'} w='full' justify={'space-between'} pb={3}>
                <Text fontSize={{ base: 18, md: 22 }} color='black' >Servicios</Text>
                <ButtonCreateService refreshServices={getMyServices} />
            </Flex>}

            {services.length === 0 ? <EmptyServiceState refreshServices={getMyServices} /> : <ServiceListView services={services} refreshServices={getMyServices} />}
        </Box>
    )
};
