import { Grid, GridItem, Box, Text, Flex, Image, Center } from "@chakra-ui/react";
import { COLORS } from "../../../colors/colors";
import { FiCheckSquare, FiShoppingCart, FiUser } from "react-icons/fi";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import { dateToString } from "../../../utils/methods";

const ProfileView = ({ freelance }) => {
    const { me } = useContext(UserContext);
    const {
        country,
        description,
        slogan,
        web,
        telephone,
        paymentType,
        coin,
        price,
        skills,
        languages,
    } = freelance;



    return (<Box>
        <Flex mb={10} mt={-6} pb={4} borderBottomWidth={1}>
            <Image rounded={"100%"} h={24} src={me?.avatar} />
            <Flex px={10} gap={1} flexDir='column'>
                <Text> {me?.name}</Text>
                <Text> {me?.email}</Text>
                <Text> Miembro desde el {dateToString(me?.createdAt)}</Text>

            </Flex>
        </Flex>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} justifyItems={'center'}>
            <GridItem colSpan={1}>
                <Box borderWidth={1} rounded={'lg'} w={'fit-content'} borderColor={'gray.300'} bg={'gray.50'}>
                    <Flex align={'center'} justify={'center'} mb={4} borderBottomWidth={1} py={1} roundedTop={'lg'} bg={'blue.100'}>
                        <FiUser />
                        <Text fontWeight="bold" mx={2} textAlign={'center'} > Personal</Text>
                    </Flex>
                    <Box py={3} px={4}>
                        <Text fontWeight="bold" mr={2}>• País:</Text>
                        <Text>{country}</Text>
                        <Text mt={2} fontWeight="bold" mr={2}>• Descripción:</Text>
                        <Text>{description}</Text>
                        <Text mt={2} fontWeight="bold" mr={2}>• Especialidad:</Text>
                        <Text>{slogan}</Text>
                        <Text mt={2} fontWeight="bold" mr={2}>• Web:</Text>
                        <Text>{web}</Text>
                        <Text mt={2} fontWeight="bold" mr={2}>• Teléfono:</Text>
                        <Text>{telephone}</Text>
                    </Box>
                </Box>
            </GridItem>
            <GridItem colSpan={1}>
                <Box borderWidth={1} rounded={'lg'} w={'fit-content'} borderColor={'gray.300'} minW={200} bg={'gray.50'}>
                    <Flex align={'center'} justify={'center'} mb={4} borderBottomWidth={1} py={1} roundedTop={'lg'} bg={'blue.100'}>
                        <FiCheckSquare />
                        <Text fontWeight="bold" mx={2} textAlign={'center'} > Habilidades</Text>
                    </Flex>
                    <Box px={4} py={2}>
                        <Text fontWeight="bold" mr={2}>• Skills:</Text>
                        {skills.map((skill, index) => (
                            <Text key={index}>
                                {skill.name}: Nivel - {skill.level}
                            </Text>
                        ))}
                    </Box>
                    <Box mt={2} px={3} py={2}>
                        <Text fontWeight="bold" mr={2}>• Idiomas:</Text>
                        {languages.map((language, index) => (
                            <Text key={index}>
                                {language.label}
                            </Text>
                        ))}
                    </Box>
                </Box>
            </GridItem>
            <GridItem>
                <Box borderWidth={1} rounded={'lg'} w={'fit-content'} borderColor={'gray.300'} minW={200} bg={'gray.50'}>
                    <Flex align={'center'} justify={'center'} mb={4} borderBottomWidth={1} py={1} roundedTop={'lg'} bg={'blue.100'}>
                        <FiShoppingCart />
                        <Text fontWeight="bold" mx={2} textAlign={'center'} > Pricing</Text>
                    </Flex>
                    <Box px={4} py={2}>
                        {/* <Text mt={2} fontWeight="bold" mr={2}>Payment Type:</Text>
                    <Text>{paymentType}</Text> */}
                        <Text fontWeight="bold" mr={2}>• Moneda:</Text>
                        <Text>{coin}</Text>
                        <Text mt={2} fontWeight="bold" mr={2}>• Precio/hora:</Text>
                        <Text>{price} €</Text>
                    </Box>
                </Box>
            </GridItem>
        </Grid>
    </Box>

    );
};

export default ProfileView;
