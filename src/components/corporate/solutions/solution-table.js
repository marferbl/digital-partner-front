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
                        <Th>Descripción</Th>
                        <Th></Th>
                        <Th></Th>

                    </Tr>
                </Thead>
                <Tbody fontSize={12}>
                    {solutions.map((solution) => {
                        return (
                            <Tr key={solution._id}>
                                <Td>{solution.name}</Td>
                                <Td>{solution.website}</Td>
                                <Td>{solution.type == 'sector' ? 'Solución sectorial' : 'Solucion multisectorial'}</Td>
                                <Td>
                                    <Link to={`/private/solution/${solution._id}`}>
                                        <GradientButton label={'Detalles'} type='red' size={'sm'} />
                                    </Link>
                                </Td>
                                <Td width={30}>
                                    <Menu>
                                        <MenuButton rounded={'xl'} p={2} bg={'white'} justify={'space-between'} align={'center'}>
                                            <FiMoreVertical size={20} pt={3}/>
                                        </MenuButton>
                                        <MenuList width={20} p={0}>
                                            <MenuItem onClick={() => deleteItem(solution._id)} _hover={{ bg: 'gray.100' }} h={'full'} fontSize={12} textAlign={'center'} width={'full'} fontWeight={'bold'}>Eliminar</MenuItem>
                                        </MenuList>
                                    </Menu>
                                    <Button variant={'ghost'}>
                                    </Button>
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