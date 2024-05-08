import { Box, Button, Center, Flex, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { COLORS } from '../../colors/colors'
import Question from './Question'
import { useNavigate } from "react-router-dom";
import {
    FiHome,
    FiTrendingUp,
    FiUsers,
    FiStar,
    FiDatabase,
    FiUser,
    FiMenu,
    FiTool,
    FiRepeat,
    FiBookOpen,
    FiCalendar,
    FiSearch
} from "react-icons/fi";
import { SPECIFY_FEATURES } from '../../utils/constants';
import SearchSelectSpecifyFeatures from '../base/search-select-specify-features';
import SolutionsQuiz from './SolutionsQuiz';
import SearchSelectCountries from '../base/search-select-countries';
import SearchSelectLanguage from '../base/search-select-language';
import GradientButton from '../base/GradientButton';
import LoadingSpinner from '../base/LoadingSpinner';


const Quiz = () => {
    const navigate = useNavigate();

    const questionsList = [
        {
            order: 0,
            title: '¿Qué buscas?',
            options: [
                {
                    label: 'Soluciones',
                    key: 'solutions',
                    icon: FiTool

                },
                {
                    label: 'Servicios',
                    key: 'services',
                    icon: FiRepeat
                },
                {
                    label: 'Talento',
                    key: 'talent',
                    icon: FiUsers
                },
                {
                    label: 'Eventos',
                    key: 'events',
                    icon: FiCalendar
                },
            ],
            id: 'lineType'
        },
    ]
    const [questions, setQuestions] = useState(questionsList)
    const [answers, setAnswers] = useState([])
    const [order, setOrder] = useState(0)
    const [lineType, setLineType] = useState('solutions')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setAnswers({ ...answers, lineType: lineType })
    }, [lineType])



    const startTest = () => {
        setAnswers([])
        setQuestions(questionsList)
        setOrder(0)
    }

    const goToSearch = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            navigate(`/search/${''}`, { state: { filters: answers } })
        }, 2500)
    }

    const setFiltersInAnswers = (value, key) => {
        const array = typeof value === 'string' ? [value] : value
        setAnswers({ ...answers, lineType: lineType, [key]: array })
    }

    const nextQuestion = () => {
        if (order === 0) {
            setAnswers({ ...answers, lineType })
        }
        setOrder(order + 1)
    };

    const updateConfig = (config) => {
        setAnswers({ ...answers, ...config })
    }

    return (
        <Box pb={14} w='full' bg={'gray.50'} mb={20}>
            {!loading ? <Box>
                {order > 0 && <Flex w='full' justify={'end'} mt={-3} pr={5} pt={3} _hover={{ fontWeight: 'bold' }} cursor='pointer' onClick={startTest}>Volver a empezar</Flex>}
                <Center pt={12} flexDir={'column'} px={{ base: 10, lg: 32 }}>
                    {order === 0 && <Question currentQuestion={questions[0]} setLineType={setLineType} nextQuestion={nextQuestion} goToSearch={goToSearch} />}
                    {(order > 0 && order < 3 && lineType === 'solutions') && <SolutionsQuiz order={order} nextQuestion={nextQuestion} setOrder={setOrder} updateConfig={updateConfig} />}
                    {((order === 3 && lineType === 'solutions') || (order === 1 && lineType !== 'solutions')) && <Box>
                        <Text>¿En qué países quieres que esté disponible?</Text>
                        <SearchSelectCountries isMulti onChange={value => setFiltersInAnswers(value, 'countries')} />
                        <Text>¿En qué idiomas quieres que esté disponible? </Text>
                        <SearchSelectLanguage isMulti onChange={value => setFiltersInAnswers(value, 'languages')} />
                        <GradientButton onClick={goToSearch} type='green' label={'Sorpréndeme'} w='full' mt={5} />
                    </Box>}
                </Center>
            </Box>
                : <Center minH={300} w='full' bg={'gray.50'}>
                    <LoadingSpinner label={'Digitalando...'} />
                </Center>
            }
        </Box>
    )
}

export default Quiz