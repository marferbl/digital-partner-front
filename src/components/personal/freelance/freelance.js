import { Box, Text, Center } from "@chakra-ui/react";
import React, { useState, useContext, useEffect } from "react";
import { getFreelance } from "../../../services/freelance";
import { EmptyStateFreelance } from "./empty-state-freelance";
import ProfileView from "./profile-view";

export const FreelanceProfilePage = () => {
    const [meFreelance, setMeFreelance] = useState(null);

    useEffect(() => {
        getMeFreelance();
    }, []);

    const getMeFreelance = async () => {
        try {
            const response = await getFreelance();
            if (response) {
                setMeFreelance(response.data.freelance);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Box mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"} minH={400}>
            {!meFreelance ? <EmptyStateFreelance refreshFreelance={getMeFreelance} corporate={meFreelance} /> : <ProfileView freelance={meFreelance} />}
        </Box>
    )
};
