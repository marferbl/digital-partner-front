import React, { useEffect, useState, useContext } from 'react'
import { getServicesBySolution } from '../../../../services/service'
import ServicesTable from "../../service/services-table"
import { useParams } from "react-router-dom";
import { Box, Text, Flex } from '@chakra-ui/react';
import { getCertificationsBySolution } from '../../../../services/certification';
import { ButtonCreateCertification } from './certifications/button-create-certification';
import { UserContext } from '../../../../context/userContext';
import { useTranslation } from 'react-i18next';

export const CertificationComponent = ({ solution }) => {
    const { id } = useParams();
    const { me } = useContext(UserContext)
    const { t } = useTranslation("global");

    const [certifications, setCertifications] = useState([])

    useEffect(() => {
        getCertifications()
    }, [])

    const getCertifications = () => {
        getCertificationsBySolution(id).then((res) => {
            setCertifications(res.data.certifications)
        }).catch((error) => {
            console.log(error)
        })
    }

    const isAdminWatchingSolution = () => {
        return solution?.corporate?.superadmin?._id === me?._id;
    }

    const ensureHTTPS = (url) => {
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            return `https://${url}`;
        }
        return url;
    };


    return (
        <Box>
            <Flex justify='space-between' align='center' color='white'>
                <Text fontSize='xl' fontWeight='bold'></Text>
                {isAdminWatchingSolution() && <ButtonCreateCertification refreshCertifications={getCertifications} id={id} />}
            </Flex>

            {certifications.length ?
                <Box mt={5}>
                    {
                        certifications.map((certification, index) => {
                            return (
                                <Flex align='center' gap={10} key={index} p={4} border='1px solid' borderColor='gray.200' borderRadius={5}>
                                    <Text fontSize='lg' fontWeight='bold'>{certification.name}</Text>
                                    <Text color={'blue.300'} _hover={{ textDecor: 'underline' }}>
                                        <a href={ensureHTTPS(certification.link)} target='_blank' fontSize='sm'>Ir a la certificación</a>
                                    </Text>
                                </Flex>
                            )
                        }
                        )
                    }
                </Box> :
                <div className='h-80 w-full flex items-center justify-center'>
                    <div className='text-white flex flex-col items-center'>
                        <span className="text-3xl font-bold">
                            {t("common.nothingHere")}
                        </span>
                        <span color='white'> {t("certifications.empty")}</span>
                    </div>
                </div>}
        </Box>

    )
}