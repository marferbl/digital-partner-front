import { Box, Text, Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { SolutionDetail } from "../../../components/corporate/solutions/solution-detail";
import { getSolutionById } from "../../../services/solution";
import { PartnerComponent } from "../../../components/corporate/solutions/solution-detail/partner-component";
import { DemoComponent } from "../../../components/corporate/solutions/solution-detail/demo-component";
import { ManualComponent } from "../../../components/corporate/solutions/solution-detail/manual-component";
import { ReferencesComponent } from "../../../components/corporate/solutions/solution-detail/references-component";
import { CertificationComponent } from "../../../components/corporate/solutions/solution-detail/certificacions-component";
import { useParams } from "react-router-dom";

export const SolutionDetailPage = () => {
    const [solution, setSolution] = useState(null);
    const [selectedComponent, setSelectedComponent] = useState(<PartnerComponent />);
    const [label, setLabel] = useState('Partner');
    const { id } = useParams();

    const LINKS = [
        { label: 'Partner', component: <PartnerComponent /> },
        { label: 'Demo', component: <DemoComponent /> },
        { label: 'Manuales', component: <ManualComponent /> },
        { label: 'Referencias', component: <ReferencesComponent /> },
        { label: 'Certificaciones', component: <CertificationComponent /> },
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
        <Box mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"} minH={400}>
            <SolutionDetail solution={solution} />
            <Flex w='full' justify={'space-around'} mt={4}>
                {LINKS.map(link => (
                    <Text
                        key={link.label}
                        cursor='pointer'
                        flex='1'
                        textAlign='center'
                        borderWidth={1}
                        py={1}
                        _hover={{ bgColor: 'gray.100' }}
                        bgColor={label === link.label ? 'gray.100' : 'white'}
                        onClick={() => renderComponent(link.label)}
                    >
                        {link.label}
                    </Text>
                ))}
            </Flex>
            <Box mt={4} px={5}>
                {selectedComponent}
            </Box>
        </Box>
    );
};
