import React from 'react';
import { Center, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import GradientButton from '../GradientButton'; // Asegúrate de importar tu componente de botón correctamente
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next'; // Importa useTranslation

const DemoSection = () => {
    const { t } = useTranslation("global"); // Inicializa la traducción

    return (
        <Center
            flexDir={'column'}
            py={{ base: 10, md: 24 }}
            bg={'gray.100'}
            mb={{ base: 6, md: 16 }}
        >
            <Text textAlign={'center'} as="h2" fontSize={{ base: 18, md: 36 }} mb="10" fontFamily={'Montserrat'} fontWeight="bold" w={{ base: 200, md: 680 }}>
                <Typewriter
                    words={[t('tryDigitalandoOffer'), t('letsGo')]} // Usando la instancia de traducción
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </Text>
            <Link to="/demo">
                <GradientButton label={t('seeDemo')} type='green' size={'lg'} /> {/* Usando la instancia de traducción */}
            </Link>
        </Center>
    );
}

export default DemoSection;
