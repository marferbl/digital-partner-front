import { Box, Text } from "@chakra-ui/react";
import React, { useState, useContext, useEffect } from "react";
import { EmptyServiceState } from "./empty-state";
import axios from "axios";
import { CorporateProfile } from "../../../components/corporate/corporate-profile";
import { getCorporate } from "../../../services/corporate";

export const ServicePage = () => {
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
            <Text fontSize={22} mb={5} pb={3} borderBottomWidth={1}>Corporate</Text>
            {!corporate ? <EmptyServiceState refreshCorporate={getMyCorporate} /> : <CorporateProfile corporate={corporate} />}
        </Box>
    )
};
