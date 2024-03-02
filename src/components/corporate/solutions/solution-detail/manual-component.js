import React, { useState, useEffect } from 'react'
import { getManualsBySolution } from '../../../../services/manual';
import { useParams } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import { ButtonCreateManual } from './manuals/button-create-manual';
import ManualsTable from './manuals/table-manual';



export const ManualComponent = () => {
    const [manuals, setManuals] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getManuals()
    }, [])

    const getManuals = () => {
        getManualsBySolution(id)
            .then((res) => {
                setManuals(res.data.manuals);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <Box>
            <Flex w='full' justify={'flex-end'} my={8}>
                <ButtonCreateManual refreshManuals={getManuals} />
            </Flex>
          
            <ManualsTable manuals={manuals} />
        </Box>

    )
}