import React from 'react'
import { Box, Text, Input, Textarea, Flex } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import SearchSelectSolutions from "../../../../base/search-select-solutions"
import SearchSelectLanguage from "../../../../base/search-select-language"
import SearchSelectCountries from "../../../../base/search-select-countries"
import SearchSelect from '../../../../base/search-select'
import { HIRING_OPTIONS } from '../../../../../utils/constants'




const PartnerModalCreate = ({ onChangeConfig, type, initialConfig }) => {
    const [languages, setLanguages] = useState(null);
    const [countries, setCountries] = useState(null);
    const [description, setDescription] = useState(null);
    const [partnerType, setPartnerType] = useState([]);
    const [solutionId, setSolutionId] = useState(null);
    const [showOtherSolution, setShowOtherSolution] = useState(false);
    const [otherSolution, setOtherSolution] = useState(null);
    const [title, setTitle] = useState('');
    const [hiring, setHiring] = useState('');

    const [web, setWeb] = useState('');
    const options = [
        { value: 'implant', label: 'Implantador' },
        { value: 'selling', label: 'Venta' },
        { value: 'training', label: 'Formación' },
    ]

    useEffect(() => {
        if (initialConfig) {
            setLanguages(initialConfig.languages)
            setCountries(initialConfig.countries)
            setDescription(initialConfig.description)
            setPartnerType(initialConfig.partnerType)
            setSolutionId(initialConfig.solutionId)
            setOtherSolution(initialConfig.otherSolution)
            setTitle(initialConfig.title)
            setWeb(initialConfig.web)
            setHiring(initialConfig.hiring || '')
        }
    }, [initialConfig])


    useEffect(() => {
        onChangeConfig({ languages, countries, description, partnerType, web, solutionId, otherSolution, title, hiring })
    }, [languages, countries, description, partnerType, web, solutionId, otherSolution, title, hiring])




    return (
        <Box>
            <Box>
                <Text fontSize={14} mt={4} mb={1}>Nombre del servicio</Text>
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="www.portfolio.com"
                />
                {type === 'partner' && < Box >

                    {!showOtherSolution && <Text fontSize={14} mb={1}>Selecciona de que solución eres implantador</Text>}
                    {!showOtherSolution && <SearchSelectSolutions onChange={(value) => setSolutionId(value)} />}
                    <Flex gap={3}>
                        <Text mt={3} fontSize={12}>¿No encuentras la solución? </Text>
                        <Text mt={3} fontSize={12} cursor={'pointer'} color={'blue.500'} onClick={() => setShowOtherSolution(!showOtherSolution)}>{showOtherSolution ? 'Volver a la lista' : 'Añadir a mano'}</Text>
                    </Flex>
                    {showOtherSolution && <Input placeholder="Nombre de la solución" onChange={(e) => setOtherSolution(e.target.value)} />}

                    <Text fontSize={14} mb={1} mt={2}>Selecciona uno o más tipos de servicio</Text>
                    <SearchSelect value={partnerType} options={options} isMulti onChange={(value) => setPartnerType(value)} />
                </Box>}

                <Text fontSize={14} mt={4} mb={1}>Descripción</Text>
                <Textarea
                    value={description}
                    borderColor="gray.300"
                    _hover={{
                        borderRadius: "gray.300",
                    }}
                    placeholder="Mensaje"
                    onChange={(e) => setDescription(e.target.value)}
                />

                <Text fontSize={14} mt={4} mb={1}>Tipo de contratación</Text>
                <SearchSelect
                    value={hiring}
                    options={HIRING_OPTIONS}
                    onChange={(value) => setHiring(value)}
                    placeholder="Selecciona tipo de contratación"
                />

                <Text fontSize={14} mt={4} mb={1}>Lenguajes disponibles</Text>
                <SearchSelectLanguage defaultValue={languages} isMulti onChange={(value) => setLanguages(value)} mb={5} />
                <Text fontSize={14} mt={4} mb={1}>Países disponibles</Text>
                <SearchSelectCountries defaultValue={countries} isMulti onChange={(value) => setCountries(value)} mb={5} />
                <Text fontSize={14} mt={4} mb={1}>Web</Text>
                <Input
                    value={web}
                    onChange={(e) => setWeb(e.target.value)}
                    placeholder="www.portfolio.com"
                />
            </Box>
        </Box >
    )
}

export default PartnerModalCreate