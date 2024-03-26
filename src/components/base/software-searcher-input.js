import { useState } from 'react';
import { Flex, Input, Button } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { COLORS } from '../../colors/colors.js'; // Assuming COLORS is imported from your constants file

export const SoftwareSearcherInput = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Using useNavigate instead of useHistory

    const isInPanel = () => {
        return window.location.pathname.includes('private');
    }

    const handleSearch = () => {
        const route = getRoute();
        navigate(route); // Using navigate function instead of push method
    };

    const getRoute = () => {
        return isInPanel() ? `/private/search/${searchTerm}` : `/search/${searchTerm}`;
    };

    return (
        <Flex as="form" onSubmit={(e) => { e.preventDefault(); handleSearch(); }} align={'center'} justify={'center'} gap={3}>
            <Input
                bg={'white'}
                w={400}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='¿Qué buscas? La IA te ayuda :)...'
            />
            <Button
                type="submit"
                size={'sm'}
                bg={COLORS.primary}
                color='white'
                _hover={{ color: 'gray.200', shadow: 'xl' }}
            >
                Buscar
            </Button>
        </Flex>
    );
};
