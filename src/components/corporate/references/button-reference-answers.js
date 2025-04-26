// create a component of a modal of chakra ui using a slot to let the parent component to set the trigger
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useEffect } from 'react';
import ReferenceAnswers from '../../../pages/admin/references/reference-answer';
import { MyResponsiveRadar } from './chart-radar'

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
                    <ModalHeader>
                        <div className="flex items-center gap-1 pb-2">
                            <div className="h-3 w-3 bg-green-500 rounded-full" />
                            <div className="text-lg font-semibold">
                                Encuesta contestada por {reference.contactName}
                            </div>
                            <div className="text-lg text-gray-400">
                                {` con el cargo ${reference.job} en ${reference.companyName}`}
                            </div>
                        </div>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Tabs variant="enclosed" isFitted>
                            <div className='flex justify-center'>
                                <TabList mb="1em">
                                    <Tab
                                        _selected={{
                                            color: 'black',
                                            boxShadow: 'md',
                                        }}
                                        color="gray.400"
                                    >
                                        Respuestas
                                    </Tab>
                                    <Tab
                                        _selected={{
                                            color: 'black',
                                            boxShadow: 'md',
                                        }}
                                        color="gray.400"
                                    >
                                        Estadísticas
                                    </Tab>
                                </TabList>
                            </div>
                            <TabPanels>
                                <TabPanel>
                                    {/* Contenido de "Respuestas" */}
                                    <ReferenceAnswers
                                        defaultReference={reference}
                                        readOnly
                                        maxH="max-h-[70vh]"
                                        hideInputs
                                    />
                                </TabPanel>

                                <TabPanel>
                                    <div className='w-full flex justify-center'>
                                        {/* Contenido de "Estadísticas" */}
                                        <MyResponsiveRadar answers={reference.answers} />
                                    </div>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </ModalBody>
                </ModalContent>
            </Modal>

        </>
    );
}

export default ButtonReferenceAnswers;