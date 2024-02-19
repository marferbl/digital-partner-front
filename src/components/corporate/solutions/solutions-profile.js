import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Box, Grid, GridItem, Text, Flex } from "@chakra-ui/react";
import { ButtonCreateSolution } from "./button-create-solutions";

export const SolutionsProfile = ({ solutions, refreshSolutions }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };




    return (
        <div>
            <Slider {...settings}>
                {solutions.map((solution, index) => (
                    <div key={index}>
                        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                            <GridItem colSpan={3}>
                                <Flex justify='end'>
                                    <ButtonCreateSolution refreshSolutions={refreshSolutions} />
                                </Flex>
                            </GridItem>
                            <GridItem colSpan={1}>
                                <Box mt={1} rounded={"xl"} bgColor={"white"} w={"100%"} minH={400} px={10}>
                                    <Avatar size="2xl" name={solution.name} src={solution.logo} mb={5} />
                                    <Text fontWeight={'bold'} fontSize={34}>{solution.name}</Text>
                                    <Text fontSize={14} mt={3}>Se dedica a:</Text>
                                    <Text fontSize={18} mt={0}>{solution.description}</Text>
                                    <Text></Text>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={1}>
                                <Box mt={1} p={5} rounded={"xl"} bgColor={"white"} w={"100%"} minH={400} px={10}>
                                    <Text fontSize={18} mt={3}>{solution.type == 'sector' ? 'Solución sectorial' : 'Solucion multisectorial'}</Text>
                                    <Text fontSize={18} mt={3} textDecor='underline'>{solution.website}</Text>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={1}>

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
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", marginRight: "20px", zIndex: 99, }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", marginLeft: "20px", zIndex: 99 }}
            onClick={onClick}
        />
    );
};

