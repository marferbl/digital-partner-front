import React from 'react'
import {
    useDisclosure,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { ButtonUpdateService } from './button-update-service'
import { deleteService } from '../../../services/service'
import { FiMoreVertical } from 'react-icons/fi'
import { Menu, MenuButton, MenuList, MenuItem, Box } from "@chakra-ui/react";





const ServiceListView = ({ services, refreshServices }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const deleteItem = (id) => {
        deleteService(id).then(() => {
            refreshServices()
        }
        )
    }


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {services.map((service) => (
                <div
                    key={service._id}
                    className="bg-darkgray shadow-md rounded-lg overflow-hidden flex flex-col items-center p-4"
                >
                    {/* Replace with actual image if available */}
                    <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
                        <img src={service.logo || 'placeholder.png'} alt={service.title} className="object-cover h-full w-full" />
                    </div>
                    <div className="mt-2 flex justify-between w-full items-center">
                        <div className="flex gap-2">
                            <div className="flex flex-col ">
                                <h2 className="text-lg font-semibold text-white">{service.title}</h2>
                                <p className="text-sm text-neutral">{service.web}</p>
                            </div>
                            <Link to={`/service/${service._id}`}>
                                <button className="text-white font-semibold px-4 py-2 rounded hover:text-neutral">
                                    <IoIosArrowRoundForward size={28} />
                                </button>
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <div>
                                <Menu placement='top'>
                                    <MenuButton
                                        as={Box}
                                        variant="outline"
                                        borderWidth={0}
                                        rounded="lg"
                                        p={2}
                                        _hover={{ color: 'gray.400' }}
                                        cursor="pointer"
                                        color="white"
                                    >
                                        <FiMoreVertical size={20} />
                                    </MenuButton>
                                    <MenuList
                                        position="absolute"
                                        right={0}
                                        w="full"
                                        bg="white"
                                        borderWidth={1}
                                        borderColor="gray.200"
                                        borderRadius="md"
                                        boxShadow="lg"
                                        zIndex="10"
                                    >

                                        <MenuItem w="full">
                                            <ButtonUpdateService item={service} refreshservices={refreshServices} serviceTypeDefault={service?.serviceType}>

                                                <button
                                                    className="w-48 h-8 text-left px-3 py-0 text-sm font-bold hover:bg-gray-100"
                                                >
                                                    Editar
                                                </button>
                                            </ButtonUpdateService>
                                        </MenuItem>
                                        <MenuItem w="full">
                                            <button
                                                onClick={() => deleteItem(service._id)}
                                                className="w-48 h-8 text-left px-3 py-0 text-sm text-red-600 font-bold hover:bg-gray-100"
                                            >
                                                Eliminar
                                            </button>
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </div >

    )
}

export default ServiceListView;