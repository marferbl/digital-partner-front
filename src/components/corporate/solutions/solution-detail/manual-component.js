import React, { useState, useEffect, useContext } from 'react'
import { getManualsBySolution } from '../../../../services/manual';
import { useParams } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import { ButtonCreateManual } from './manuals/button-create-manual';
import ManualsTable from './manuals/table-manual';
import { UserContext } from '../../../../context/userContext';


export const ManualComponent = ({ solution }) => {
    const [manuals, setManuals] = useState([]);
    const { id } = useParams();
    const { me } = useContext(UserContext);


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
        <Box color='white'>
            Próximamente
            {/* <Flex w='full' justify={'flex-end'} my={8}>
                {me?.corporateId === solution.corporate && <ButtonCreateManual refreshManuals={getManuals} />}
            </Flex>

            <ManualsTable manuals={manuals} /> */}
        </Box>

    )
}