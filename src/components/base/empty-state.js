import { Center } from "@chakra-ui/react";
import React from "react";


export const EmptyState = ({ children }) => {


    return (
        <Center flexDir={'column'} h={130}>
            {children}
        </Center>

    )
};
