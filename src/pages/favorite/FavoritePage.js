import React, { useContext, useEffect, useState } from 'react'
import Navbar from "../../components/base/navbar";
import Searcher from '../../components/searcher/Searcher';
import { UserContext } from '../../context/userContext';
import { Box } from "@chakra-ui/react"
import { useLocation } from "react-router-dom";



const FavoritePage = () => {
    const { isLoggedIn } = useContext(UserContext);
    const location = useLocation();
    const [filters, setFilters] = useState(location?.state?.filters || {})

    useEffect(() => {
        if (location && location.state) {
            const { state } = location;
            const { filters } = state;
            setFilters(filters)
        }
    }, [location])


    const isInPanel = () => {
        return window.location.pathname.includes('private')
    }

    return (
        <>
            {!isInPanel() && <Navbar />}
            <Box mt={6} p={0} rounded={"xl"} bgColor={"white"} w={"100%"} minH='2xl'>
                <Searcher filters={filters} isFavorites={true} />
            </Box>
        </>

    )
}

export default FavoritePage