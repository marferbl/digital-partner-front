import { Box, Text, Flex } from "@chakra-ui/react";
import React, { useState, useContext, useEffect } from "react";
import { CorporateProfile } from "../../../components/corporate/corporate-profile";
import { getCorporate } from "../../../services/corporate";
import { EmptySolutionsState } from "../../../components/corporate/solutions/empty-solutions";
import { getSolutionsByCorporate } from "../../../services/solution";
import { SolutionsProfile } from "../../../components/corporate/solutions/solutions-profile";
import { ButtonCreateSolution } from "../../../components/corporate/solutions/button-create-solutions";

export const SolutionsCorporatePage = () => {

    const [solutions, setSolutions] = useState([]);

    useEffect(() => {
        getMySolutions();
    }, [])

    const getMySolutions = () => {
        getSolutionsByCorporate().then((res) => {
            setSolutions(res.data.solutions);
        }
        ).catch((error) => {
            console.log(error);
        }
        )

    }

    return (
        <Box mt={6} p={5} rounded={"xl"} bgColor={"black"} w={"100%"} minH={400}>
            {solutions?.length === 0 ? <EmptySolutionsState refreshSolutions={getMySolutions} /> : <SolutionsProfile solutions={solutions} refreshSolutions={getMySolutions} />}
        </Box>
    )
};
