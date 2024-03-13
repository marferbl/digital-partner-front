import React, { useContext, useEffect, useState } from 'react'
import Navbar from "../../components/base/navbar";
import Searcher from '../../components/searcher/Searcher';
import { UserContext } from '../../context/userContext';
import { Box } from "@chakra-ui/react"
import { useLocation } from "react-router-dom";



const SearcherPage = () => {
    const { isLoggedIn } = useContext(UserContext);
    const location = useLocation();
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        if (location && location.state) {
            const { state } = location;
            const { answers } = state
            setAnswers(answers)
        }
    }, [location])


    return (
        <>
            {!isLoggedIn ? <Navbar /> : null}
            <Box mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"}>
                <Searcher answers={answers} />
            </Box>
        </>

    )
}

export default SearcherPage