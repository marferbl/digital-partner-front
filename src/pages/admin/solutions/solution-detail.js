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

export const SolutionDetailPage = () => {
    const { isLoggedIn } = useContext(UserContext)
    const [solution, setSolution] = useState(null);
    const [selectedComponent, setSelectedComponent] = useState(<PartnerComponent />);
    const [label, setLabel] = useState('Partner');
    const { id } = useParams();

    const LINKS = [
        { label: 'Descubrir partners', component: <PartnerComponent /> },
        { label: 'Pedir demo', component: <DemoComponent solution={solution} /> },
        { label: 'Descargar manuales', component: <ManualComponent solution={solution} /> },
        { label: 'Comprar referencias', component: <ReferencesComponent /> },
        { label: 'Obtener certificaciones', component: <CertificationComponent /> },
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
            <Box mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"} minH={400}>
                <SolutionDetail solution={solution} />
                <Flex w='full' justify={'space-around'} mt={4} filter={'grayscale(100)'}
                    cursor={isLoggedIn ? 'pointer' : 'not-allowed'}
                >
                    {LINKS.map(link => (
                        <Text
                            key={link.label}
                            flex='1'
                            textAlign='center'
                            borderWidth={1}
                            py={1}
                            fontSize={14}
                            _hover={isLoggedIn ? { bgColor: 'gray.100' } : null}
                            bgColor={label === link.label ? 'gray.100' : 'white'}
                            onClick={isLoggedIn ? () => renderComponent(link.label) : null}
                            opacity={isLoggedIn ? 1 : 0.5} // Adjust opacity for disabled appearance
                            pointerEvents={isLoggedIn ? 'auto' : 'none'} // Enable or disable pointer events
                        >
                            {link.label}
                        </Text>
                    ))}
                </Flex>
                {isLoggedIn ? <Box mt={4} px={5}>
                    {selectedComponent}
                </Box> : <Flex w='full' justify={'center'} align={'center'} flexDir='column' mt={4} >
                    <Text mt={6} fontSize='xl' fontWeight='bold' color={'gray.400'}>Debes iniciar sesión para ver más detalles</Text>
                    <Link to={'/newRouteHidden'}>
                        <Text mt={2} fontSize='sm' fontWeight='bold' color={'blue.500'} _hover={{ color: 'blue.700' }}>Iniciar sesión</Text>
                    </Link>

                </Flex>}
            </Box>
        </Box>
    );
};
