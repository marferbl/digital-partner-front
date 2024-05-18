import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ServiceDetails from "../../../components/corporate/service/service-details";
import { getServiceById } from "../../../services/service";
import { Box, Flex, Text } from "@chakra-ui/react";
import { UserContext } from "../../../context/userContext";
import Navbar from "../../../components/base/navbar";
import { useContext } from "react";
import { IoChevronBack } from "react-icons/io5";


const ServiceDetailsPage = () => {
    const [service, setService] = useState(null);
    const { isLoggedIn } = useContext(UserContext)

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
        <Box>
            {!isLoggedIn ? <Navbar></Navbar> : null}
            <Box mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"} minH={400}>
                <Flex h={8} align={'center'} pr={3} onClick={() => window.history.back()} cursor={'pointer'} _hover={{ borderBottomWidth: 1 }} w={'fit-content'}>
                    <IoChevronBack size={20} />
                    <Text ml={2} pt={-4} fontSize={16} fontWeight={'bold'}>Volver</Text>
                </Flex>
                <ServiceDetails service={service} />
            </Box>
        </Box>

    )
}

export default ServiceDetailsPage