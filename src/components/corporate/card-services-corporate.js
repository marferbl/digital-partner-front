import { Box, Text, Flex } from "@chakra-ui/react";
import React, { useState, useContext, useEffect } from "react";
import { getServiceByUserCorporate } from "../../services/service";
import { EmptyState } from "../base/empty-state";
import { Link } from "react-router-dom";
import GradientButton from "../base/GradientButton";


export const CardServicesCorporate = () => {
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

    const getLabelText = (serviceType, item) => {
        console.log(item, serviceType)
        const label = {
            'partner': 'Partner de ' + item.solutionId?.name || item.otherSolution,
            'development': 'Desarrollo por ' + item.corporate?.name,
            'renting': 'Renting por ' + item.corporate?.name,
            'training': 'Training por' + item.corporate?.name,
            'helps': 'Ayudas por ' + item.corporate?.name,
        }
        return label[serviceType];
    }

    return (
        <Box mt={6} p={2} rounded={"xl"} bgColor={"white"} w={"100%"}>
            {services?.length === 0 ?
                <EmptyState>
                    <Text mb={2} textAlign='center'> No tienes ningun servicio creado</Text>
                    <Link to='/private/corporate/solutions'>
                        <GradientButton label='Ir a servicios' type='red' size={'sm'} />
                    </Link>
                </EmptyState> : services?.map((service) => {
                    return (
                        <Flex key={service._id} p={2} rounded={"xl"} bgColor={"white"} w={"100%"} justifyContent={"space-between"}>
                            <Link to={`/private/service/${service?._id}`}>
                                <Text fontWeight={'bold'} fontSize={14} _hover={{ textDecor: 'underline' }}>
                                    {getLabelText(service.serviceType, service)}
                                </Text>
                            </Link>
                        </Flex>
                    )
                })
            }
        </Box>
    )
};
