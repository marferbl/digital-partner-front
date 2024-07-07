import React from 'react'
import { Box, Flex, Image, Grid, GridItem, Avatar, Center, Heading, Text } from '@chakra-ui/react'
import { COLORS } from '../../colors/colors.js'
import { FiMail, FiPhone, FiNavigation } from "react-icons/fi";
import LevelIconCounter from './level-icon-counter.js';
import html2PDF from 'jspdf-html2canvas'
import GradientButton from '../base/GradientButton.js';

export const DigitalProfileDoc = () => {

    const LANGUAGES = [
        { label: 'Español', value: 5 },
        { label: 'Inglés', value: 3 },
        { label: 'Francés', value: 2 },
    ]

    const TECHNOLOGIES = [
        { label: 'React', value: 2 },
        { label: 'Node', value: 3 },
        { label: 'Python', value: 1 },
        { label: 'React', value: 2 },
        { label: 'Node', value: 3 },
        { label: 'Python', value: 2 },

    ]

    const printPDF = () => {
        const page = document.getElementById('pdfprinter');

        html2PDF(page, {
            jsPDF: {
                format: 'a4',
            },
            imageType: 'image/jpeg',
            output: './pdf/generate.pdf'
        });
    }

    return (
        <Box w='80%'>
            <Flex justify={'end'} pb={3} w={'full'} mt={-10} mb={2}>
                <GradientButton label={'Descargar'} type='green' onClick={printPDF} />
            </Flex>
            <Box id='pdfprinter' w={'100%'} borderWidth={1}>
                <Flex justify={'end'}>
                    <Image src={'/logo-d.png'} height={16} w={16} />
                </Flex>
                <Grid templateColumns="repeat(5, 1fr)" gap={6} justifyItems={'center'} px={5}>
                    <GridItem colSpan={2} borderWidth={1} rounded={'md'} shadow={'xl'} bg='black' w='full' py={2} px={5}>
                        <Center>
                            <Image mb={2} h={32} w={32} rounded='full' src={'/marcos-profile.png'} />
                        </Center>
                        <Flex flexDir={'column'} borderColor='white' pb={3} borderBottomWidth={1}>
                            <Flex color='white' align={'center'} gap={3}>
                                <FiPhone color={COLORS.secondary} />
                                (+34) 677 785 519
                            </Flex>
                            <Flex color='white' align={'center'} gap={3}>
                                <FiMail color={COLORS.secondary} />
                                marcos@marcos.es
                            </Flex>
                            <Flex color='white' align={'center'} gap={3}>
                                <FiNavigation color={COLORS.secondary} />
                                Valencia
                            </Flex>
                        </Flex>
                        <Flex flexDir={'column'} borderColor='white' py={3} borderBottomWidth={1}>
                            <Text color={'white'} fontWeight='bold' fontSize={'xl'} mb={1}>LANGUAGES</Text>
                            {LANGUAGES.map(language => (
                                <LevelIconCounter label={language.label} value={language.value} max={5} />
                            ))}
                        </Flex>
                        <Flex flexDir={'column'} borderColor='white' py={3}>
                            <Text color={'white'} fontWeight='bold' fontSize={'xl'} mb={1}>LANGUAGES</Text>
                            {TECHNOLOGIES.map(language => (
                                <LevelIconCounter label={language.label} value={language.value} max={3} />
                            ))}
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={3} w='full' bg='gray.100'>
                        <Box bg={COLORS.secondary} h={150} pt={4} color='white' px={2}>
                            <Heading fontFamily={'Montserrat'} fontWeight='bold'>
                                Marcos Fernandez
                            </Heading>
                            <Text fontSize={'2xl'} fontWeight='bold'>
                                Developer
                            </Text>
                        </Box>
                        <Box py={2}>
                            Esta es la descripcion de mi curriculum que dice lo guapo y ueno que soy en todo
                            Esta es la descripcion de mi curriculum que dice lo guapo y ueno que soy en todo
                            Esta es la descripcion de mi curriculum que dice lo guapo y ueno que soy en todo
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        </Box>

    )
}
