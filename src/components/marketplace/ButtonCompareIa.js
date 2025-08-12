import React, { useState, useEffect, useContext } from 'react'
import { Box, Button, Flex, Text, Input, Textarea, } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Image,
    Checkbox,
    Center
} from '@chakra-ui/react'
import GradientButton from '../base/GradientButton'
import SearchSelectSolutions from '../base/search-select-solutions'
import { compareSolutionsIA } from '../../services/search'
import LoadingSpinner from '../base/LoadingSpinner'
import { useTranslation } from 'react-i18next'
import CustomButton from '../base/CustomButton'







export const ButtonCompareIA = ({ refreshSolutions, disabled }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { t } = useTranslation("global")

    const [solutionId1, setsolutionId1] = useState('')
    const [solutionId2, setsolutionId2] = useState('')
    const [loading, setLoading] = useState(false)
    const [text, setText] = useState('')
    const [error, setError] = useState('')
    const [comparation, setComparation] = useState('')

    const closeModal = () => {
        onClose()
        setsolutionId1('')
        setsolutionId2('')
        setText('')
        setError('')
        setComparation('')
    }


    const compareSolutions = () => {
        setLoading(true)
        compareSolutionsIA({ solutionId1, solutionId2, text })
            .then((res) => {
                setComparation(res.data.output)
                setLoading(false)
            })
            .catch((error) => {
                setError(error.response.data.message)
                setLoading(false)
            })
    }



    return (
        <>
            <CustomButton onClick={onOpen} text={t('compareWithAI')} extraClass='text-sm py-2' showIcon></CustomButton>


            <Modal isOpen={isOpen} onClose={closeModal} size='3xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{t('compareAI.title')}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody py={5}>
                        <Text>{t('compareAI.selectSolutions')}</Text>

                        <Flex gap={4} py={4}>
                            <SearchSelectSolutions onChange={(value) => setsolutionId1(value)} />
                            <SearchSelectSolutions onChange={(value) => setsolutionId2(value)} />
                        </Flex>

                        <Textarea fontSize={12} placeholder={t('compareAI.commentPlaceholder')} onChange={(e) => setText(e.target.value)} />


                        {loading && <Center minH={200} w='full' >
                            <LoadingSpinner label={t('loadingLabel')} />
                        </Center>}

                        {!loading && comparation && (
                            <Box p={5}>
                                <Text mb={2}>{t('compareAI.aiHasSpoken')}</Text>
                                <Box bg={'gray.50'} rounded={'lg'} p={2} fontSize={14}>
                                    <Text lineHeight={1.8} >
                                        {comparation}
                                    </Text>
                                </Box>
                            </Box>
                        )}
                    </ModalBody>


                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={onClose}>
                            {t('compareAI.cancel')}
                        </Button>
                        <Button onClick={compareSolutions} colorScheme='gray'>{t('compareAI.compare')}</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
