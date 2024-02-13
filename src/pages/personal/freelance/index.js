import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { FreelanceProfilePage } from "../../../components/personal/freelance/freelance";

export const FreelancePage = () => {

    return (
        <Box mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"} minH={400}>
            <Text fontSize={22} mb={5} pb={3} borderBottomWidth={1}>Freelance</Text>
            <FreelanceProfilePage />
        </Box>)
};
