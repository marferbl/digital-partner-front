import React, { useState, useEffect } from 'react';
import { Button, Flex, Input, Text, Box, Center } from '@chakra-ui/react';
import SearchSelect from '../../base/search-select';
import { FiXOctagon } from "react-icons/fi";


const SkillSelector = ({ onChange }) => {
    const [skills, setSkills] = useState([{ name: '', level: '' }]);
    const [languages, setLanguages] = useState([])

    const languageOptions = [
        { value: 'english', label: 'Inglés' },
        { value: 'spanish', label: 'Español' },
        { value: 'french', label: 'Francés' },
        { value: 'italian', label: 'Italiano' },
    ];

    useEffect(() => {
        onChange({ skills, languages });
    }, [skills, languages])


    const addSkill = () => {
        setSkills([...skills, { name: '', level: '' }]);
    };

    const removeSkill = (index) => {
        const updatedSkills = [...skills];
        updatedSkills.splice(index, 1);
        setSkills(updatedSkills);
    };

    const handleSkillChange = (index, field, value) => {
        const updatedSkills = [...skills];
        updatedSkills[index][field] = value;
        setSkills(updatedSkills);
    };

    return (
        <div>
            <Box w={'full'}>
                <Text mt={5} fontWeight={"bold"}>
                    Idiomas:{" "}
                </Text>
                <SearchSelect options={languageOptions} value={languages} isMulti onChange={(value) => setLanguages(value)} />
                <Text mt={5} fontWeight={"bold"}>
                    Habilidades:{" "}
                </Text>
            </Box>

            {skills.map((skill, index) => (
                <Box>

                    <Flex key={index} my={4}>
                        <Flex flexDir="column" mr={4}>
                            <Input
                                value={skill.name}
                                onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                                placeholder="Skill"
                            />
                        </Flex>
                        <Flex flexDir="column">
                            <Input
                                value={skill.level}
                                type="number"
                                max={5}
                                onChange={(e) => handleSkillChange(index, 'level', e.target.value)}
                                placeholder="Nivel del 1-5"
                            />
                        </Flex>
                        <Center cursor={'pointer'} onClick={() => removeSkill(index)} pl={2}>
                            <FiXOctagon color={'red'} />
                        </Center>
                    </Flex>
                </Box>

            ))}
            <Flex justify={'flex-end'}>
                <Button variant={'outline'} size={'small'} fontSize={12} p={2} onClick={addSkill} mb={4}>Añadir</Button>
            </Flex>
        </div>
    );
};

export default SkillSelector;
