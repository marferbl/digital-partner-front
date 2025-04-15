import { Box, Text, Flex, Avatar } from "@chakra-ui/react";
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
import { COLORS, DARK_COLORS } from "../../../colors/colors";
import AddFavoriteButton from "../../../components/favorites/add-favorite-button";
import { isDemoSolutionId } from "../../../utils/methods";
import GradientButton from "../../../components/base/GradientButton";
import CustomButton from "../../../components/base/CustomButton";


export const SolutionDetailPage = () => {
    const { isLoggedIn } = useContext(UserContext)
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
        { label: 'Info', component: <SolutionDetail solution={solution} isDemo={isDemoSolution} /> },
        { label: 'Descubrir partners', component: <PartnerComponent isDemo={isDemoSolution} /> },
        { label: 'Pedir demo', component: <DemoComponent solution={solution} isDemo={isDemoSolution} /> },
        { label: 'Descargar manuales', component: <ManualComponent solution={solution} isDemo={isDemoSolution} /> },
        { label: 'Comprar referencias', component: <ReferencesComponent isDemo={isDemoSolution} /> },
        { label: 'Obtener certificaciones', component: <CertificationComponent solution={solution} isDemo={isDemoSolution} /> },

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
        setLabel(selectedLink.label);
        setSelectedComponent(selectedLink ? selectedLink.component : null);
    };


    return (
        <Box bgColor={'black'}>
            <Box p={5} bgColor={"black"} w={"100%"} minH={'100vh'} px={{ base: 6, md: 20, lg: 32 }}>
                <Flex w='full' justify={'space-between'}>
                    <Flex h={8} align={'center'} color='white' pr={3} onClick={() => window.history.back()} cursor={'pointer'} w={'fit-content'}>
                        <IoChevronBack size={20} />
                        <Text ml={2} pt={-1} fontSize={16} fontWeight={'bold'}>Volver</Text>
                    </Flex>
                    {isLoggedIn && <AddFavoriteButton entity={solution} />}
                </Flex>
                <Box mt={1} rounded={"xl"} w={"100%"} >
                    {solution && <Flex justify={'space-between'} align='center' mt={5} w='full'>
                        <Flex align={'center'} mt={5} gap={2}>
                            <div className="h-full flex justify-center items-center">
                                {solution.logo ? (
                                    <img src={solution.logo} alt={solution.name} className="h-20 w-20 rounded-lg" />
                                ) : (
                                    <div className="h-10 w-10 rounded-lg bg-gray-300 flex items-center justify-center text-white">
                                        {solution.name[0]}
                                    </div>
                                )}
                            </div>                            <Box>
                                <Text fontSize={{ base: 14, md: 30 }} whiteSpace='nowrap' color='white' fontWeight={300}>{solution.name}</Text>
                                <Text fontSize={{ base: 8, md: 14 }} pl={1} color={DARK_COLORS.neutral} _hover={{ textDecor: 'underline' }}>
                                    <a href={ensureHTTPS(solution.website)} target='_blank' fontSize='sm'>{'Ir a su web'}</a>
                                </Text>
                            </Box>
                        </Flex>
                        <div>
                            <CustomButton text='Contactar' disabled={!isLoggedIn} showIcon={true} onClick={() => window.open(`mailto:${solution?.corporate?.superadmin?.email}`)} />
                            {!isLoggedIn && <span class='text-sm text-neutral pl-3'>Debes iniciar sesión</span>}
                        </div>
                    </Flex>}

                </Box>
                <Flex w='full' justify={'space-evenly'} mt={{ base: 4, lg: 20 }} pb={5} px={{ base: 0, md: 10, lg: 20 }}>
                    {LINKS.map(link => (
                        <Text
                            key={link.label}
                            textAlign='center'
                            borderWidth={label === link.label ? 1 : 0}
                            w={180}
                            py={1}
                            px={2}
                            rounded='xl'
                            fontSize={{ base: 6, md: 13 }}
                            bgColor={label === link.label ? 'white' : 'transparent'}
                            onClick={() => renderComponent(link.label)}
                            color={label === link.label ? 'black' : 'white'}
                            cursor='pointer'
                        >
                            {link.label}
                        </Text>
                    ))}
                </Flex>
                {isLoggedIn || isDemoSolution || label === 'Info' ? <Box mt={4} px={{ base: 2, md: 14 }} flex={1}>
                    {selectedComponent}
                </Box> : <Flex w='full' justify={'center'} align={'center'} flexDir='column' mt={4} >
                    <Text mt={6} fontSize='xl' fontWeight='bold' color={'gray.400'}>Debes iniciar sesión para ver más detalles</Text>
                    <Link to={'/start'}>
                        <Text mt={2} fontSize='sm' fontWeight='bold' color={'blue.500'} _hover={{ color: 'blue.700' }}>Iniciar sesión</Text>
                    </Link>
                </Flex>}


            </Box>
        </Box>
    );
};
