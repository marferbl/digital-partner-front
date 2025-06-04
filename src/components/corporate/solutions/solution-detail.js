import { Box, Text, Flex, Grid, GridItem, Avatar, Checkbox } from "@chakra-ui/react";
import React, { useState, useContext, useEffect } from "react";
import CountryFlag from "../../base/country-flag";
import { languageLabelFromValue } from "../../../utils/methods";
import { SPECIFY_FEATURES_LABELS } from "../../../utils/constants";
import GradientButton from "../../base/GradientButton";
import FeedGallery from "../../base/FeedGallery";



export const SolutionDetail = ({ solution }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const KEYS_FEATURES = {
        rrhh: 'RRHH',
        sellmarketing: 'Ventas y marketing',
        finance: 'Finanzas',
        logistics: 'CSM',
        it: 'IT',
        data: 'Data',
        other: 'Otro',
        law: 'Legal',
        transversal: 'Transversal'
    };




    return (
        <Box px={10} rounded={"xl"} w={"100%"}>
            {solution &&
                <>
                    <Box mt={1} p={5} bgColor={"black"} w={"100%"} px={2} mb={3} color='white'>
                        <Text fontSize={{ base: 8, md: 14 }} mt={3} fontWeight='bold' textDecor={'underline'}>Descripción:</Text>
                        <Text fontSize={{ base: 8, md: 16 }} mt={0}>{solution.description}</Text>
                        <Box>
                            <Text fontSize={{ base: 8, md: 14 }} mt={5} fontWeight='bold' textDecor={'underline'}>Funcionalidad:</Text>
                            <Flex align={'center'} gap={3} pt={2} flexWrap='wrap'>
                                {solution?.features.map((feature, index) => (
                                    <Flex key={index} alignItems="center" gap={1}>
                                        <Checkbox
                                            isChecked={true}
                                            size={{ base: 'sm', md: 'md' }}
                                        />
                                        <Text key={index} fontSize={{ base: 6, md: 14 }} >{KEYS_FEATURES[feature]} </Text>

                                    </Flex>
                                ))}
                            </Flex>
                        </Box>
                        <Flex align={'center'} gap={6} flexWrap='wrap'>
                            <Box>
                                <Text fontSize={{ base: 8, md: 14 }} mt={5} fontWeight='bold' textDecor={'underline'}>Funcionalidades específicas:</Text>
                                <Flex align="center" gap={2} pt={2}>
                                    <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                                        {/* First column */}
                                        {solution?.specifyFeatures.slice(0, 5).map((feature, index) => (
                                            <Flex key={index} alignItems="center">
                                                <Checkbox
                                                    isChecked={true}
                                                    size={{ base: 'sm', md: 'md' }}
                                                />
                                                <Text ml={1} fontSize={{ base: 6, md: 14 }}>{SPECIFY_FEATURES_LABELS[feature]}</Text>
                                            </Flex>
                                        ))}

                                        {/* Second column */}
                                        {solution?.specifyFeatures.slice(5, 10).map((feature, index) => (
                                            <Flex key={index} alignItems="center">
                                                <Checkbox
                                                    isChecked={true}
                                                    size={{ base: 'sm', md: 'md' }}
                                                />
                                                <Text ml={1} fontSize={{ base: 6, md: 14 }}>{SPECIFY_FEATURES_LABELS[feature]}</Text>
                                            </Flex>
                                        ))}
                                        {solution?.specifyFeatures.slice(10, 15).map((feature, index) => (
                                            <Flex key={index} alignItems="center">
                                                <Checkbox
                                                    isChecked={true}
                                                    size={{ base: 'sm', md: 'md' }}
                                                />
                                                <Text ml={1} fontSize={{ base: 6, md: 14 }}>{SPECIFY_FEATURES_LABELS[feature]}</Text>
                                            </Flex>
                                        ))}
                                        {solution?.specifyFeatures.slice(15, 20).map((feature, index) => (
                                            <Flex key={index} alignItems="center">
                                                <Checkbox
                                                    isChecked={true}
                                                    size={{ base: 'sm', md: 'md' }}
                                                />
                                                <Text ml={1} fontSize={{ base: 6, md: 14 }}>{SPECIFY_FEATURES_LABELS[feature]}</Text>
                                            </Flex>
                                        ))}
                                    </Grid>
                                </Flex>
                            </Box>
                        </Flex>
                        <Flex align={'center'} gap={10} pt={8}>
                            <Box>
                                <Text fontSize={{ base: 8, md: 14 }} fontWeight='bold' textDecor={'underline'}>Países:</Text>
                                <Flex align={'center'} gap={2} pt={1} flexWrap='wrap'>
                                    {solution?.countries.map((country, index) => (
                                        <Text key={index} fontSize={{ base: 8, md: 18 }} >{<CountryFlag country={country} />}</Text>
                                    ))}
                                </Flex>
                            </Box>
                            <Box>
                                <Text fontSize={{ base: 8, md: 14 }} fontWeight='bold' textDecor={'underline'}>Idiomas:</Text>
                                <Flex align={'center'} gap={2} pt={1} flexWrap='wrap'>
                                    {solution?.languages?.map((language, index) => (
                                        <Text key={index} fontSize={{ base: 8, md: 16 }}>{languageLabelFromValue(language)} </Text>
                                    ))}
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                </>
            }
            {solution && solution?.gallery && solution.gallery.length ?
                <Box mt={6}>
                    <FeedGallery images={solution.gallery} />
                </Box>
                : ''}

        </Box>
    )
};
