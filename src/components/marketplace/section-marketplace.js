import { Box, Text, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import CardSoftware from './CardSoftware'

const SectionMarketPlace = ({ title }) => {

    const list = [
        {
            name: 'SAP',
            description: 'Aliquet facilisi dignissim euismod elementum nisl senectus ad, taciti nunc varius ullamcorper cras pharetra lacus, habitasse nascetur velit primis cursus leo. Nullam vivamus porta curae turpis ac orci consequat, enim potenti auctor integer cubilia blandit penatibus litora',
            slogan: 'Hacemos muchas cosas y muchas funcionalidades',
            logo: 'https://proimg.seidor.com/sites/default/files/2021-10/logo_partner_sap_fondo_azul_Mesa%20de%20trabajo%201.jpg'
        },
        {
            name: 'SAP',
            description: 'Aliquet facilisi dignissim euismod elementum nisl senectus ad, taciti nunc varius ullamcorper cras pharetra lacus, habitasse nascetur velit primis cursus leo. Nullam vivamus porta curae turpis ac orci consequat, enim potenti auctor integer cubilia blandit penatibus litora',
            slogan: 'Hacemos muchas cosas y muchas funcionalidades',
            logo: 'https://www.sesamehr.es/wp-content/uploads/2022/01/logo-xxl.png'
        },
        {
            name: 'SAP',
            description: 'Aliquet facilisi dignissim euismod elementum nisl senectus ad, taciti nunc varius ullamcorper cras pharetra lacus, habitasse nascetur velit primis cursus leo. Nullam vivamus porta curae turpis ac orci consequat, enim potenti auctor integer cubilia blandit penatibus litora',
            slogan: 'Hacemos muchas cosas y muchas funcionalidades',
            logo: 'https://inforges.es/wp-content/uploads/2023/03/logo-factorial.png'
        }
    ]




    return (
        <Box mb={10}>
            <Text fontSize={24} mb={6} fontWeight={'bold'}>{title}</Text>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={6}>
                {list.map(item => <GridItem><CardSoftware {...item} /></GridItem>)}
            </Grid>
        </Box>
    )
}

export default SectionMarketPlace