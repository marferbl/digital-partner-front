import React, { useState, useEffect, useContext } from 'react'
import { Box, Button, Flex, Text, Input, Textarea, } from '@chakra-ui/react'
import {
    Select
} from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react';
import { set } from 'mongoose';



export const FinancialStep = ({ onChange }) => {


    const [price, setPrice] = useState("");
    const [coin, setCoin] = useState("");
    const [paymentType, setType] = useState("");
    const [jobType, setJobType] = useState("");
    const [onlyRemote, setOnlyRemote] = useState(true);
    const [hasSetup, setHasSetup] = useState(false);



    useEffect(() => {
        onChange({ paymentType, coin, price, jobType, onlyRemote, hasSetup });
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
            <Flex flexDir={'column'} w={'65%'}>
                <Text mt={5} fontWeight={"bold"}>
                    Como prefieres trabajar:{" "}
                </Text>
                <Select placeholder='Selecciona' onChange={(e) => setJobType(e.target.value)}>
                    <option value='objectives'>Solo por objetivos</option>
                    <option value='schedules'>Solo con horarios</option>
                    <option value='all'>Ambas</option>
                </Select>
            </Flex>
            <Checkbox
                mt={4}
                isChecked={!onlyRemote}
                onChange={(e => setOnlyRemote(!e.target.checked))}
            >
                <Text fontSize={13}>
                    Estás dispuesto a trabajar presencial
                </Text>
            </Checkbox>
            <Checkbox
                mt={4}
                isChecked={hasSetup}
                onChange={(e => setHasSetup(e.target.checked))}
            >
                <Text fontSize={13}>
                    Tienes los medios necesarios para trabajar remotamente
                </Text>
            </Checkbox>
        </Box>
    )
}
