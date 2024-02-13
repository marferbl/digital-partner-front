import { Box, Text, Center } from "@chakra-ui/react";
import React, { useState, useContext, useEffect } from "react";
import { CorporateProfile } from "../../../components/corporate/corporate-profile";
import { getCorporate } from "../../../services/corporate";
import { EmptySolutionsState } from "../../../components/corporate/solutions/empty-solutions";

export const SolutionsCorporatePage = () => {
    const [solutions, setSolutions] = useState(null);

    useEffect(() => {
        getMySolutions();
    }, []);

    const getMySolutions = async () => {
        getCorporate().then((res) => {
            setSolutions(res.data.corporate);
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <Box mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"} minH={400}>
            <Text fontSize={22} mb={5} pb={3} borderBottomWidth={1}>Soluciones digitales</Text>
            {true ? <EmptySolutionsState refreshCorporate={getMySolutions} /> : <CorporateProfile solutions={solutions} />}
        </Box>
    )
};
