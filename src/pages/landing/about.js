import { Box, Flex, Image, Center, Heading, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'
import FooterLanding from '../../components/base/landing/footer'
import Navbar from '../../components/base/navbar'

const AboutPage = () => {
    const { t } = useTranslation("global");

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Box>

            <Box pb={10}>
                <Heading textAlign={'center'} fontFamily='Roobert' fontWeight={'bold'} mt={10}>
                    {t('about.title')}
                </Heading>
                {/* <Center>
                <Link to="/">
                    <Image src={"/logo-digitalando.png"} height={14} pl={4} />
                </Link>
            </Center> */}
                <Box px={{ base: 3, md: 5, lg: 20 }} py={2} >
                    <Text fontWeight={'bold'} fontSize={20} mt={6} mb={3}>
                        ⦿ {t('about.whatIsDigitalando.title')}
                    </Text>
                    <Text>
                        {t('about.whatIsDigitalando.content')}
                    </Text>
                </Box>
                <Box px={{ base: 3, md: 5, lg: 20 }} bgColor={'gray.50'} my={2} pt={2} pb={8}>
                    <Text fontWeight={'bold'} fontSize={20} mt={6} mb={3}>
                        ⦿ {t('about.whyNow.title')}
                    </Text>
                    <Text>
                        {t('about.whyNow.content')}
                    </Text>
                </Box>
                <Box px={{ base: 3, md: 5, lg: 20 }} py={2}>

                    <Text fontWeight={'bold'} fontSize={20} mt={6} mb={3}>
                        ⦿ {t('about.whoAreIvanAndMarcos.title')}
                    </Text>
                    <Text>
                        {t('about.whoAreIvanAndMarcos.content')}
                    </Text>
                    <Center>
                        <Link to="/">
                            <Image src={"/photo-us.png"} h={40} mt={12} borderRadius={10} />
                        </Link>
                    </Center>
                </Box>
            </Box >
            <FooterLanding />
        </Box >
    )
}

export default AboutPage