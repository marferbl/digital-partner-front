import React from 'react';
import { Center, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import GradientButton from '../GradientButton'; // Make sure to import your button component
import { Typewriter } from 'react-simple-typewriter';

const DemoSection = () => (
    <Center
        flexDir={'column'}
        py={{ base: 10, md: 24 }}
        bg={'gray.100'}
        mb={{ base: 6, md: 16 }}
    >
        <Text textAlign={'center'} as="h2" fontSize={36} mb="10" fontFamily={'Montserrat'} fontWeight="bold" w={680}>
            <Typewriter
                words={['¿Quieres probar todo lo que ofrece digitalando?', '¡Vamos a ello!']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </Text>
        <Link to="/demo">
            <GradientButton label='Ver demo' type='green' size={'lg'} />
        </Link>
    </Center>
);

export default DemoSection;
