import { Box, Text, Flex, Grid, GridItem, Avatar, Checkbox } from "@chakra-ui/react";
import React, { useState, useContext, useEffect } from "react";
import CountryFlag from "../../base/country-flag";
import { languageLabelFromValue } from "../../../utils/methods";
import { SPECIFY_FEATURES_LABELS } from "../../../utils/constants";
import GradientButton from "../../base/GradientButton";
import ImageGallerySlider from "../../base/GallerySlider";



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
        transversal: 'Transversal'
    };


    const ensureHTTPS = (url) => {
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            return `https://${url}`;
        }
        return url;
    };

    return (
        <Box px={5} rounded={"xl"} w={"100%"}>
            {solution &&
                <>
                    <Box mt={1} rounded={"xl"} bgColor={"white"} w={"100%"} >
                        <Flex justify={'space-between'} align='center' mt={5} w='full'>
                            <Flex align={'center'} mt={5} gap={2}>
                                <Avatar size={{ base: 'md', md: 'lg' }} src={solution.logo || null} name={solution.name} />
                                <Box>
                                    <Text fontWeight={'bold'} fontSize={{ base: 14, md: 24 }} whiteSpace='nowrap'>{solution.name}</Text>
                                    <Text fontSize={{ base: 8, md: 14 }} pl={1} color={'blue.600'} _hover={{ textDecor: 'underline' }}>
                                        <a href={ensureHTTPS(solution.website)} target='_blank' fontSize='sm'>{'Ir a su web'}</a>
                                    </Text>
                                </Box>
                            </Flex>
                            <GradientButton
                                type='green'
                                size={{ base: 'xs', md: 'md' }}
                                label={'Contactar'}
                                onClick={() => window.open(`mailto:${solution?.corporate?.superadmin?.email}`)}
                                mt={5}
                            />
                        </Flex>

                    </Box>
                    <Box mt={1} p={5} bgColor={"white"} w={"100%"} minH={300} px={2} mb={3}>
                        <Text fontSize={{ base: 8, md: 14 }} mt={3} fontWeight='bold' textDecor={'underline'}>Descripción:</Text>
                        <Text fontSize={{ base: 8, md: 16 }} mt={0}>{solution.description}</Text>
                        <Box>
                            <Text fontSize={{ base: 8, md: 14 }} mt={5} fontWeight='bold' textDecor={'underline'}>Funcionalidad:</Text>
                            <Flex align={'center'} gap={3} pt={2} flexWrap='wrap'>
                                {solution?.features.map((feature, index) => (
                                    <Flex key={index} alignItems="center" gap={1}>
                                        <Checkbox
                                            isChecked={true}
                                            size={{base: 'sm', md: 'md'}}
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
                                                    size={{base: 'sm', md: 'md'}}
                                                />
                                                <Text ml={1} fontSize={{ base: 6, md: 14 }}>{SPECIFY_FEATURES_LABELS[feature]}</Text>
                                            </Flex>
                                        ))}

                                        {/* Second column */}
                                        {solution?.specifyFeatures.slice(5, 10).map((feature, index) => (
                                            <Flex key={index} alignItems="center">
                                                <Checkbox
                                                    isChecked={true}
                                                    size={{base: 'sm', md: 'md'}}
                                                />
                                                <Text ml={1} fontSize={{ base:6, md: 14 }}>{SPECIFY_FEATURES_LABELS[feature]}</Text>
                                            </Flex>
                                        ))}
                                        {solution?.specifyFeatures.slice(10, 15).map((feature, index) => (
                                            <Flex key={index} alignItems="center">
                                                <Checkbox
                                                    isChecked={true}
                                                    size={{base: 'sm', md: 'md'}}
                                                />
                                                <Text ml={1} fontSize={{ base: 6, md: 14 }}>{SPECIFY_FEATURES_LABELS[feature]}</Text>
                                            </Flex>
                                        ))}
                                        {solution?.specifyFeatures.slice(15, 20).map((feature, index) => (
                                            <Flex key={index} alignItems="center">
                                                <Checkbox
                                                    isChecked={true}
                                                    size={{base: 'sm', md: 'md'}}
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
                <Box>
                    <ImageGallerySlider images={solution.gallery} />
                </Box>
                : ''}

        </Box>
    )
};
