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
import { capitalizeFirstLetter } from '../../../utils/methods'
import CountryFlag from '../../base/country-flag'
import GradientButton from '../../base/GradientButton'
import { Link } from 'react-router-dom'
import { FiMoreVertical } from "react-icons/fi";
import { deleteSolution } from '../../../services/solution'
import { ButtonUpdateSolution } from './button-update-solutions'


const SolutionsTable = ({ solutions, refreshSolutions }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const deleteItem = (id) => {
        deleteSolution(id).then(() => {
            refreshSolutions()
        })
    }



    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Nombre</Th>
                        <Th>Web</Th>
                        <Th>ERP</Th>
                        <Th></Th>
                        <Th>Acciones</Th>
                        <Th></Th>


                    </Tr>
                </Thead>
                <Tbody fontSize={12}>
                    {solutions.map((solution) => {
                        return (
                            <Tr key={solution._id}>
                                <Td>{solution.name}</Td>
                                <Td>{solution.website}</Td>
                                <Td>{solution.isErp ? 'SI' : 'NO'}</Td>
                                <Td>
                                    <Link to={`/private/solution/${solution._id}`}>
                                        <GradientButton label={'Detalles'} type='red' size={'sm'} />
                                    </Link>
                                </Td>
                                <Td width={30} textAlign='center'>
                                    <Menu>
                                        <MenuButton rounded={'xl'} p={2} justify={'space-between'} align={'center'} _hover={{ bg: 'gray.100' }}>
                                            <FiMoreVertical size={20} pt={3} />
                                        </MenuButton>
                                        <MenuList width={20} p={0}>
                                            <ButtonUpdateSolution solution={solution} refreshSolutions={refreshSolutions} > <MenuItem _hover={{ bg: 'gray.100' }} h={'full'} fontSize={12} textAlign={'center'} width={'full'} fontWeight={'bold'}>Editar </MenuItem></ButtonUpdateSolution>
                                            <MenuItem onClick={() => deleteItem(solution._id)} _hover={{ bg: 'gray.100' }} h={'full'} fontSize={12} textAlign={'center'} width={'full'} fontWeight={'bold'} color={'red.300'}>Eliminar</MenuItem>
                                        </MenuList>
                                    </Menu>

                                </Td>
                                <Td>

                                </Td>

                            </Tr>
                        )
                    })
                    }
                </Tbody>

            </Table>
        </TableContainer>
    )
}

export default SolutionsTable;