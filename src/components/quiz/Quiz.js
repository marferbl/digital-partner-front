import { Box, Center, Flex } from '@chakra-ui/react'
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

    const QUESTIONS_SOLUTIONS = [
        {
            order: 1,
            title: '¿Qué funcionalidad quieres cubrir?',
            options: [
                { key: 'finance', label: 'Finanzas y contabilidad' },
                { key: 'sellmarketing', label: 'Ventas y marketing' },
                { key: 'logistics', label: 'Cadena de suministro' },
                { key: 'rrhh', label: 'RRHH' },
                { key: 'it', label: 'IT' },
                { key: 'data', label: 'Data' },
                { key: 'law', label: 'Legal' },
                { key: 'transversal', label: 'Transversal' },
            ],
            id: 'feature'
        },
        {
            order: 2,
            title: '¿Buscas una solución sectorial?',
            options: [
                { key: 'true', label: 'Si' },
                { key: 'false', label: 'No' }
            ],
            id: 'isVertical'
        },
        {
            order: 4,
            title: '¿Para cuanta gente?',
            options: [
                { key: 'below5', label: '< 5' },
                { key: '5to20', label: '5 - 20' },
                { key: '21to50', label: '21 - 50' },
                { key: '51to100', label: '51 - 100' },
                { key: '101to500', label: '101-500' },
                {
                    key: 'above500', label: '> 500'
                }
            ],
            id: 'size'
        }
    ]

    const startTest = () => {
        setAnswers([])
        setQuestions(questionsList)
        setCurrentQuestion(questions[0])
    }

    const QUESTION_SOLUTION_VERTICAL = {
        order: 3,
        title: '¿De que sector?',
        options: [
            { key: 'services', label: 'Servicios' },
            { key: 'industry', label: 'Industria' },
            { key: 'firstsector', label: 'Primer sector' },
        ],
        id: 'sector'
    }

    const [currentQuestion, setCurrentQuestion] = useState(questions[0])
    const [option, setOption] = useState('')

    const goToSearch = () => {
        navigate(`/search/${''}`, { state: { filters: answers } })
    }

    useEffect(() => {
        if (['services', 'events', 'talent'].includes(answers.lineType)) {
            goToSearch()
        }
    }, [answers]);


    const nextQuestion = (selectedOption) => {

        if (['services', 'events', 'talent'].includes(answers.lineType)) {
            return;
        }

        setAnswers({ ...answers, [currentQuestion.id]: selectedOption.key });

        if (currentQuestion.order === 0) {
            setOption(selectedOption.key);
        }
        let newQuestions = [...questions];
        if (selectedOption.key === 'solutions' && currentQuestion.order === 0) {
            newQuestions = [...questions, ...QUESTIONS_SOLUTIONS];
            setQuestions(newQuestions);
            setCurrentQuestion(newQuestions[currentQuestion.order + 1]);
        }
        else if (selectedOption.key === 'true' && currentQuestion.order === 2) {
            const newQuestions = [...questions];
            newQuestions.splice(3, 0, QUESTION_SOLUTION_VERTICAL);
            setQuestions(newQuestions);
            setCurrentQuestion(newQuestions[currentQuestion.order + 1]);
        }
        else {
            setCurrentQuestion(newQuestions[currentQuestion.order + 1]);
        }
        if (option === 'solutions' && currentQuestion.order === 4) {
            goToSearch()
        }
    };


    return (
        <Box pb={14} w='full' bg={'gray.50'} mb={20}>
            <Flex w='full' justify={'end'} mt={-3} pr={5} pt={3} _hover={{ fontWeight: 'bold' }} cursor='pointer' onClick={startTest}>Volver a empezar</Flex>
            <Center pt={12} flexDir={'column'} px={{ base: 10, lg: 32 }}>
                <Question {...currentQuestion} nextQuestion={nextQuestion} goToSearch={goToSearch} />
            </Center>
        </Box>
    )
}

export default Quiz