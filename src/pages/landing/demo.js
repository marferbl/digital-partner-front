import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../components/base/navbar'
import { DemoComponent } from '../../components/corporate/solutions/solution-detail/demo-component'
import { DemoSolution } from '../../components/demo/demosolution'

export const DemoPage = () => {
    return (
        <Box>
            <Navbar />
            <DemoSolution />
        </Box>
    )
}
