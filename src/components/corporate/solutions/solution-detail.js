import { Box, Text, Flex, Grid, GridItem, Avatar, Checkbox } from "@chakra-ui/react";
import React, { useState, useContext, useEffect } from "react";
import CountryFlag from "../../base/country-flag";
import { languageLabelFromValue } from "../../../utils/methods";
import { SPECIFY_FEATURES_LABELS } from "../../../utils/constants";
import GradientButton from "../../base/GradientButton";



export const SolutionDetail = ({ solution }) => {

    const KEYS_FEATURES = {
        rrhh: 'RRHH',
        sellmarketing: 'Ventas y marketing',
        finance: 'Finanzas',
        logistics: 'Cadena de suministro',
        it: 'IT',
        data: 'Data',
        other: 'Otro',
        law: 'Legal',
    };


    const ensureHTTPS = (url) => {
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            return `https://${url}`;
        }
        return url;
    };

    return (
        <Box mt={6} p={5} rounded={"xl"} w={"100%"}>
            {solution && <Grid templateColumns="repeat(8, 1fr)" gap={6}>
                <GridItem colSpan={3}>
                    <Box textAlign={'center'} mt={1} rounded={"xl"} bgColor={"white"} w={"100%"} px={10}>
                        <Avatar size="2xl" src={solution.logo || null} name={solution.name} mb={5} />
                        <Text fontWeight={'bold'} fontSize={34}>{solution.name}</Text>
                        <Text fontSize={20} color={'blue.600'} _hover={{ textDecor: 'underline' }}>
                            <a href={ensureHTTPS(solution.website)} target='_blank' fontSize='sm'>{solution.website}</a>
                        </Text>
                        <GradientButton
                            type='green'
                            label={'Contactar'}
                            onClick={() => window.open(`mailto:${solution?.corporate?.superadmin?.email}`)}
                            mt={5}
                        />
                    </Box>
                </GridItem>
                <GridItem colSpan={5} pr={7}>
                    <Box mt={1} p={5} bgColor={"white"} w={"100%"} minH={300} px={10} rounded='xl' shadow={'xl'} mb={3}>
                        <Text fontSize={14} mt={3} fontWeight='bold' textDecor={'underline'}>Descripción:</Text>
                        <Text fontSize={18} mt={0}>{solution.description}</Text>
                        <Text fontSize={14} mt={5} fontWeight='bold' textDecor={'underline'}>Funcionalidad:</Text>
                        <Flex align={'center'} gap={2} pt={2} flexWrap='wrap'>
                            {solution?.features.map((feature, index) => (
                                <Flex key={index} alignItems="center" gap={2}>
                                    <Checkbox
                                        isChecked={true}
                                    />
                                    <Text key={index} fontSize={18} >{KEYS_FEATURES[feature]} </Text>

                                </Flex>
                            ))}
                        </Flex>

                        <Text fontSize={14} mt={5} fontWeight='bold' textDecor={'underline'}>Funcionalidades específicas:</Text>

                        <Flex align="center" gap={2} pt={2}>
                            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                                {/* First column */}
                                {solution?.specifyFeatures.slice(0, 4).map((feature, index) => (
                                    <Flex key={index} alignItems="center">
                                        <Checkbox
                                            isChecked={true}
                                        />
                                        <Text ml={1} fontSize={18}>{SPECIFY_FEATURES_LABELS[feature]}</Text>
                                    </Flex>
                                ))}

                                {/* Second column */}
                                {solution?.specifyFeatures.slice(4, 8).map((feature, index) => (
                                    <Flex key={index} alignItems="center">
                                        <Checkbox
                                            isChecked={true}
                                        />
                                        <Text ml={1} fontSize={18}>{SPECIFY_FEATURES_LABELS[feature]}</Text>
                                    </Flex>
                                ))}
                            </Grid>
                        </Flex>
                        <Text fontSize={14} mt={5} fontWeight='bold' textDecor={'underline'}>Países:</Text>
                        <Flex align={'center'} gap={2} pt={1} flexWrap='wrap'>
                            {solution?.countries.map((country, index) => (
                                <Text key={index} fontSize={18} >{<CountryFlag country={country} />}</Text>
                            ))}
                        </Flex>
                        <Text fontSize={14} mt={5} fontWeight='bold' textDecor={'underline'}>Idiomas:</Text>
                        <Flex align={'center'} gap={2} pt={1} flexWrap='wrap'>
                            {solution?.languages?.map((language, index) => (
                                <Text key={index} >{languageLabelFromValue(language)} </Text>
                            ))}
                        </Flex>
                    </Box>
                </GridItem>
            </Grid>}
        </Box>
    )
};
