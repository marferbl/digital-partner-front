import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import ManualsTable from '../corporate/solutions/solution-detail/manuals/table-manual'

const Manualsdemo = () => {
    const MANUALS = [
        {
            name: 'Manual de usuario',
            document: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
        },
        {
            name: 'Manual de administrador',
            document: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
        },
        {
            name: 'Manual de descarga de informes',
            document: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
        },

    ]
    return (
        <Box px={{ base: 4, md: 10, lg: 24 }} pt={10} pointerEvents='none'>
            <ManualsTable manuals={MANUALS} />
        </Box>
    )
}

export default Manualsdemo