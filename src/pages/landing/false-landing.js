import React from "react";
import Features from "../../components/base/landing/features";
import FooterLanding from "../../components/base/landing/footer";
import FormDemo from "../../components/base/landing/form";
import Hero from "../../components/base/landing/hero";
import Testimonials from "../../components/base/landing//testimonials";
import Navbar from "../../components/base/navbar";
import MarketplaceSection from "../../components/base/landing/marketplacesection";
import { PhotoFullScreen } from "../../components/base/landing/photo-fullscreen";
import SoftwareSearcher from "../../components/base/landing/searcher-software";
import Quiz from "../../components/quiz/Quiz";
import { Box, Text, Link } from "@chakra-ui/react";
import { COLORS } from "../../colors/colors";

const StickyBanner = () => {
    return (
        <Box
            position="sticky"
            top="0"
            backgroundColor={'#93d1bf'}
            py="4"
            px="6"
            boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)"
            zIndex="999"
            textAlign={'center'}
        >
            <Text color="black" fontWeight="bold" fontSize={{ base: 10, md: 16 }}>
                🚀 Ahora mismo digitalando se encuentra en la campaña Corporate Founders. Si te interesa participar puedes enviar un correo{' '}
                <Link color="blue.400" href="mailto:digitalandocompany@gmail.com" textDecor={'underline'}>
                    aquí
                </Link>
            </Text>        </Box>
    );
};

const FalseLanding = () => {
    return (
        <>
            <StickyBanner />
            <Box pointerEvents={'none'} opacity={0.5}>
                <Navbar />
                <Hero />
                <Quiz />
                <Features />
                <PhotoFullScreen />
                <FooterLanding />
            </Box>
        </>
    );
};

export default FalseLanding;
