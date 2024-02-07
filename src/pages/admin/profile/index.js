import { Box, Text, Center } from "@chakra-ui/react";
import React, { useState, useContext, useEffect } from "react";
import { EmptyCorporateState } from "./empty-state";
import axios from "axios";
import { useBackendUrlBuilder } from "../../../hooks/useBackendUrlBuilder";
import { UserContext } from "../../../context/userContext";
import { CorporateProfile } from "../../../components/corporate/corporate-profile";

export const ProfileCorporatePage = () => {
    const [showEdit, setShowEdit] = useState(false)
    const getMeURL = useBackendUrlBuilder("/corporate/owner");
    const { getToken, userView } = useContext(UserContext);
    const [corporate, setCorporate] = useState(null);

    useEffect(() => {
        getCorporate();
    }, []);

    const getCorporate = async () => {
        const storedToken = getToken();
        axios
            .get(getMeURL, {
                headers: {
                    authorization: `Bearer ${storedToken || ""}`,
                },
            })
            .then((res) => {
                setCorporate(res.data.corporate);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <Box mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"} minH={400}>
            <Text fontSize={22} mb={5} pb={3} borderBottomWidth={1}>Corporate</Text>
            {!corporate ? <EmptyCorporateState refreshCorporate={getCorporate} /> : <CorporateProfile corporate={corporate} />}
        </Box>
    )
};
