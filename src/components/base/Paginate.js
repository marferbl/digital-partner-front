import React from 'react';
import { Flex, IconButton, Text, Box, Input } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {

    // Handle Previous Page
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Handle Next Page
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Handle Jump to Specific Page
    const handleInputPage = (e) => {
        const value = Number(e.target.value);
        if (value >= 1 && value <= totalPages) {
            setCurrentPage(value);
        }
    };

    return (
        <Flex justify="center" align="center" mt={4} gap={2}>
            {/* Previous Page Button */}
            <IconButton
                icon={<ChevronLeftIcon />}
                onClick={handlePreviousPage}
                isDisabled={currentPage === 1}
                aria-label="Anterior"
                size="sm"
            />

            {/* Current Page and Total Pages */}
            <Flex align="center">
                <Text mr={2}>Página</Text>
                <Box>
                    <Input
                        type="number"
                        value={currentPage}
                        onChange={handleInputPage}
                        max={totalPages}
                        min={1}
                        size="sm"
                        width="50px"
                        textAlign="center"
                    />
                </Box>
                {/* <Text ml={2}>of {totalPages}</Text> */}
            </Flex>

            {/* Next Page Button */}
            <IconButton
                icon={<ChevronRightIcon />}
                onClick={handleNextPage}
                isDisabled={currentPage === totalPages}
                aria-label="Siguiente"
                size="sm"
            />
        </Flex>
    );
};

export default Pagination;
