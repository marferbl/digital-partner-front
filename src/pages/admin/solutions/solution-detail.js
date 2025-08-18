import { Box, Text, Flex, Avatar, VStack, HStack, Badge, Icon, Center } from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import { SolutionDetail } from "../../../components/corporate/solutions/solution-detail";
import { getSolutionById } from "../../../services/solution";
import { PartnerComponent } from "../../../components/corporate/solutions/solution-detail/partner-component";
import { DemoComponent } from "../../../components/corporate/solutions/solution-detail/demo-component";
import { ManualComponent } from "../../../components/corporate/solutions/solution-detail/manual-component";
import { ReferencesComponent } from "../../../components/corporate/solutions/solution-detail/references-component";
import { CertificationComponent } from "../../../components/corporate/solutions/solution-detail/certificacions-component";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import Navbar from "../../../components/base/navbar";
import { IoChevronBack } from "react-icons/io5";
import { FaGlobe, FaInfoCircle, FaUsers, FaLaptop, FaBook, FaStar, FaCertificate, FaCreditCard } from "react-icons/fa";
import { COLORS, DARK_COLORS } from "../../../colors/colors";
import AddFavoriteButton from "../../../components/favorites/add-favorite-button";
import { isDemoSolutionId } from "../../../utils/methods";
import GradientButton from "../../../components/base/GradientButton";
import CustomButton from "../../../components/base/CustomButton";
import { PlansComponent } from "../../../components/corporate/solutions/solution-detail/plans-component";
import { useTranslation } from "react-i18next";

