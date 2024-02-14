import React, { useState, useEffect, useContext } from 'react'
import { Box, Button, Flex, Text, Input, Textarea, } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Select
} from '@chakra-ui/react'
import { createCorporate } from '../../../services/corporate';
import { COLORS } from '../../../colors/colors';
import SkillSelector from "./skills-select"


export const FinancialStep = ({ onChange }) => {


    const [price, setPrice] = useState("");
    const [coin, setCoin] = useState("");
    const [paymentType, setType] = useState("");

    useEffect(() => {
        onChange({ paymentType, coin, price });
    }, [paymentType, coin, price])

    return (

        <Box fontSize={12} display={'flex'} alignItems={'start'} flexDir={'column'}>
            <Text mt={5} fontWeight={"bold"}>
                ¿En qué moneda puedes cobrar?:{" "}
            </Text>
            <Select placeholder='Seleccionar' onChange={(e) => setCoin(e.target.value)}>
                <option value='euro'>Euros €</option>
                <option value='dollar'>Dolares $ </option>
            </Select>
            <Flex justify={'space-between'} gap={2} w={'full'}>
                <Flex flexDir={'column'} w={'35%'} mt={5}>
                    <Text fontWeight={"bold"}>Precio/hora: </Text>
                    <Input type="number" value={price} w={'full'} onChange={(e) => setPrice(e.target.value)} placeholder={'Precio/hora'} />
                </Flex>
                <Flex flexDir={'column'} w={'65%'}>
                    <Text mt={5} fontWeight={"bold"}>
                        Tipo de pago:{" "}
                    </Text>
                    <Select placeholder='Selecciona' onChange={(e) => setType(e.target.value)}>
                        <option value='perHour'>Pago por hora</option>
                        <option value='perDay'>Pago por día</option>
                        <option value='perMonth'>Pago por mes</option>
                    </Select>
                </Flex>
            </Flex>
        </Box>
    )
}
