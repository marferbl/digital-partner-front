import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import { IoChevronBack } from "react-icons/io5";
import { getFreelanceById } from "../../services/freelance";
import DigitalProfileDetails from "../../components/digital-profile/digital-profile-details";


const DigitalProfileDetailsPage = () => {
    const [freelance, setFreelance] = useState(null);
    const { isLoggedIn } = useContext(UserContext)

    const { id } = useParams();

    useEffect(() => {
        getFreelance();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        getFreelance();
    }, [id])

    const getFreelance = () => {
        getFreelanceById(id)
            .then((res) => {
                setFreelance(res.data.freelance);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const goBack = () => {
        window.scrollTo(0, 0);
        window.history.back();
    }

    return (
        <Box>
            <Box p={5} bgColor={"black"} w={"100%"} minH={400}>
                <Flex h={8} align={'center'} pr={3} onClick={() => goBack()} cursor={'pointer'} _hover={{ borderBottomWidth: 1 }} w={'fit-content'}>
                    <IoChevronBack size={20} color={'white'} />
                    <Text ml={2} pt={-4} fontSize={16} fontWeight={'bold'} color={'white'}>Volver</Text>
                </Flex>
                {freelance && (
                    <DigitalProfileDetails item={freelance} />
                )}
            </Box>
        </Box>

    )
}

export default DigitalProfileDetailsPage