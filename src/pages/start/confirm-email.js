import React from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';
import { verifyEmail } from '../../services/auth';
import { useParams } from 'react-router-dom';



const ConfirmEmailPage = () => {

    const { id } = useParams();

    const handleConfirmEmail = async () => {
        verifyEmail(id).then((res) => {
            console.log(res)
        })
    };

    return (
        <Box textAlign="center" mt="50px">
            <Heading mb="20px">Click here to confirm your email</Heading>
            <Button colorScheme="teal" size="lg" onClick={handleConfirmEmail}>
                Confirm Email
            </Button>
        </Box>
    );
};

export default ConfirmEmailPage;
