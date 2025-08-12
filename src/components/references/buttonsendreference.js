import React, { useState, useEffect, useContext } from 'react'
import { RadioGroup, Radio, Stack, Box, Button, Flex, Text, Input, Textarea, } from '@chakra-ui/react'
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
import SearchSelectServices from '../base/search-select-services'






export const ButtonSendReference = ({ disabled }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { t } = useTranslation("global")

    const [selectedEntityId, setSelectedEntityId] = useState('')
    const [selectedEntityModel, setSelectedEntityModel] = useState('solution') // default
    const [loading, setLoading] = useState(false)
    const [text, setText] = useState('')
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const toast = useToast()


    const closeModal = () => {
        setSelectedEntityId('')
        setText('')
        setError('')
    }


    const compareSolutions = () => {
        setLoading(true)
        sendReference({ entityId: selectedEntityId, email, entityType: selectedEntityModel }).then((res) => {
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
            <div className='bg-neutralblack rounded-lg p-10 w-full mt-4'>
                <span className='text-4xl text-white'>{t('profileUser.references.title')}</span>

                <div className='flex items-center justify-between text-white gap-10 mt-6'>
                    <div className='flex flex-col gap-4'>
                        <span>{t('profileUser.references.selectType')}</span>
                        <RadioGroup value={selectedEntityModel} onChange={setSelectedEntityModel}>
                            <Stack direction='row'>
                                <Radio value='solution'>{t('profileUser.references.solution')}</Radio>
                                <Radio value='service'>{t('profileUser.references.service')}</Radio>
                            </Stack>
                        </RadioGroup>

                        {selectedEntityModel === 'solution' ? (
                            <SearchSelectSolutions
                                onChange={(value) => setSelectedEntityId(value)}
                                corporate
                                placeholder={t('profileUser.references.selectPlaceholderSolution')}
                                theme="dark"
                            />
                        ) : (
                            <SearchSelectServices
                                onChange={(value) => setSelectedEntityId(value)}
                                corporate
                                placeholder={t('profileUser.references.selectPlaceholderService')}
                                theme="dark"
                            />
                        )}
            </div>

            <div>
                <span>{t('profileUser.references.emailTitle')}</span>
                <input
                    type="text"
                    value={email}
                    className='mt-2 border-1 border-gray-500 py-1.5 px-2.5 rounded-lg w-full text-white bg-black'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>


                    <CustomButton text={t('profileUser.references.sendReference')} onClick={compareSolutions} extraClass='mt-6' />
                </div>
            </div>
        </>
    )
}
