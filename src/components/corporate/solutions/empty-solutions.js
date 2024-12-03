import { Box, Text, Center } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { ButtonCreateSolution } from "./button-create-solutions";
import { FiTool } from "react-icons/fi";
import { COLORS, DARK_COLORS } from "../../../colors/colors";
import { getCorporate } from "../../../services/corporate";
import { Tooltip } from '@chakra-ui/react'

export const EmptySolutionsState = ({ refreshSolutions }) => {

    const [corporate, setCorporate] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMyCorporate();
    }, [])

    const getMyCorporate = async () => {
        setLoading(true);
        getCorporate().then((res) => {
            setCorporate(res.data.corporate);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }



    return (
        <Center flexDir={'column'} minH={'300'}>
            <FiTool size={70} color={'white'} />
            <Text my={6} fontSize={{ base: 18, md: 24 }} textAlign='center' color={DARK_COLORS.neutral}>
                Todavia no tienes soluciones creadas
            </Text>
            {/* <Tooltip isDisabled={!!corporate} label={'Crea primero una corporate'}> */}
            <Box mb={3}>
                <ButtonCreateSolution refreshSolutions={refreshSolutions} disabled={!corporate} />
            </Box>
            {!corporate && !loading && <Text fontSize={12} color={'white'}>Debes tener una corporate para crear soluciones</Text>}

            {/* </Tooltip> */}
        </Center>

    )
};
