import { Box, Text, Flex } from "@chakra-ui/react";
import React, { useState, useContext, useEffect } from "react";
import { getSolutionsByCorporate } from "../../services/solution";
import { EmptyState } from "../base/empty-state";
import { Link } from "react-router-dom";
import GradientButton from "../base/GradientButton";

export const CardSolutionsCorporate = () => {

    const [solutions, setSolutions] = useState([]);

    useEffect(() => {
        getMySolutions();
    }, [])

    const getMySolutions = () => {
        getSolutionsByCorporate().then((res) => {
            setSolutions(res.data.solutions);
        }
        ).catch((error) => {
            console.log(error);
        }
        )

    }
    return (
        <Box mt={6} p={2} rounded={"xl"} bgColor={"white"} w={"100%"}>
            {solutions?.length === 0 ?
                <EmptyState>
                    <Text mb={2} textAlign='center'> No tienes ninguna solución creada</Text>
                    <Link to='/private/corporate/solutions'>
                        <GradientButton label='Ir a soluciones' type='red' size={'sm'} />
                    </Link>
                </EmptyState> : <Box>Soluciones</Box>}
        </Box>
    )
};
