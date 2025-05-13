import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Button,
} from '@chakra-ui/react';

const COLORS = [
    { name: 'Red', value: 'bg-red-500' },
    { name: 'Orange', value: 'bg-orange-500' },
    { name: 'Yellow', value: 'bg-yellow-500' },
    { name: 'Green', value: 'bg-green-500' },
    { name: 'Teal', value: 'bg-teal-500' },
    { name: 'Blue', value: 'bg-blue-500' },
    { name: 'Indigo', value: 'bg-indigo-500' },
    { name: 'Purple', value: 'bg-purple-500' },
    { name: 'Pink', value: 'bg-pink-500' },
    { name: 'Gray', value: 'bg-gray-500' },
];

export const ColorPicker = ({ selectedColor, onColorSelect }) => {
    const selectedColorObj = COLORS.find(color => color.value === selectedColor) || COLORS[0];

    return (
        <Menu>
            <MenuButton
                as={Button}
                w="full"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                _hover={{ bg: 'gray.50' }}
            >
                <Box display="flex" alignItems="center" gap={2}>
                    <Box
                        w="20px"
                        h="20px"
                        borderRadius="full"
                        className={selectedColorObj.value}
                    />
                    <span>{selectedColorObj.name}</span>
                </Box>
            </MenuButton>
            <MenuList>
                {COLORS.map((color) => (
                    <MenuItem
                        key={color.value}
                        onClick={() => onColorSelect(color.value)}
                        display="flex"
                        alignItems="center"
                        gap={2}
                    >
                        <Box
                            w="20px"
                            h="20px"
                            borderRadius="full"
                            className={color.value}
                        />
                        <span>{color.name}</span>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}; 