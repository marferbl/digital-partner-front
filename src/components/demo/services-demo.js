import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Text,
    Tr,
    Th,
    Td,
    Button,
    TableContainer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
} from '@chakra-ui/react'
import CountryFlag from '../base/country-flag'
import GradientButton from '../base/GradientButton'
import { FiMoreVertical } from "react-icons/fi";



const ServicesTableDemo = ({ }) => {

    return (
        <TableContainer p={6}>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Corporate</Th>
                        <Th>Tipo de servicio</Th>
                        <Th>Lenguajes</Th>
                        <Th>Países</Th>
                        <Th></Th>
                        <Th></Th>

                    </Tr>
                </Thead>
                <Tbody fontSize={12}>
                    <Tr>
                        <Td>Servicio de Partner</Td>
                        <Td><Text>Implantación y formación</Text></Td>
                        <Td>{'Español, Inglés, Italiano y Frances'}</Td>
                        <Td fontSize={16}>
                            <CountryFlag country={'spain'} />
                            <CountryFlag country={'italy'} />
                            <CountryFlag country={'frances'} />
                        </Td>
                        <Td>
                            <GradientButton label={'Detalles'} type='red' size={'sm'} />
                        </Td>
                        <Td width={30}>
                            <Menu>
                                <MenuButton rounded={'xl'} p={2} bg={'white'} justify={'space-between'} align={'center'}>
                                    <FiMoreVertical size={20} pt={3} />
                                </MenuButton>
                            </Menu>
                        </Td>
                    </Tr>

                </Tbody>

            </Table>
        </TableContainer>
    )
}

export default ServicesTableDemo;