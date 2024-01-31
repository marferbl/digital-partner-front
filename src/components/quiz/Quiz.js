import { Box, Center, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { COLORS } from '../../colors/colors'
import Question from './Question'

const Quiz = () => {
    const questions = [
        {
            order: 0,
            title: '¿Que software necesitas?',
            options: [
                {
                    description: 'RRHH'
                },
                {
                    description: 'TECH'
                },
                {
                    description: 'FICHAJES'
                },
                {
                    description: 'TALENTO'
                }]
        },
        {
            order: 1,
            title: '¿Para cuanta gente?',
            options: [
                {
                    description: '<100'
                },
                {
                    description: '100-200'
                },
                {
                    description: '200-500'
                },
                {
                    description: '500-1000'
                }]
        },
    ]
    const [currentQuestion, setCurrentQuestion] = useState(questions[0])

    const nextQuestion = () => {
        setCurrentQuestion(questions[currentQuestion.order + 1])
    }



    return (
        <Box pt={16} pb={24} w='full' bg={COLORS['secondary.50']} mb={20}>
            <Center flexDir={'column'} px={{ base: 10, lg: 32 }}>
                <Question {...currentQuestion} nextQuestion={nextQuestion} />
            </Center>
        </Box>
    )
}

export default Quiz