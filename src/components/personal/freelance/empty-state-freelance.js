import { Box, Text, Center } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { FiTool } from "react-icons/fi";
import { Tooltip } from '@chakra-ui/react'
import { ButtonCreateFreelance } from "./button-create-freelance";
import { COLORS, DARK_COLORS } from "../../../colors/colors";
import { FiUserCheck } from "react-icons/fi";

export const EmptyStateFreelance = ({ refreshFreelance, corporate }) => {


    return (
        <Center flexDir={'column'} minH={'300'}>
            <FiUserCheck size={70} color={DARK_COLORS.gridyellow} />
            <Text my={6} fontSize={24}>
                No te has dado de alta de freelance
            </Text>
            <Box>
                <ButtonCreateFreelance refreshFreelance={refreshFreelance} disabled={!corporate} />
            </Box>
        </Center>

    )
};
