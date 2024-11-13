import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Box, Grid, GridItem, Text, Flex, Button } from "@chakra-ui/react";
import { ButtonCreateSolution } from "./button-create-solutions";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { COLORS } from "../../../colors/colors";
import { Link } from "react-router-dom";
import SolutionsTable from "./solution-table";


export const SolutionsProfile = ({ solutions, refreshSolutions }) => {

    return (
        <div>
            <Flex flexDir={'column'} justify='end' mb={6} pb={4} bg={'black'}>
                <Flex align={'center'} w='full' justify={'space-between'} pb={3}>
                    <Text fontSize={{ base: 16, md: 22 }} color='black'>Soluciones</Text>
                    <ButtonCreateSolution refreshSolutions={refreshSolutions} />
                </Flex>
                <SolutionsTable solutions={solutions} refreshSolutions={refreshSolutions} />
            </Flex>
        </div>
    );
};


