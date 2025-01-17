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
    Center,
    useToast
} from '@chakra-ui/react'
import GradientButton from '../base/GradientButton'
import SearchSelectSolutions from '../base/search-select-solutions'
import { compareSolutionsIA } from '../../services/search'
import LoadingSpinner from '../base/LoadingSpinner'
import { useTranslation } from 'react-i18next'
import CustomButton from '../base/CustomButton'
import { sendReference } from '../../services/reference'







export const ButtonSendReference = ({ disabled }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { t } = useTranslation("global")

    const [solutionId1, setsolutionId1] = useState('')
    const [loading, setLoading] = useState(false)
    const [text, setText] = useState('')
    const [error, setError] = useState('')
    const [comparation, setComparation] = useState('')
    const [email, setEmail] = useState('')
    const toast = useToast()

    const closeModal = () => {
        onClose()
        setsolutionId1('')
        setText('')
        setError('')
        setComparation('')
    }


    const compareSolutions = () => {
        setLoading(true)
        sendReference({ entityId: solutionId1, email, entityType: 'solution' }).then((res) => {
            setLoading(false)
            closeModal()
            toast({
                title: "OK",
                description: "Has enviado el correo electrónico",
                status: "success",
                duration: 4000,
                isClosable: true,
            });
            if (res.error) {
                setError(res.error)
            } else {
                setError('')
            }
        }
        )
    }



    return (
        <>
            <CustomButton onClick={onOpen} text='Enviar Referencia' showIcon></CustomButton>

            <Modal isOpen={isOpen} onClose={closeModal} size='lg'>
                <ModalOverlay />
                <ModalContent bg={'black'} color='white' borderWidth={1}>
                    <ModalHeader>Enviar Referencia</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody py={5} >
                        <Text>Sobre que solucion quieres enviar?</Text>

                        <SearchSelectSolutions onChange={(value) => setsolutionId1(value)} corporate />
                        <div className='pt-4'>
                            <span className='pt-4'>Escribe el correo de la persona a la que le quieres enviar la referencia</span>
                            <input type="text" value={email} className={'border-1 py-1 rounded-lg bg-gray-100 w-full text-black'} onChange={(e) => setEmail(e.target.value)} />

                        </div>

                        {loading && <Center minH={200} w='full' >
                            <LoadingSpinner label={t('loadingLabel')} />
                        </Center>}

                        {!loading && comparation && (
                            <Box p={5}>
                                <Text mb={2}>La IA de digitalando ha hablado...</Text>
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
                            cancelar
                        </Button>
                        <Button onClick={compareSolutions} colorScheme='gray'>Comparar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
