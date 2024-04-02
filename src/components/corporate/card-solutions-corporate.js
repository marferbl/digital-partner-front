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
                </EmptyState> : solutions.map((solution) => {
                    return (
                        <Flex key={solution._id} p={2} rounded={"xl"} bgColor={"white"} w={"100%"} justifyContent={"space-between"}>
                            <Link to={`/private/solution/${solution?._id}`}>
                                <Text fontWeight={'bold'} fontSize={14} _hover={{textDecor:'underline'}}>
                                    {solution.name}
                                </Text>
                            </Link>
                        </Flex>
                    )
                })
            }
        </Box>
    )
};