export const SolutionDetailPage = () => {
    const { isLoggedIn } = useContext(UserContext)
    const { t } = useTranslation("global")
    const [solution, setSolution] = useState(null);
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [label, setLabel] = useState(null);
    const [isDemoSolution, setIsDemoSolution] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const isDemo = isDemoSolutionId(id)
            setIsDemoSolution(isDemo);
        }
    }, [id])


    useEffect(() => {
        if (!selectedComponent && solution) {
            renderComponent('Info');
        }
    }, [solution]);

    const ensureHTTPS = (url) => {
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            return `https://${url}`;
        }
        return url;
    };



    const LINKS = [
        { label: t('solutionDetail.info'), component: <SolutionDetail solution={solution} isDemo={isDemoSolution} />, icon: FaInfoCircle },
        { label: t('solutionDetail.partners'), component: <PartnerComponent isDemo={isDemoSolution} />, icon: FaUsers },
        // { label: 'Pedir demo', component: <DemoComponent solution={solution} isDemo={isDemoSolution} />, icon: FaLaptop },
        // { label: 'Descargar manuales', component: <ManualComponent solution={solution} isDemo={isDemoSolution} /> },
        { label: t('solutionDetail.references'), component: <ReferencesComponent isDemo={isDemoSolution} />, icon: FaStar },
        { label: t('solutionDetail.certifications'), component: <CertificationComponent solution={solution} isDemo={isDemoSolution} />, icon: FaCertificate },
        { label: t('solutionDetail.acquire'), component: <PlansComponent entity={solution} isDemo={isDemoSolution} />, icon: FaCreditCard },
    ];


    useEffect(() => {
        getMySolutions();
    }, []);

    const getMySolutions = () => {
        getSolutionById(id)
            .then((res) => {
                setSolution(res.data.solution);

            })
            .catch((error) => {
                console.log(error);
            });
    };

    const renderComponent = (label) => {
        const selectedLink = LINKS.find(link => link.label === label);
        setLabel(selectedLink?.label);
        setSelectedComponent(selectedLink ? selectedLink.component : null);
    };


    return (
        <Box bgColor={'black'}>
            <Box p={5} bgColor={"black"} w={"100%"} minH={'100vh'} px={{ base: 6, md: 20, lg: 32 }}>
                <Flex w='full' justify={'space-between'}>
                    <Flex
                        h={8}
                        align={'center'}
                        color='white'
                        pr={3}
                        onClick={() => window.history.back()}
                        cursor={'pointer'}
                        w={'fit-content'}
                        _hover={{ color: 'yellow.400' }}
                        transition="all 0.3s ease"
                    >
                        <IoChevronBack size={20} />
                        <Text ml={2} pt={-1} fontSize={16} fontWeight={'bold'}>{t('solutionDetail.back')}</Text>
                    </Flex>
                    {isLoggedIn && <AddFavoriteButton entity={solution} />}
                </Flex>

                <Box
                    mt={1}
                    rounded={"xl"}
                    w={"100%"}
                    transition="all 0.3s ease"
                    _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                >
                    {solution && (
                        <Flex justify={'space-between'} align='center' mt={5} w='full'>
                            <Flex align={'center'} mt={5} gap={4}>
                                <div className="h-full flex justify-center items-center">
                                    {solution.logo ? (
                                        <img
                                            src={solution.logo}
                                            alt={solution.name}
                                            className="h-20 w-20 rounded-lg"
                                            style={{ border: '2px solid', borderColor: '#ECC94B' }}
                                        />
                                    ) : (
                                        <div className="h-20 w-20 rounded-lg bg-gray-800 flex items-center justify-center text-white border-2 border-yellow-400">
                                            {solution.name[0]}
                                        </div>
                                    )}
                                </div>
                                <VStack align="start" spacing={1}>
                                    <Text fontSize={{ base: 14, md: 30 }} whiteSpace='nowrap' color='white' fontWeight={300}>
                                        {solution.name}
                                    </Text>
                                    {/*
                                    <HStack>
                                        <Icon as={FaGlobe} color="yellow.400" />
                                        <Text fontSize={{ base: 8, md: 14 }} color="gray.300" _hover={{ color: 'yellow.400' }}>
                                            <a href={ensureHTTPS(solution.website)} target='_blank' rel="noopener noreferrer">
                                                {'Ir a su web'}
                                            </a>
                                        </Text>
                                    </HStack>
                                    */}
                                </VStack>
                            </Flex>
                            <div>
                                <CustomButton
                                    text={t('solutionDetail.contact')}
                                    disabled={!isLoggedIn}
                                    showIcon={true}
                                    onClick={() => window.open(`mailto:${solution?.corporate?.superadmin?.email}`)}
                                />
                                {!isLoggedIn && <Text className='text-sm text-neutral pl-3'>{t('solutionDetail.mustLogin')}</Text>}
                            </div>
                        </Flex>
                    )}
                </Box>

                <Flex
                    w='full'
                    justify={'space-evenly'}
                    mt={{ base: 4, lg: 20 }}
                    pb={5}
                    px={{ base: 0, md: 10, lg: 20 }}
                    gap={4}
                >
                    {LINKS.map(link => (
                        <Flex
                            key={link.label}
                            align="center"
                            justify="center"
                            borderWidth={label === link.label ? 1 : 0}
                            w={180}
                            py={2}
                            px={3}
                            rounded='xl'
                            fontSize={{ base: 6, md: 13 }}
                            bgColor={label === link.label ? 'white' : 'transparent'}
                            onClick={() => renderComponent(link.label)}
                            color={label === link.label ? 'black' : 'white'}
                            cursor='pointer'
                            transition="all 0.3s ease"
                            _hover={{
                                bgColor: label === link.label ? 'white' : 'gray.800',
                                transform: 'translateY(-2px)'
                            }}
                        >
                            <Icon as={link.icon} mr={2} color={label === link.label ? 'black' : 'yellow.400'} />
                            {link.label}
                        </Flex>
                    ))}
                </Flex>

                {isLoggedIn || isDemoSolution || label === t('solutionDetail.info') ? (
                    <Box mt={4} px={{ base: 2, md: 14 }} flex={1}>
                        {selectedComponent}
                    </Box>
                ) : (
                <Flex w='full' justify={'center'} align={'center'} flexDir='column' mt={4}>
                    {label === t('solutionDetail.references') ? (
                        <>
                            <Text
                                mt={6}
                                fontSize='xl'
                                fontWeight='bold'
                                color='gray.400'
                                whiteSpace="pre-line"
                                textAlign='center'
                                fontStyle='italic'
                            >
                                {t('references.notLogged')}
                            </Text>
                            <Text
                                mt={2}
                                fontSize='xl'
                                fontWeight='bold'
                                color='gray.400'
                                whiteSpace="pre-line"
                                textAlign='center'
                            >
                                {t('references.notLogged2')}
                            </Text>
                        </>
                    ) : (
                        <Text
                            mt={6}
                            fontSize='xl'
                            fontWeight='bold'
                            color='gray.400'
                            whiteSpace="pre-line"
                            textAlign='center'
                        >
                            {label === t('solutionDetail.partners')
                                ? t('partners.notLogged')
                                : t('solutionDetail.mustLoginDetails')
                            }
                        </Text>
                    )}

                    <Link to={'/start'}>
                        <Text
                            mt={2}
                            fontSize='sm'
                            fontWeight='bold'
                            color={'yellow.400'}
                            _hover={{ color: 'yellow.300' }}
                        >
                            {t('solutionDetail.login')}
                        </Text>
                    </Link>
                </Flex>
                )}
            </Box>
        </Box>
    );
};
