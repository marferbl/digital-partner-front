import React, { useContext } from 'react'
import Navbar from "../../components/base/navbar";
import Searcher from '../../components/searcher/Searcher';
import { UserContext } from '../../context/userContext';
import { Box } from "@chakra-ui/react"


const SearcherPage = () => {
    const { isLoggedIn } = useContext(UserContext);
    return (
        <Box mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"}>
            {!isLoggedIn ? <Navbar /> : null}
            <Searcher />
        </Box>
    )
}

export default SearcherPage