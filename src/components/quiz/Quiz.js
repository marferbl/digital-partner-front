import { Box, Center, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { COLORS } from '../../colors/colors'
import Question from './Question'
import { useNavigate } from "react-router-dom";


const Quiz = () => {
    const navigate = useNavigate();

    const questionsList = [
        {
            order: 0,
            title: '¿Qué necesitas?',
            options: [
                {
                    label: 'Soluciones',
                    key: 'solutions'

                },
                {
                    label: 'Servicios',
                    key: 'services'
                },
                {
                    label: 'Talento',
                    key: 'talent'
                },
                {
                    label: 'Eventos',
                    key: 'events'
                },
            ]
        },
    ]
    const [questions, setQuestions] = useState(questionsList)
    const [answers, setAnswers] = useState([])

    const QUESTIONS_SOLUTIONS = [
        {
            order: 1,
            title: '¿Qué funcionalidad quieres cubrir?',
            options: [
                { key: 'rrhh', label: 'RRHH' },
                { key: 'sellmarketing', label: 'Ventas y marketing' },
                { key: 'finance', label: 'Finanzas y contabilidad' },
                { key: 'logistics', label: 'Cadena de suministro' },
                { key: 'it', label: 'IT' },
                { key: 'data', label: 'Data' },
                { key: 'law', label: 'legal' },
                { key: 'transversal', label: 'transversal' },
            ]
        },
        {
            order: 2,
            title: '¿Es una solución vertical?',
            options: [
                { key: 'true', label: 'Si' },
                { key: 'false', label: 'No' }
            ]
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
            ]
        }
    ]

    const QUESTION_SOLUTION_VERTICAL = {
        order: 3,
        title: '¿De que sector?',
        options: [
            { key: 'services', label: 'Servicios' },
            { key: 'industry', label: 'Industria' },
            { key: 'firstsector', label: 'Primer sector' },
        ]
    }

    const [currentQuestion, setCurrentQuestion] = useState(questions[0])
    const [option, setOption] = useState('')

    const goToSearch = () => {
        navigate(`/search/${'quiz' || ''}`, { state: { answers } })
    }


    const nextQuestion = (selectedOption) => {
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
        setAnswers([...answers, selectedOption.key])
        if (option === 'solutions' && currentQuestion.order === 4) {
            goToSearch()
        }
    };


    return (
        <Box pt={16} pb={24} w='full' bg={COLORS['secondary.50']} mb={20}>
            <Center flexDir={'column'} px={{ base: 10, lg: 32 }}>
                <Question {...currentQuestion} nextQuestion={nextQuestion} goToSearch={goToSearch} />
            </Center>
        </Box>
    )
}

export default Quiz