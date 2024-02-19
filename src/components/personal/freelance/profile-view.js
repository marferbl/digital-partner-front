import { Grid, GridItem, Box, Text, Flex, Image, Center, Progress, Checkbox } from "@chakra-ui/react";
import { COLORS } from "../../../colors/colors";
import { FiCheckSquare, FiShoppingCart, FiUser } from "react-icons/fi";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import { capitalizeFirstLetter, dateToString } from "../../../utils/methods";

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
        onlyRemote,
        hasSetup,
        study,
    } = freelance;

    const getValueProgress = (value) => {
        return (Number(value) * 100) / 5;
    }




    return (<Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} justifyItems={'center'}>
            <GridItem colSpan={1} borderWidth={1} rounded={'md'} shadow={'xl'}>
                <Flex pb={4} flexDir='column' align={'center'} pt={3}>
                    <Image rounded={"100%"} h={28} w={28} src={me?.avatar} />
                    <Flex px={10} gap={1} flexDir='column' textAlign={'center'} >
                        <Text mt={2} fontSize={20} fontWeight='bold'> {capitalizeFirstLetter(me?.name)}</Text>
                        <Text mt={2} fontStyle='italic'>{slogan}</Text>

                        <Text fontSize={12}> Miembro desde el {dateToString(me?.createdAt)}</Text>

                    </Flex>
                </Flex>
                <Box px={3}>
                    <Box rounded={'lg'} w={'full'} mb={3}>
                        <Box py={3} px={4}>
                            <Text fontWeight="bold" mr={2}> País:</Text>
                            <Text>{country}</Text>

                            <Text mt={2} fontWeight="bold" mr={2}> Web:</Text>
                            <Text>{web}</Text>
                            <Text mt={2} fontWeight="bold" mr={2}> Teléfono:</Text>
                            <Text>{telephone}</Text>
                            <Text mt={2} fontWeight="bold" mr={2}> Formación:</Text>
                            <Text>Ingeniería infomática - 2020</Text>
                        </Box>
                    </Box>
                </Box>
            </GridItem>
            <GridItem colSpan={1}>
                <Box colSpan={1} shadow='lg' borderWidth={1} rounded={'lg'} p={4}>
                    <Text my={2} fontWeight="bold" mr={2}> Bio:</Text>
                    <Text>{description}</Text>
                </Box>
                <Box colSpan={1} shadow='lg' borderWidth={1} rounded={'lg'} p={4} mt={3}>
                    <Checkbox
                        mt={4}
                        isChecked={onlyRemote}
                    >
                        <Text fontSize={13}>
                            Solo trabajos remotos
                        </Text>
                    </Checkbox>
                    <Checkbox
                        mt={4}
                        isChecked={true}
                    >
                        <Text fontSize={13}>
                            Tiene los medios necesarios para trabajar remotamente
                        </Text>
                    </Checkbox>
                </Box>

                <Box colSpan={1} shadow='lg' borderWidth={1} rounded={'lg'} p={4} mt={3}>
                    <Text fontWeight="bold" mr={2}>• Moneda:</Text>
                    <Text>{capitalizeFirstLetter(coin)} {coin === 'dollar' ? '$' : '€'}  </Text>
                    <Text mt={2} fontWeight="bold" mr={2}>• Precio/hora:</Text>
                    <Text>{price} {coin === 'dollar' ? '$' : '€'}</Text>
                </Box>
            </GridItem>
            <GridItem w='full'>
                <Box colSpan={1} shadow='lg' borderWidth={1} rounded={'lg'} p={4} w='full'>
                    <Box py={2} w='full'>
                        <Text fontWeight="bold" mr={2} mb={1}>Skills:</Text>
                        {skills.map((skill, index) => (
                            <Box key={index}>
                                <Text key={index} fontSize={12}>
                                    {skill.name}
                                </Text>
                                <Progress size='sm' value={getValueProgress(skill.level)} />
                            </Box>
                        ))}
                    </Box>

                </Box>
                <Box colSpan={1} shadow='lg' borderWidth={1} rounded={'lg'} p={4} w='full' mt={2}>
                    <Text fontWeight="bold" mr={2}> Idiomas:</Text>
                    {languages.map((language, index) => (
                        <Text key={index}>
                            {language.label}
                        </Text>
                    ))}
                </Box>
            </GridItem>
        </Grid>
    </Box >

    );
};

export default ProfileView;
