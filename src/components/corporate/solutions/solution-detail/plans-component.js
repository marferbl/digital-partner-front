import React, { useEffect, useState, useContext } from 'react'
import { useParams } from "react-router-dom";
import { Box, Text, Flex, SimpleGrid, Heading, Stack, Badge } from '@chakra-ui/react';
import { getEntityPlansByEntityId } from '../../../../services/entity-plan';
import { ButtonCreateEntityPlan } from '../../../entity-plan/button-create-entity-plan';
import { UserContext } from '../../../../context/userContext';
import { useTranslation } from 'react-i18next';

export const PlansComponent = ({ entity }) => {
    const { id } = useParams();
    const { me } = useContext(UserContext)
    const { t } = useTranslation('global')

    const [plans, setPlans] = useState([])


    useEffect(() => {
        getPlans()
    }, [])

    const getPlans = () => {
        const model = entity.lineType === 'solutions' ? 'solution' : 'service'
        getEntityPlansByEntityId(entity._id, model).then((res) => {
            setPlans(res.data.entityPlans)
        }).catch((error) => {
            console.log(error)
        })
    }

    const isAdminWatchingSolution = () => {
        return entity?.corporate?.superadmin?._id === me?._id;
    }
    console.log(plans)
    return (
        <Box>
            <Flex justify='space-between' align='center' color='white'>
                <Text fontSize='xl' fontWeight='bold'></Text>
                {isAdminWatchingSolution() && <ButtonCreateEntityPlan refreshEntityPlans={getPlans} entity={entity} />}
            </Flex>

            {plans.length ?
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mt={5}>
                    {
                        plans.map((plan, index) => {
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-lg transition-transform duration-200 hover:scale-102 hover:shadow-xl"
                                >
                                    <div className={`${plan.color} rounded-t-xl p-4`}>
                                        <Heading size="md" color="white">{plan.name}</Heading>
                                    </div>
                                    <div className="p-6">
                                        <Stack spacing={4}>
                                            <Text fontSize="md" color="gray.600">{plan.description}</Text>
                                            <Flex align={'baseline'} gap={3}>
                                                <Badge colorScheme="green" fontSize="lg" px={3} py={1} borderRadius="full">
                                                    ${plan.price}
                                                </Badge>
                                                <Badge colorScheme='gray' fontSize="sm" px={3} py={1} borderRadius="full">
                                                    {t(plan.period)}
                                                </Badge>
                                            </Flex>
                                        </Stack>
                                    </div>
                                </div>
                            )
                        })
                    }
                </SimpleGrid> :
                <div className='h-80 w-full flex items-center justify-center'>
                    <div className='text-white flex flex-col items-center'>
                        <span className="text-3xl font-bold">
                            Nada por aqui...
                        </span>
                        <span color='white'>Esta solución todavía no tiene planes dados de alta</span>
                    </div>
                </div>}
        </Box>
    )
}
