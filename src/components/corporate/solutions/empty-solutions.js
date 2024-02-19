import { Box, Text, Center } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { ButtonCreateSolution } from "./button-create-solutions";
import { FiTool } from "react-icons/fi";
import { COLORS } from "../../../colors/colors";
import { getCorporate } from "../../../services/corporate";
import { Tooltip } from '@chakra-ui/react'

export const EmptySolutionsState = ({ refreshSolutions }) => {

    const [corporate, setCorporate] = useState(null);

    useEffect(() => {
        getMyCorporate();
    }, [])

    const getMyCorporate = async () => {
        getCorporate().then((res) => {
            setCorporate(res.data.corporate);
        }).catch((err) => {
            console.log(err);
        });
    }



    return (
        <Center flexDir={'column'} minH={'300'}>
            <FiTool size={70} color={COLORS.primary} />
            <Text my={6} fontSize={24}>
                Todavia no tienes soluciones creadas
            </Text>
            <Tooltip isDisabled={!!corporate} label={'Crea primero una corporate'}>
                <Box>
                    <ButtonCreateSolution refreshSolutions={refreshSolutions} disabled={!corporate} />
                </Box>
            </Tooltip>
        </Center>

    )
};
