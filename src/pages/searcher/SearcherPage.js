import React, { useContext, useEffect, useState } from 'react'
import Navbar from "../../components/base/navbar";
import Searcher from '../../components/searcher/Searcher';
import { UserContext } from '../../context/userContext';
import { Box } from "@chakra-ui/react"
import { useLocation } from "react-router-dom";



const SearcherPage = () => {
    const { isLoggedIn } = useContext(UserContext);
    const location = useLocation();
    const [filters, setFilters] = useState({})

    useEffect(() => {
        if (location && location.state) {
            const { state } = location;
            const { filters } = state
            setFilters(filters)
        }
    }, [location])


    return (
        <>
            {!isLoggedIn ? <Navbar /> : null}
            <Box mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"}>
                <Searcher filters={filters} />
            </Box>
        </>

    )
}

export default SearcherPage