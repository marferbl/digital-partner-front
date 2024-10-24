import { Box, Text, Flex } from "@chakra-ui/react";
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
import { COLORS } from "../../../colors/colors";
import AddFavoriteButton from "../../../components/favorites/add-favorite-button";
import { isDemoSolutionId } from "../../../utils/methods";


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
        <Box>
            {!isLoggedIn ? <Navbar></Navbar> : null}
            <Box mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"} minH={600}>
                <Flex w='full' justify={'space-between'}>
                    <Flex h={8} align={'center'} pr={3} onClick={() => window.history.back()} cursor={'pointer'} _hover={{ borderBottomWidth: 1 }} w={'fit-content'}>
                        <IoChevronBack size={20} />
                        <Text ml={2} pt={-4} fontSize={16} fontWeight={'bold'}>Volver</Text>
                    </Flex>
                    {isLoggedIn && <AddFavoriteButton entity={solution} />}
                </Flex>
                { }
                <Flex w='full' justify={'space-evenly'} mt={4}
                    pb={5}
                >
                    {LINKS.map(link => (
                        <Text
                            key={link.label}
                            textAlign='center'
                            borderWidth={1}
                            w={180}
                            py={1}
                            px={2}
                            fontSize={{base: 6, md: 13}}
                            rounded='md'
                            bgColor={label === link.label ? COLORS.primary : 'white'}
                            onClick={() => renderComponent(link.label)}
                            color={label === link.label ? 'white' : 'black'}
                            cursor='pointer'
                        >
                            {link.label}
                        </Text>
                    ))}
                </Flex>
                {isLoggedIn || isDemoSolution || label === 'Info' ? <Box mt={4} px={{base: 2, md: 14}} flex={1}>
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
