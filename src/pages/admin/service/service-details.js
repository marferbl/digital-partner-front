import { Box, Text, Flex, Image, VStack, HStack, Icon } from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import { getServiceById } from "../../../services/service";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import { IoChevronBack } from "react-icons/io5";
import { FaGlobe, FaEnvelope } from "react-icons/fa";
import { capitalizeFirstLetter } from "../../../utils/methods";
import CustomButton from "../../../components/base/CustomButton";
import ServiceDetails from "../../../components/corporate/service/service-details";

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
        <Box bgColor="black">
            <Box
                py={5}
                px={{ base: 6, md: 20, lg: 32 }}
                bgColor={"black"}
                w={"100%"}
                minH={400}
                color={'white'}
            >
                <Flex
                    h={8}
                    align={'center'}
                    pr={3}
                    onClick={goBack}
                    cursor={'pointer'}
                    w={'fit-content'}
                    _hover={{ color: 'yellow.400' }}
                    transition="all 0.3s ease"
                >
                    <IoChevronBack size={20} />
                    <Text ml={2} pt={-4} fontSize={16} fontWeight={'bold'}>Volver</Text>
                </Flex>

                <Box
                    mt={4}
                    transition="all 0.3s ease"
                    _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                >
                    <Flex justify="space-between" align="center">
                        <Flex align={'center'} gap={4}>
                            {service?.logo && (
                                <Image
                                    src={service.logo}
                                    alt={service?.title}
                                    height={40}
                                    width={40}
                                    objectFit={'cover'}
                                    rounded='full'
                                    border="2px solid"
                                    borderColor="yellow.400"
                                />
                            )}
                            <VStack align="start" spacing={1}>
                                {service?.title && (
                                    <Text fontSize={28} fontWeight='bold' color="white">
                                        {capitalizeFirstLetter(service.title)}
                                    </Text>
                                )}
                                {service?.website && (
                                    <HStack>
                                        <Icon as={FaGlobe} color="yellow.400" />
                                        <Text
                                            fontSize="sm"
                                            color="gray.300"
                                            _hover={{ color: 'yellow.400' }}
                                        >
                                            <a href={service.website} target="_blank" rel="noopener noreferrer">
                                                Ir a su web
                                            </a>
                                        </Text>
                                    </HStack>
                                )}
                            </VStack>
                        </Flex>

                        <Box>
                            {isLoggedIn ? (
                                <HStack spacing={2}>
                                    <Icon as={FaEnvelope} color="yellow.400" />
                                    <CustomButton
                                        text='Contactar'
                                        showIcon={true}
                                        onClick={() => window.open(`mailto:${service?.corporate?.superadmin?.email}`)}
                                    />
                                </HStack>
                            ) : (
                                <VStack align="start" spacing={1}>
                                    <CustomButton text='Contactar' disabled={true} showIcon={true} />
                                    <Text fontSize="sm" color="gray.400">
                                        Inicia sesión para contactar
                                    </Text>
                                </VStack>
                            )}
                        </Box>
                    </Flex>
                </Box>

                <ServiceDetails service={service} />
            </Box>
        </Box>
    )
}

export default ServiceDetailsPage;