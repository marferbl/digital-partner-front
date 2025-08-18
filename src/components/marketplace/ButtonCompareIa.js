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
import { UserContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'


export const ButtonCompareIA = ({ refreshSolutions, disabled }) => {
    const { t } = useTranslation("global")
    const { isLoggedIn } = useContext(UserContext)
    const navigate = useNavigate()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { 
        isOpen: isPromptOpen, 
        onOpen: onPromptOpen, 
        onClose: onPromptClose 
    } = useDisclosure()

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
                if (error.response?.status === 401) {
                    closeModal()
                    onPromptOpen()
                } else {
                    setError(error.response?.data?.message || "Unexpected error")
                    setLoading(false)
                }
            })
    }

    const handleOpen = () => {
        if (!isLoggedIn) {
            onPromptOpen()
            return
        }
        onOpen()
    }

    return (
        <>
            <CustomButton onClick={handleOpen} text={t('compareWithAI')} extraClass='text-sm py-2' showIcon></CustomButton>


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

                        {error && (
                            <Text color='red.500' mt={2}>{error}</Text>
                        )}
                    </ModalBody>


                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={closeModal}>
                            {t('compareAI.cancel')}
                        </Button>
                        <Button onClick={compareSolutions} colorScheme='gray'>{t('compareAI.compare')}</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* Prompt Modal for login or continue */}
            <Modal isOpen={isPromptOpen} onClose={onPromptClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{t('auth.requiredTitle')}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>{t('auth.requiredMessage')}</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="ghost" mr={3} onClick={() => {
                            onPromptClose()
                            onClose()
                        }}>
                            {t('auth.continueWithoutLogin')}
                        </Button>
                        <Button colorScheme="blue" onClick={() => {
                            onPromptClose()
                            navigate('/start')
                        }}>
                            {t('loginKey')}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
