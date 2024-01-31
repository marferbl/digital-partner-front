import { Box, Button, Center, Text } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { COLORS } from '../../../colors/colors'
import { Link } from "react-router-dom"
import { useContext, useState } from 'react'
import { UserContext } from '../../../context/userContext'


const SoftwareSearcher = () => {
    const { isLoggedIn } = useContext(UserContext);

    const [searchTerm, setSearchTerm] = useState('')


    const routeIsDashboard = () => {
        return window.location.pathname === '/private/dashboard'
    }

    const getRoute = () => {
        return routeIsDashboard() ? `/private/search/${searchTerm}` : `/search/${searchTerm}`
    }


    return (
        <Box pt={0} pb={routeIsDashboard() ? 3 : 20}>
            <Center w='full' flexDir={'column'}>
                <Text fontSize={'2xl'} mb={4}>Encuentra tu solución ideal</Text>
                <Input bg={'white'} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='P.ej: Recursos Humanos, Gestión de tareas, Fichajes ' w={{ base: '90%', lg: '60%' }} />
                <Link to={getRoute()} >
                    <Button mt={5} bg={COLORS.primary} color='white' _hover={{ color: 'gray.200', shadow: 'xl' }}>
                        Buscar
                    </Button>
                </Link>
            </Center>
        </Box>
    )
}

export default SoftwareSearcher