import { Box, Text, Center } from "@chakra-ui/react";
import React, { useState, useContext, useEffect } from "react";
import { EmptyCorporateState } from "./empty-state";
import axios from "axios";
import { CorporateProfile } from "../../../components/corporate/corporate-profile";
import { getCorporate } from "../../../services/corporate";

export const ProfileCorporatePage = () => {
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
        <Box mt={6} p={5} rounded={"xl"}  w={"100%"} minH={400}>
            {!corporate ? <EmptyCorporateState refreshCorporate={getMyCorporate} /> : <CorporateProfile corporate={corporate} />}
        </Box>
    )
};
