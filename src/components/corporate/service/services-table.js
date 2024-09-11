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
import { capitalizeFirstLetter, languageLabelFromValue } from '../../../utils/methods'
import CountryFlag from '../../base/country-flag'
import GradientButton from '../../base/GradientButton'
import { Link } from 'react-router-dom'
import { deleteService } from '../../../services/service'
import { FiMoreVertical } from "react-icons/fi";
import { ButtonUpdateService } from './button-update-service'



const ServicesTable = ({ services, solutionView, refreshServices }) => {

    const PARTNER_TYPE_KEYS = {
        'selling': 'Venta',
        'implant': 'Implantador',
        'training': 'Formación'
    }

    const getLabelText = (item) => {
        if (item.title) {
            return item.title;
        }
        const label = {
            'partner': 'Partner de ' + (item.solutionId?.name || item.otherSolution),
            'development': 'Desarrollo por ' + item.corporate?.name,
            'renting': 'Renting por ' + item.corporate?.name,
            'training': 'Training por' + item.corporate?.name,
            'helps': 'Ayudas por ' + item.corporate?.name,
        }
        return label[item.serviceType];
    }


    const deleteItem = (id) => {
        deleteService(id).then(() => {
            refreshServices()
        }
        )
    }

    const arrayToSentence = (array) => {
        if (array.length === 1) {
            return PARTNER_TYPE_KEYS[array[0]]
        }
        if (array.length === 2) {
            return `${PARTNER_TYPE_KEYS[array[0]]} y ${PARTNER_TYPE_KEYS[array[1]]}`
        }
        if (array.length > 2) {
            return `${PARTNER_TYPE_KEYS[array[0]]}, ${PARTNER_TYPE_KEYS[array[1]]} y ${PARTNER_TYPE_KEYS[array[1]]} más`
        }
    }

    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Corporate</Th>
                        <Th>Nombre</Th>
                        <Th>Tipo de servicio</Th>
                        <Th>Lenguajes</Th>
                        <Th>Países</Th>
                        <Th></Th>
                        <Th></Th>

                    </Tr>
                </Thead>
                <Tbody fontSize={12}>
                    {services.map((service) => {
                        return (
                            <Tr key={service._id}>
                                <Td>{service.corporate?.name}</Td>
                                <Td>{getLabelText(service)}</Td>

                                <Td>{capitalizeFirstLetter(service.serviceType)} {service.serviceType === 'partner' && <Text as={'span'}> {'('} {arrayToSentence(service.partnerType)} {')'} </Text>}</Td>
                                <Td>{service?.languages?.map(e => <Text>{languageLabelFromValue(e)}</Text>)}</Td>
                                <Td fontSize={16}>{service?.countries?.map(e => <CountryFlag country={e} />)}</Td>
                                <Td>
                                    <Link to={`/private/service/${service._id}`}>
                                        <GradientButton label={'Detalles'} type='red' size={'sm'} />
                                    </Link>
                                </Td>
                                <Td width={30}>
                                    <Menu>
                                        <MenuButton rounded={'xl'} p={2} bg={'white'} justify={'space-between'} align={'center'}>
                                            <FiMoreVertical size={20} pt={3} />
                                        </MenuButton>
                                        <MenuList width={20} p={0}>
                                            <ButtonUpdateService  item={service} refreshServices={refreshServices}> <MenuItem hover={{ bg: 'gray.100' }} h={'full'} fontSize={12} textAlign={'center'} width={'full'} fontWeight={'bold'}> Editar</MenuItem></ButtonUpdateService>
                                            <MenuItem onClick={() => deleteItem(service._id)} _hover={{ bg: 'gray.100' }} h={'full'} fontSize={12} textAlign={'center'} width={'full'} fontWeight={'bold'}>Eliminar</MenuItem>
                                        </MenuList>
                                    </Menu>
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

export default ServicesTable;