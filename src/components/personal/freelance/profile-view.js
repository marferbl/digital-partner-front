import { Grid, GridItem, Box, Text, Flex } from "@chakra-ui/react";
import { COLORS } from "../../../colors/colors";
import { FiCheckSquare, FiShoppingCart, FiUser } from "react-icons/fi";

const ProfileView = ({ freelance }) => {
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

    return (
        <Grid templateColumns="repeat(3, 1fr)" gap={6} justifyItems={'center'}>
            <GridItem colSpan={1}>
                <Box borderWidth={1} px={3} py={2} rounded={'lg'} w={'fit-content'} borderColor={COLORS.primary}>
                    <Flex align={'center'} justify={'center'} mb={4} borderBottomWidth={1} pb={1}>
                        <FiUser />
                        <Text fontWeight="bold" mx={2} textAlign={'center'} > Personal</Text>
                    </Flex>
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
            </GridItem>
            <GridItem colSpan={1}>
                <Box borderWidth={1} px={3} py={2} rounded={'lg'} w={'fit-content'} borderColor={COLORS.primary} minW={200}>
                    <Flex align={'center'} justify={'center'} mb={4} borderBottomWidth={1} pb={1}>
                        <FiCheckSquare />
                        <Text fontWeight="bold" mx={2} textAlign={'center'} > Habilidades</Text>
                    </Flex>
                    <Box>
                        <Text fontWeight="bold" mr={2}>• Skills:</Text>
                        {skills.map((skill, index) => (
                            <Text key={index}>
                                {skill.name}: Nivel - {skill.level}
                            </Text>
                        ))}
                    </Box>
                    <Box mt={2}>
                        <Text fontWeight="bold" mr={2}>• Idiomas:</Text>
                        {languages.map((language, index) => (
                            <Text key={index}>
                                {language.label}
                            </Text>
                        ))}
                    </Box>
                </Box>
            </GridItem>
            <GridItem colSpan={1}>
                <Box borderWidth={1} px={3} py={2} rounded={'lg'} w={'fit-content'} borderColor={COLORS.primary} minW={200}>
                    <Flex align={'center'} justify={'center'} mb={4} borderBottomWidth={1} pb={1}>
                        <FiShoppingCart />

                        <Text fontWeight="bold" mx={2} textAlign={'center'} > Pricing</Text>
                    </Flex>
                    {/* <Text mt={2} fontWeight="bold" mr={2}>Payment Type:</Text>
                    <Text>{paymentType}</Text> */}
                    <Text mt={2} fontWeight="bold" mr={2}>• Moneda:</Text>
                    <Text>{coin}</Text>
                    <Text mt={2} fontWeight="bold" mr={2}>• Precio/hora:</Text>
                    <Text>{price}</Text>
                </Box>
            </GridItem>
        </Grid>
    );
};

export default ProfileView;
