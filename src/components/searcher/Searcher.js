import React, { useParams } from 'react-router-dom'
import { Box, Heading, Center, Text, GridItem, Grid, Icon, Flex } from '@chakra-ui/react'
import { capitalizeFirstLetter } from '../../utils/methods'
import FiltersSection from './Filters'
import MarketplaceSection from '../base/landing/marketplacesection'
import { useState, useEffect } from 'react'
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { COLORS } from '../../colors/colors';
import GradientButton from '../base/GradientButton'
import { ButtonCompareIA } from '../marketplace/ButtonCompareIa'
import { SoftwareSearcherInput } from '../base/software-searcher-input'
import { useTranslation } from 'react-i18next'


const Searcher = ({ filters, isFavorites }) => {
    const { term } = useParams()
    const [allFilters, setAllFilters] = useState(filters)
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [termLabel, setTermLabel] = useState(term)
    const [numberOfResults, setNumberOfResults] = useState(0)
    const { t } = useTranslation('global')

    useEffect(() => {
        setTermLabel(term)
    }, [term])

    useEffect(() => {
        setIsCollapsed(isFavorites)
    }, [isFavorites])


    const getLabelTerm = () => {
        if (!termLabel) return ''
        return capitalizeFirstLetter(decodeURIComponent(termLabel?.replace(/\+/g, ' ')))
    }

    const updateFilters = (filters) => {
        setAllFilters(filters)
    }


    return (
        <Box p={5}>
            <Text textAlign={'right'} pr={{ base: 2, md: 6 }}> {`${t('showing')} ${numberOfResults} ${t('results')}`}</Text>
            <Center py={3}>
                <SoftwareSearcherInput onChange={setTermLabel} defaultClass='bg-white bg-opacity-40 backdrop-blur-md shadow-md text-sm lg:text-base w-full rounded-full px-4 py-3 pr-10 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
            </Center>
            <Flex justifyContent={'end'} alignItems={'center'} pr={6} pt={4}>
                <ButtonCompareIA />
            </Flex>

            {/* Filters Section */}
            <div className="w-full px-6 mt-5">
                {/* <div className="cursor-pointer flex items-center" onClick={() => setIsCollapsed(!isCollapsed)}>
                    <button class="text-black px-6 py-1 rounded-2xl bg-gray-300">
                        Filtros
                    </button>
                </div> */}
                {/* Grid Layout for Filters and Marketplace */}
                <div className="mt-5 w-full grid grid-cols-1 lg:grid-cols-5 gap-5">
                    {/* Filters Column */}
                    <div className={`col-span-1 ${isCollapsed ? 'opacity-0' : 'opacity-1'}`}>
                        <FiltersSection filters={filters} setTermLabel={setTermLabel} onChangeFilters={updateFilters} />
                    </div>

                    {/* Marketplace Column */}
                    <div className="col-span-1 lg:col-span-4 w-full">
                        <div className="flex flex-col items-center">
                            <MarketplaceSection term={termLabel} filters={allFilters} isCollapsed={isCollapsed} isFavorites={isFavorites} setNumberOfResults={setNumberOfResults} />
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default Searcher