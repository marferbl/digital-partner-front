import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Box, Grid, GridItem, Text, Flex, Button } from "@chakra-ui/react";
import { ButtonCreateSolution } from "./button-create-solutions";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { COLORS } from "../../../colors/colors";
import { Link } from "react-router-dom";


export const SolutionsProfile = ({ solutions, refreshSolutions }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
    };




    return (
        <div>
            <Flex justify='end' mb={6} pb={4}>
                <ButtonCreateSolution refreshSolutions={refreshSolutions} />
            </Flex>
            <Slider {...settings}>
                {solutions.map((solution, index) => (
                    <div key={index}>
                        <Grid templateColumns="repeat(1, 1fr)" gap={6}>
                            <GridItem colSpan={1}>
                                <Flex textAlign={'center'} flexDir='column' alignItems={'center'} mt={1} rounded={"xl"} bgColor={"white"} w={"100%"} minH={400} px={10}>
                                    <Avatar size="2xl" name={solution.name} src={solution.logo} mb={5} />
                                    <Text mb={5}> {solution.website} </Text>
                                    <Button
                                        variant="solid"
                                        bg={COLORS.primary}
                                        color="white"
                                        _hover={{ bg: 'blue.700' }}
                                    >
                                        <Link to={`/private/solution/${solution._id}`}><Text fontWeight={'bold'} fontSize={14}>{'Ir a detalles'}</Text></Link>
                                    </Button>
                                </Flex>


                            </GridItem>
                        </Grid>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <Box
            style={{ ...style, zIndex: 99, position: 'absolute', bottom: 0, left: '52%', cursor: 'pointer' }}
            onClick={onClick}
            p={1}
            rounded={"xl"}
            borderWidth={1}
            _hover={{ bg: 'gray.200' }}
        >
            <FaChevronRight size={30} color={COLORS.primary} />
        </Box>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <Box
            style={{ ...style, zIndex: 99, position: 'absolute', bottom: 0, left: '46%', cursor: 'pointer' }}
            onClick={onClick}
            p={1}
            rounded={"xl"}
            borderWidth={1}
            _hover={{ bg: 'gray.200' }}
        >
            <FaChevronLeft size={30} color={COLORS.primary} />
        </Box>
    );
};

