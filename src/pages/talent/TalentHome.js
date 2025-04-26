import React, { useContext, useEffect, useState } from 'react'
import Navbar from "../../components/base/navbar";
import Searcher from '../../components/searcher/Searcher';
import { UserContext } from '../../context/userContext';
import { Box, HStack } from "@chakra-ui/react"
import { useLocation } from "react-router-dom";
import { DARK_COLORS } from '../../colors/colors';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';




const TalentHome = () => {
    const { isLoggedIn } = useContext(UserContext);
    const location = useLocation();
    const [filters, setFilters] = useState(location?.state?.filters || {})
    const [isFavorites, setIsFavorites] = useState(false)
    const [selectedRoute, setSelectedRoute] = useState('talent')
    const { t } = useTranslation()
    const links = [
        {
            label: 'Explorar',
            link: '/search/',
            key: 'explore'
        },
        {
            label: 'Selección',
            link: '/talent',
            key: 'talent'
        }
    ]


    useEffect(() => {
        if (location && location.state) {
            const { state } = location;
            const { filters } = state;
            setFilters(filters)
            const { isFavorites } = state
            setIsFavorites(isFavorites)
        }
    }, [location])


    const isInPanel = () => {
        return window.location.pathname.includes('private')
    }

    return (
        <>
            <Box p={0} rounded={"xl"} bgColor={"gray.100"} w={"100%"}>
                <div className="flex justify-center w-full pt-5">
                    <Box className='w-60'>
                        <HStack as="nav" display={{ base: "none", md: "flex" }} color="black" spacing="0" bg={DARK_COLORS.darkgray} rounded='3xl'>
                            {links.map((link) => (
                                <Box
                                    display={link.hide && !isLoggedIn ? 'none' : 'block'}
                                    key={link.key}
                                    as="button"
                                    flex="1"
                                    w={82}
                                    p={2}
                                    textAlign="center"
                                    bg={selectedRoute === link.key ? DARK_COLORS.gridyellow : 'transparent'}
                                    color={selectedRoute === link.key ? "black" : "white"}
                                    _hover={{ shadow: 'xl' }}
                                    rounded={selectedRoute === link.key ? '3xl' : 'none'}
                                    fontSize={12}
                                    py={3}
                                >
                                    {!link.hide && <Link to={{ pathname: link.link, state: { filter: link.param } }}>{t(link.label)}</Link>}
                                </Box>
                            ))}
                        </HStack>


                    </Box>
                </div>
                Hola
            </Box>
        </>

    )
}

export default TalentHome