import React from 'react'
import { Box, Text, Input, Textarea } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import SearchSelectSolutions from "../../../../base/search-select-solutions"
import SearchSelectLanguage from "../../../../base/search-select-language"
import SearchSelectCountries from "../../../../base/search-select-countries"
import SearchSelect from '../../../../base/search-select'




const PartnerModalCreate = ({ onChangeConfig }) => {
    const [languages, setLanguages] = useState(null);
    const [countries, setCountries] = useState(null);
    const [description, setDescription] = useState(null);
    const [partnerType, setPartnerType] = useState([]);
    const [solutionId, setSolutionId] = useState(null);

    const [web, setWeb] = useState('');
    const options = [
        { value: 'implant', label: 'Implantador' },
        { value: 'selling', label: 'Venta' },
        { value: 'training', label: 'Formación' },
    ]

    useEffect(() => {
        onChangeConfig({ languages, countries, description, partnerType, web, solutionId })
    }, [languages, countries, description, partnerType, web, solutionId])


    return (
        <Box>
            <Box>
                <Text fontSize={14} mb={1}>Selecciona de que solución eres implantador</Text>
                <SearchSelectSolutions onChange={(value) => setSolutionId(value)} />
                <Text fontSize={14} mb={1} mt={2}>Selecciona uno o más tipos de servicio</Text>
                <SearchSelect options={options} isMulti onChange={(value) => setPartnerType(value)} />
                <Text fontSize={14} mt={4} mb={1}>Descripción</Text>
                <Textarea
                    borderColor="gray.300"
                    _hover={{
                        borderRadius: "gray.300",
                    }}
                    placeholder="Mensaje"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Text fontSize={14} mt={4} mb={1}>Lenguajes disponibles</Text>
                <SearchSelectLanguage isMulti onChange={(value) => setLanguages(value)} mb={5} />
                <Text fontSize={14} mt={4} mb={1}>Países disponibles</Text>
                <SearchSelectCountries isMulti onChange={(value) => setCountries(value)} mb={5} />
                <Text fontSize={14} mt={4} mb={1}>Web</Text>
                <Input
                    value={web}
                    onChange={(e) => setWeb(e.target.value)}
                    placeholder="www.portfolio.com"
                />
            </Box>
        </Box>
    )
}

export default PartnerModalCreate