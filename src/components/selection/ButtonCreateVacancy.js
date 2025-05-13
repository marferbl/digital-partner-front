import { useState } from "react";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@chakra-ui/react";
import { createVacancy } from "../../services/vacancy";
import SearchSelectPositions from "../../components/base/search-select-positions"

const ButtonCreateVacancy = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState({
        job: "",
        location: "",
        salaryMin: "",
        salaryMax: "",
        languages: [],
    });


    const saveVacancy = async () => {
        await createVacancy(formData)
    }

    const handleToggle = (key, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };


    return (
        <>
            <Button colorScheme="pink" onClick={onOpen}>
                Create Vacancy
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create a New Vacancy</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div className="min-w-[140px] pt-1">
                            <SearchSelectPositions showLabel onChange={(value) => handleToggle('job', value)} theme='light' />
                            <span className="text-xs">Salario minimo y máximo</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                                {/* Input 1 */}
                                <input
                                    type="number"
                                    className="w-full px-2 py-2 border-1 border-neutral rounded"
                                    value={formData.salaryMin}
                                    placeholder={'30000'}
                                    onChange={(e) => handleToggle('salaryMin', e.target.value)}
                                />

                                {/* Input 2 */}
                                <input
                                    type="number"
                                    className="w-full px-2 py-2 border rounded  border-1 border-neutral"
                                    value={formData.salaryMax}
                                    placeholder={'50000'}
                                    onChange={(e) => handleToggle('salaryMax', e.target.value)}
                                />
                            </div>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="pink" mr={3} onClick={saveVacancy}>
                            Save
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ButtonCreateVacancy;
