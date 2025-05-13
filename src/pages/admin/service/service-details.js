import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ServiceDetails from "../../../components/corporate/service/service-details";
import { getServiceById } from "../../../services/service";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { UserContext } from "../../../context/userContext";
import { useContext } from "react";
import { IoChevronBack } from "react-icons/io5";
import { capitalizeFirstLetter } from "../../../utils/methods";


const ServiceDetailsPage = () => {
    const [service, setService] = useState(null);
    const { isLoggedIn } = useContext(UserContext)

    const { id } = useParams();

    useEffect(() => {
        getMyService();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        getMyService();
    }, [id])

    const getMyService = () => {
        getServiceById(id)
            .then((res) => {
                setService(res.data.service);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const goBack = () => {
        window.scrollTo(0, 0);
        window.history.back();
    }

    return (
        <Box>
            <Box py={5} px={{ base: 6, md: 20, lg: 32 }} bgColor={"black"} w={"100%"} minH={400} color={'white'}>
                <Flex h={8} align={'center'} pr={3} onClick={() => goBack()} cursor={'pointer'} _hover={{ borderBottomWidth: 1 }} w={'fit-content'}>
                    <IoChevronBack size={20} />
                    <Text ml={2} pt={-4} fontSize={16} fontWeight={'bold'}>Volver</Text>
                </Flex>
                <Flex align={'center'} gap={4}>
                    {service?.logo && <Image src={service.logo} alt={service?.title} height={28} width={28} objectFit={'contain'} rounded='100%' />}
                    {service?.title ? <Text fontSize={22} mt={3} fontWeight='bold'>{capitalizeFirstLetter(service.title)}</Text> : ''}
                </Flex>
                <ServiceDetails service={service} />
            </Box>
        </Box>

    )
}

export default ServiceDetailsPage