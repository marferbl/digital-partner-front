import React from 'react'
import {
    useDisclosure,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FiAlignRight, FiMoreVertical } from "react-icons/fi";
import { deleteSolution } from '../../../services/solution'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ButtonUpdateSolution } from './button-update-solutions'




const SolutionsTable = ({ solutions, refreshSolutions }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const deleteItem = (id) => {
        deleteSolution(id).then(() => {
            refreshSolutions()
        })
    }



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {solutions.map((solution) => (
                <div
                    key={solution._id}
                    className="bg-darkgray shadow-md rounded-lg overflow-hidden flex flex-col items-center p-4"
                >
                    {/* Replace with actual image if available */}
                    <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
                        <img src={solution.logo || 'placeholder.png'} alt={solution.name} className="object-cover h-full w-full" />
                    </div>
                    <div className="mt-2 flex justify-between w-full items-center">
                        <div className="flex gap-2">
                            <div className="flex flex-col ">
                                <h2 className="text-lg font-semibold text-white">{solution.name}</h2>
                                <p className="text-sm text-neutral">{solution.website}</p>
                            </div>
                            <Link to={`/solution/${solution._id}`}>
                                <button className="text-white font-semibold px-4 py-2 rounded hover:text-neutral">
                                    <IoIosArrowRoundForward size={28} />
                                </button>
                            </Link>
                        </div>
                        <div className="flex justify-center">

                            <div class='relative '>
                                <Menu>
                                    <MenuButton className="rounded-full p-2 hover:bg-gray-100 text-white">
                                        <FiMoreVertical size={20} />
                                    </MenuButton>
                                    <MenuItems className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none z-10 -translate-y-[calc(100%+50px)]">
                                        <div className="p-1">
                                            <MenuItem>
                                                {({ active }) => (
                                                    <ButtonUpdateSolution solution={solution} refreshSolutions={refreshSolutions} >
                                                        <button
                                                            className={`${active ? 'bg-gray-100' : ''
                                                                } w-full text-left px-4 py-2 text-sm font-bold`}
                                                        >
                                                            Editar
                                                        </button></ButtonUpdateSolution>

                                                )}
                                            </MenuItem>
                                            <MenuItem>
                                                {({ active }) => (
                                                    <button
                                                        onClick={() => deleteItem(solution._id)}
                                                        className={`${active ? 'bg-gray-100' : ''
                                                            } w-full text-left px-4 py-2 text-sm font-bold text-red-500`}
                                                    >
                                                        Eliminar
                                                    </button>
                                                )}
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default SolutionsTable;