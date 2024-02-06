import { Flex, Button, Center, Text } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { COLORS } from '../../colors/colors'
import { Link } from "react-router-dom"
import { useContext, useState } from 'react'
import { UserContext } from '../../context/userContext'


export const SoftwareSearcherInput = () => {
    const { isLoggedIn } = useContext(UserContext);

    const [searchTerm, setSearchTerm] = useState('')


    const isInPanel = () => {
        return window.location.pathname.includes('private')
    }

    const getRoute = () => {
        return isInPanel ? `/private/search/${searchTerm}` : `/search/${searchTerm}`
    }


    return (
        <Flex align={'center'} justify={'center'} gap={3}>
            <Input bg={'white'} w={400} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='¿Qué buscas? La IA te ayuda :)...' />
            <Link to={getRoute()} >
                <Button size={'sm'} bg={COLORS.primary} color='white' _hover={{ color: 'gray.200', shadow: 'xl' }}>
                    Buscar
                </Button>
            </Link>
        </Flex>
    )
}
