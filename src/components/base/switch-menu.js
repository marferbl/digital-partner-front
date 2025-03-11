import { useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { DARK_COLORS } from "../../colors/colors";

export default function SwitchMenu({ options, selected, onChange }) {
    return (
        <HStack spacing={0} bg={DARK_COLORS.darkgray} rounded="3xl" p={1} fontWeight='light'>
            {options.map((option) => (
                <Box
                    key={option.key}
                    as="button"
                    flex="1"
                    w={'fit-content'}
                    p={2}
                    textAlign="center"
                    bg={selected === option.key ? DARK_COLORS.gridyellow: "transparent"}
                    color={selected === option.key ? "black" : "white"}
                    whiteSpace="nowrap"
                    _hover={{ shadow: "xl" }}
                    rounded={selected === option.key ? "3xl" : "none"}
                    fontSize={12}
                    py={3}
                    onClick={() => onChange(option.key)}
                >
                    {option.label}
                </Box>
            ))}
        </HStack>
    );
}
