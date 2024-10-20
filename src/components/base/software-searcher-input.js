import { useState } from 'react';
import { Flex, Input, Button, Icon } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { COLORS } from '../../colors/colors.js'; // Assuming COLORS is imported from your constants file
import { FiTool, FiRepeat, FiCalendar } from "react-icons/fi";
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { Tooltip } from 'react-tooltip'




export const SoftwareSearcherInput = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Using useNavigate instead of useHistory
    const { t } = useTranslation('global');

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
                placeholder={t('iaHelpsYou')}
            />
            <Button
                type="submit"
                size={{ base: 'xs', md: 'sm' }}
                bg={COLORS.primary}
                color='white'
                _hover={{ color: 'gray.200', shadow: 'xl' }}
            >
                {t('search')}
            </Button>
            <Button display={{ base: 'none', md: 'block' }} size={'sm'} onClick={() => goToSearch('solutions')}
                className="solutions-tooltip"
            >
                <Icon
                    fontSize="16"
                    as={FiTool}
                />
                <Tooltip anchorSelect=".solutions-tooltip" place="bottom">
                    Todos los servicios
                </Tooltip>
            </Button>
            <Button display={{ base: 'none', md: 'block' }} size={'sm'} onClick={() => goToSearch('services')}
                className="services-tooltip"
            >
                <Icon
                    fontSize="16"
                    as={FiRepeat}
                />
                <Tooltip anchorSelect=".services-tooltip" place="bottom">
                    Todas las soluciones
                </Tooltip>
            </Button>
            <Button display={{ base: 'none', md: 'block' }} size={'sm'} onClick={() => goToSearch('events')}
                className="events-tooltip"
            >
                <Icon
                    fontSize="16"
                    as={FiCalendar}
                />
                <Tooltip anchorSelect=".events-tooltip" place="bottom">
                    Todas los eventos
                </Tooltip>
            </Button>
        </Flex>
    );
};
