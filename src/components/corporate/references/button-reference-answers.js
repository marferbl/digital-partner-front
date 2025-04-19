// create a component of a modal of chakra ui using a slot to let the parent component to set the trigger

import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useEffect } from 'react';
import ReferenceAnswers from '../../../pages/admin/references/reference-answer';

const ButtonReferenceAnswers = ({ children, reference }) => {
    const { t } = useTranslation('global');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        if (reference) {
            setAnswers(reference.answers);
        }
    }, [reference]);

    return (
        <>
            <div as={'div'} onClick={onOpen}>
                {children}
            </div>
            <Modal isOpen={isOpen} onClose={onClose} size="6xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{''}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div>
                            <div className='flex items-center gap-1 pb-2'>
                                <div className='h-3 w-3 bg-green-500 rounded-full' />
                                <div className="text-lg font-semibold">Encuesta contestada por {reference.contactName} </div>
                                <div className="text-lg text-gray-400"> {` con el cargo ${reference.job} en ${reference.companyName}`}</div>

                            </div>
                            <ReferenceAnswers defaultReference={reference} readOnly maxH={'max-h-[70vh]'} hideInputs />
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ButtonReferenceAnswers;