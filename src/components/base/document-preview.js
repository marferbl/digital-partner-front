import React from 'react';
import { Flex } from '@chakra-ui/react';
import GradientButton from './GradientButton';

const ManualDownload = ({ pdfFilename }) => {
    const downloadUrl = `http://localhost:4000/file/download/${pdfFilename}`;

    return (
        <Flex w={'full'} justify='end' mt={4}>
            <a href={downloadUrl} download>
                <GradientButton label={'Descargar'} type='green' size={'sm'} />
            </a>

        </Flex>
    );
};

export default ManualDownload;