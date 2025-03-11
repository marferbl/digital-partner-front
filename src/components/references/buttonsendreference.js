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
            <div className='bg-neutralblack rounded-lg p-10 w-full mt-4' >
                <span className='text-4xl text-white'>Solicitar referencia</span>

                <div className='flex items-center justify-between text-white gap-10 mt-6'>
                    <div>
                        <span className='pt-4'>Sobre que solución quieres enviar la referencia</span>
                        <SearchSelectSolutions onChange={(value) => setsolutionId1(value)} corporate placeholder='Seleccionar solución' />
                    </div>
                    <div>
                        <span>Escribe el correo de la persona a la que le quieres enviar la referencia</span>
                        <input type="text" value={email} className={'border-1 border-gray-500 py-1.5 rounded-lg w-full text-white bg-black'} onChange={(e) => setEmail(e.target.value)} />

                    </div>


                    <CustomButton text="Enviar referencia" onClick={compareSolutions} extraClass='mt-6' />
                </div>
            </div>
        </>
    )
}
