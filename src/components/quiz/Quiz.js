import { Box, Button, Center, Flex, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { COLORS } from '../../colors/colors'
import Question from './Question'
import { useNavigate } from "react-router-dom";
import {
    FiUsers,
    FiTool,
    FiRepeat,
    FiCalendar,
} from "react-icons/fi";
import SolutionsQuiz from './SolutionsQuiz';
import SearchSelectCountries from '../base/search-select-countries';
import SearchSelectLanguage from '../base/search-select-language';
import GradientButton from '../base/GradientButton';
import LoadingSpinner from '../base/LoadingSpinner';
import SearchSelect from '../base/search-select';

// Importa useTranslation de react-i18next
import { useTranslation } from 'react-i18next';

const Quiz = () => {
    const { t } = useTranslation("global");  // Inicializa la traducción
    const navigate = useNavigate();

    const questionsList = [
        {
            order: 0,
            title: t('whatAreYouLookingFor'),  // Usando la instancia de traducción
            options: [
                {
                    label: t('solutions'),  // Usando la instancia de traducción
                    key: 'solutions',
                    icon: FiTool
                },
                {
                    label: t('services'),  // Usando la instancia de traducción
                    key: 'services',
                    icon: FiRepeat
                },
                {
                    label: t('talent'),  // Usando la instancia de traducción
                    key: 'talent',
                    icon: FiUsers
                },
                {
                    label: t('events'),  // Usando la instancia de traducción
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

    const serviceTypeOptions = [
        { value: 'partner', label: t('serviceTypeOptions.partner') },
        { value: 'development', label: t('serviceTypeOptions.development') },
        { value: 'renting', label: t('serviceTypeOptions.renting') },
        { value: 'helps', label: t('serviceTypeOptions.helps') },
        { value: 'training', label: t('serviceTypeOptions.training') },
    ];

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

    const setFiltersInAnswers = (value, key, avoidArray = false) => {
        const array = typeof value === 'string' && !avoidArray ? [value] : value
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
                {order > 0 && <Flex w='full' justify={'end'} mt={-3} pr={5} pt={3} _hover={{ fontWeight: 'bold' }} cursor='pointer' onClick={startTest}>{t('startOver')}</Flex>}
                <Center pt={12} flexDir={'column'} px={{ base: 10, lg: 32 }}>
                    {order === 0 && <Question currentQuestion={questions[0]} setLineType={setLineType} nextQuestion={nextQuestion} goToSearch={goToSearch} />}
                    {(order > 0 && order < 3 && lineType === 'solutions') && <SolutionsQuiz order={order} nextQuestion={nextQuestion} setOrder={setOrder} updateConfig={updateConfig} />}
                    {order === 1 && lineType !== 'solutions' && <Box w={400}>
                        <Text>{t('serviceTypeQuestion')}</Text>
                        <SearchSelect options={serviceTypeOptions} width={'100%'} label={t('type')} onChange={(value) => setFiltersInAnswers(value, 'serviceType', true)} value={answers.serviceType} />
                        <Flex justify={'end'} mt={10} cursor='pointer'>
                            <GradientButton label={t('next')} type='green' size={'md'} onClick={nextQuestion} />

                        </Flex>
                    </Box>}
                    {((order === 3 && lineType === 'solutions') || (order === 2 && lineType !== 'solutions')) && <Box>
                        <Text>{t('countriesAvailabilityQuestion')}</Text>
                        <SearchSelectCountries isMulti onChange={value => setFiltersInAnswers(value, 'countries')} />
                        <Text>{t('languagesAvailabilityQuestion')}</Text>
                        <SearchSelectLanguage isMulti onChange={value => setFiltersInAnswers(value, 'languages')} />
                        <GradientButton onClick={goToSearch} type='green' label={t('surpriseMeButton')} w='full' mt={5} />
                    </Box>}
                </Center>
            </Box>
                : <Center minH={300} w='full' bg={'gray.50'}>
                    <LoadingSpinner label={t('loadingLabel')} />
                </Center>
            }
        </Box>
    )
}

export default Quiz
