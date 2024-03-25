import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Text,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { capitalizeFirstLetter } from '../../../utils/methods'
import CountryFlag from '../../base/country-flag'
import GradientButton from '../../base/GradientButton'
import { Link } from 'react-router-dom'


const ServicesTable = ({ services, solutionView }) => {

    const PARTNER_TYPE_KEYS = {
        'selling': 'Venta',
        'implant': 'Implantador',
        'training': 'Formación'
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
                        {solutionView && <Th>Corporate</Th>}
                        <Th>Tipo de servicio</Th>
                        {!solutionView && <Th>Solución</Th>}
                        <Th>Lenguajes</Th>
                        <Th>Países</Th>
                        <Th></Th>

                    </Tr>
                </Thead>
                <Tbody fontSize={12}>
                    {services.map((service) => {
                        return (
                            <Tr key={service._id}>
                                {solutionView && <Td>{service.corporate?.name}</Td>}
                                <Td>{capitalizeFirstLetter(service.serviceType)} {'('} {arrayToSentence(service.partnerType)} {')'}</Td>
                                {!solutionView && <Td>{service.solutionId?.name ||  service.otherSolution}</Td>}
                                <Td>{service?.languages?.map(e => <Text>{e}</Text>)}</Td>
                                <Td fontSize={16}>{service?.countries?.map(e => <CountryFlag country={e} />)}</Td>
                                <Td>
                                    <Link to={`/private/service/${service._id}`}>
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

export default ServicesTable;