import React from 'react'
import { languageLabelFromValue } from '../../utils/methods'
import { SPECIFY_FEATURES_LABELS } from '../../utils/constants'
import { Box, Text, Grid, GridItem, Avatar, Flex, Checkbox } from '@chakra-ui/react'
import GradientButton from '../base/GradientButton'
import CountryFlag from '../base/country-flag'



const SolutionDetailDemo = () => {

    const FEATURES = [
        'RRHH',
        'Finanzas',
    ]

    const SPECIFY_FEATURES = [
        'Control Horario',
        'Ausencias',
        'Nóminas',
        'Gestión de personal',
        'Gestión de talento',
        'Gestión de gastos',
    ]

    const COUNTRIES = [
        'spain',
        'france',
        'italy',
        'usa',
        'china',
        'india',
        'germany',
        'japan',
        'canada',
    ]

    const LANGUAGES = [
        'english',
        'spanish',
        'french',
        'italian',
        'german',
        'japanese',
        'chinese',
        'russian',
    ]

    return (
        <Box mt={6} p={5} rounded={"xl"} w={"100%"}>
            <Grid templateColumns="repeat(8, 1fr)" gap={6}>
                <GridItem colSpan={3}>
                    <Box textAlign={'center'} mt={1} rounded={"xl"} bgColor={"white"} w={"100%"} px={10}>
                        <Avatar size="2xl" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrAh6Ge0hmesPN8Plui6S39eP94Kf4hGo6Q&s'} mb={5} />
                        <Text fontWeight={'bold'} fontSize={34}>{'Solucion de muestra'}</Text>
                        <Text fontSize={20} color={'blue.600'} _hover={{ textDecor: 'underline' }}>
                            <a href={'https://www.digitalando.org'} target='_blank' fontSize='sm'>{'www.digitalando.org'}</a>
                        </Text>
                        <GradientButton
                            type='green'
                            label={'Contactar'}
                            mt={5}
                        />
                    </Box>
                </GridItem>
                <GridItem colSpan={5} pr={7}>
                    <Box mt={1} p={5} bgColor={"white"} w={"100%"} minH={300} px={10} rounded='xl' shadow={'xl'} mb={3}>
                        <Text fontSize={14} mt={3} fontWeight='bold' textDecor={'underline'}>Descripción:</Text>
                        <Text fontSize={18} mt={0}>Hola que tal</Text>
                        <Text fontSize={14} mt={5} fontWeight='bold' textDecor={'underline'}>Funcionalidad:</Text>
                        <Flex align={'center'} gap={2} pt={2} flexWrap='wrap'>
                            {FEATURES.map((feature, index) => (
                                <Flex key={index} alignItems="center" gap={2}>
                                    <Checkbox
                                        isChecked={true}
                                    />
                                    <Text key={index} fontSize={18} >{feature} </Text>

                                </Flex>
                            ))}
                        </Flex>

                        <Text fontSize={14} mt={5} fontWeight='bold' textDecor={'underline'}>Funcionalidades específicas:</Text>

                        <Flex align="center" gap={2} pt={2}>
                            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                                {/* First column */}
                                {SPECIFY_FEATURES.slice(0, 4).map((feature, index) => (
                                    <Flex key={index} alignItems="center">
                                        <Checkbox
                                            isChecked={true}
                                        />
                                        <Text ml={1} fontSize={18}>{feature}</Text>
                                    </Flex>
                                ))}

                                {/* Second column */}
                                {SPECIFY_FEATURES.slice(4, 8).map((feature, index) => (
                                    <Flex key={index} alignItems="center">
                                        <Checkbox
                                            isChecked={true}
                                        />
                                        <Text ml={1} fontSize={18}>{feature}</Text>
                                    </Flex>
                                ))}
                            </Grid>
                        </Flex>
                        <Text fontSize={14} mt={5} fontWeight='bold' textDecor={'underline'}>Países:</Text>
                        <Flex align={'center'} gap={2} pt={1} flexWrap='wrap'>
                            {COUNTRIES.map((country, index) => (
                                <Text key={index} fontSize={18} >{<CountryFlag country={country} />}</Text>
                            ))}
                        </Flex>
                        <Text fontSize={14} mt={5} fontWeight='bold' textDecor={'underline'}>Idiomas:</Text>
                        <Flex align={'center'} gap={2} pt={1} flexWrap='wrap'>
                            {LANGUAGES.map((language, index) => (
                                <Text key={index} >{languageLabelFromValue(language)} </Text>
                            ))}
                        </Flex>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default SolutionDetailDemo