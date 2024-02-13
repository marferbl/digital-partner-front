import { Box, Text, Center } from "@chakra-ui/react";
import React, { useState, useContext, useEffect } from "react";
import { EmptyStateFreelance } from "./empty-state-freelance";
import { getCorporate } from "../../../services/corporate";

export const FreelanceProfilePage = () => {
    const [corporate, setCorporate] = useState(null);

    useEffect(() => {
        getMyCorporate();
    }, []);

    const getMyCorporate = async () => {
        getCorporate().then((res) => {
            setCorporate(res.data.corporate);
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <Box mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"} minH={400}>
            {corporate ? <EmptyStateFreelance refreshCorporate={getMyCorporate} corporate={corporate} /> : <>Hola</>}
        </Box>
    )
};
