import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const LevelIconCounter = ({ label, value, max }) => {

    //this component rendes a label and a number of icons based on the max value

    return (
        <Flex align='center' gap={1}>
            <Text color={'white'}>{label}</Text>
            {[...Array(max)].map((e, i) => {
                return <Image my={1} src={"/logo-d.png"} h={8} opacity={value < i+1 ? '0.5' : '1'} />
            }
            )}
        </Flex>
    )
}

export default LevelIconCounter