import { useState } from 'react';
import { Flex, Input, Button, Icon } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { COLORS } from '../../colors/colors.js'; // Assuming COLORS is imported from your constants file
import { FiTool, FiRepeat } from "react-icons/fi";




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

    const goToSearch = (key) => {
        navigate(getRoute(), { state: { filters: { lineType: key } } }, { replace: true }
        );
    }

    return (
        <Flex as="form" onSubmit={(e) => { e.preventDefault(); handleSearch(); }} align={'center'} justify={'center'} gap={3}>
            <Input
                bg={'white'}
                w={{ base: 200, md: 250, lg: 400 }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                fontSize={{ base: 9, md: 12, lg: 14 }}
                placeholder='¿Qué buscas? La IA te ayuda :)'
            />
            <Button
                type="submit"
                size={{ base: 'xs', md: 'sm' }}
                bg={COLORS.primary}
                color='white'
                _hover={{ color: 'gray.200', shadow: 'xl' }}
            >
                Buscar
            </Button>
            <Button display={{ base: 'none', md: 'block' }} size={'sm'} onClick={() => goToSearch('solutions')}>
                <Icon
                    fontSize="16"
                    as={FiTool}
                />
            </Button>
            <Button display={{ base: 'none', md: 'block' }} size={'sm'} onClick={() => goToSearch('services')}>
                <Icon
                    fontSize="16"
                    as={FiRepeat}
                />
            </Button>
        </Flex>
    );
};
