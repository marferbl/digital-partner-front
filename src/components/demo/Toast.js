import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const CustomToast = ({ message, submenssage, canStep, setStep }) => {
    console.log(canStep)
    return (
        <Box
            position="fixed"
            bottom="20px"
            right="20px"
            bg="gray.700"
            color="white"
            p={4}
            borderRadius="md"
            boxShadow="md"
            display="flex"
            alignItems="center"
            gap={3}
            zIndex="docked"
        >
            <Box maxW={400}>{message}
                {submenssage && <><Box py={1}>{''}</Box> <Box pt={2}>{submenssage}</Box></>}
            </Box>

            {canStep ? <Button size="sm" onClick={setStep} bg='transparent'>
                Hecho
            </Button> : <Text>Ve a la sección</Text>}
        </Box>
    );
};

export default CustomToast;
