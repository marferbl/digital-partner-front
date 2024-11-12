import React, { useContext, useEffect, useState } from 'react'
import Navbar from "../../components/base/navbar";
import Searcher from '../../components/searcher/Searcher';
import { UserContext } from '../../context/userContext';
import { Box } from "@chakra-ui/react"
import { useLocation } from "react-router-dom";



const SearcherPage = () => {
    const { isLoggedIn } = useContext(UserContext);
    const location = useLocation();
    const [filters, setFilters] = useState(location?.state?.filters || {})
    const [isFavorites, setIsFavorites] = useState(false)

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
                <Searcher filters={filters} isFavorites={isFavorites} />
            </Box>
        </>

    )
}

export default SearcherPage