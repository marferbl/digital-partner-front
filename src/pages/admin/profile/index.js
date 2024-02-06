import { Box, Text, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import { ButtonCreateCorporate } from "../../../components/corporate/button-create-corporate";
import { EmptyCorporateState } from "./empty-state";

export const ProfileCorporatePage = () => {
    const [showEdit, setShowEdit] = useState(false)

    const toggleShowEdit = () => {
        setShowEdit(!showEdit)
    }

    return (
        <Box mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"} minH={400}>
            <Text fontSize={22} mb={5} pb={3} borderBottomWidth={1}>Corporate</Text>
            {true ? <EmptyCorporateState /> : <Center> <Text>List</Text> </Center>}
        </Box>
    )
};
