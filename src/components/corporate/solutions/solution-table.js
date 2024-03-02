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
} from '@chakra-ui/react'
import { capitalizeFirstLetter } from '../../../utils/methods'
import CountryFlag from '../../base/country-flag'
import GradientButton from '../../base/GradientButton'
import { Link } from 'react-router-dom'
import { FiMoreVertical } from "react-icons/fi";


const SolutionsTable = ({ solutions }) => {

    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                    <Th></Th>
                        <Th>Nombre</Th>
                        <Th>Web</Th>
                        <Th>Descripción</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody fontSize={12}>
                    {solutions.map((solution) => {
                        return (
                            <Tr key={solution._id}>
                                  <Td>
                                    <Button variant={'ghost'}>
                                    <FiMoreVertical size={20} />
                                    </Button>
                                </Td>
                                <Td>{solution.name}</Td>
                                <Td>{solution.website}</Td>
                                <Td>{solution.type == 'sector' ? 'Solución sectorial' : 'Solucion multisectorial'}</Td>
                                <Td>
                                    <Link to={`/private/solution/${solution._id}`}>
                                        <GradientButton label={'Detalles'} type='red' size={'sm'} />
                                    </Link>
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