import React from 'react';
import {
    Table,
    Thead,
    Tbody,
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
    Text,
} from '@chakra-ui/react';
import { FiMoreVertical } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { deleteEvent } from '../../../services/event'; // Assuming you have an event service
import GradientButton from '../../base/GradientButton';
import CountryFlag from '../../base/country-flag'; // If your events include country data
import { ButtonUpdateEvent } from './button-update-event'; // Assuming you have an update event button

const EventsTable = ({ events, refreshEvents, smallView = false }) => {

    const deleteItem = (id) => {
        deleteEvent(id).then(() => {
            refreshEvents();
        });
    };

    console.log(events)
    return (
        <TableContainer>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Nombre del evento</Th>
                        <Th>Tipo</Th>
                        <Th>Fecha</Th>
                        <Th>Hora</Th>
                        <Th>Aforo</Th>
                        <Th></Th>
                        {!smallView && <Th></Th>}
                    </Tr>
                </Thead>
                <Tbody fontSize={12}>
                    {events.map((event) => {
                        return (
                            <Tr key={event._id}>
                                <Td>{event.name}</Td>
                                <Td>
                                    {event.type?.map((type) => (
                                        <Text key={type}>{type === 'remote' ? 'Remoto' : 'Presencial'}</Text>
                                    ))}
                                </Td>
                                <Td>{new Date(event.date).toLocaleDateString()}</Td>
                                <Td>{new Date(event.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Td>
                                <Td>{event.maximumCapacity}</Td>
                                <Td>
                                    <Link to={`/event/${event._id}`}>
                                        <GradientButton label="Detalles" type="red" size="sm" />
                                    </Link>
                                </Td>
                                {!smallView && (
                                    <Td width={30}>
                                        <Menu>
                                            <MenuButton rounded="xl" p={2} bg="white" justify="space-between" align="center">
                                                <FiMoreVertical size={20} pt={3} />
                                            </MenuButton>
                                            <MenuList width={20} p={0}>
                                                <ButtonUpdateEvent item={event} refreshEvents={refreshEvents}>
                                                    <MenuItem _hover={{ bg: 'gray.100' }} h="full" fontSize={12} textAlign="center" width="full" fontWeight="bold">
                                                        Editar
                                                    </MenuItem>
                                                </ButtonUpdateEvent>
                                                <MenuItem onClick={() => deleteItem(event._id)} _hover={{ bg: 'gray.100' }} h="full" fontSize={12} textAlign="center" width="full" fontWeight="bold">
                                                    Eliminar
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </Td>
                                )}
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default EventsTable;
