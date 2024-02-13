import React from 'react'
import { CardPanel } from '../base/card-panel'
import { Avatar, Flex, Text } from '@chakra-ui/react'

export const TeamCard = () => {
    const users = [
        { name: 'Dan Abrahmov', src: 'https://bit.ly/dan-abramov' },
        { name: 'Kola Tioluwani', src: 'https://bit.ly/tioluwani-kolawole' },
        { name: 'Kent Dodds', src: 'https://bit.ly/kent-c-dodds' },
        { name: 'Ryan Florence', src: 'https://bit.ly/ryan-florence' },
        { name: 'Prosper Otemuyiwa', src: 'https://bit.ly/prosper-baba' },
        { name: 'Christian Nwamba', src: 'https://bit.ly/code-beast' },
        { name: 'Segun Adebayo', src: 'https://bit.ly/sage-adebayo' },
        { name: 'Segun Adebayo', src: 'https://bit.ly/sage-adebayo' },
        { name: 'Segun Adebayo', src: 'https://bit.ly/sage-adebayo' }

    ];

    return (
        <CardPanel title={'Equipo'}>
            <Flex gap={3} pt={5} flexDir={'column'} overflow={'scroll'}>
                {users.map((user, index) => (
                    <Flex key={index} gap={2}>
                        <Avatar name={user.name} src={user.src} />
                        <Text fontSize={18}>{user.name}</Text>
                    </Flex>
                ))}
            </Flex>
        </CardPanel>
    )
}