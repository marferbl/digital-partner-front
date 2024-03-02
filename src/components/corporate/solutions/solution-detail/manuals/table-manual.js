import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { capitalizeFirstLetter } from "../../../../../utils/methods";
import ManualPreview from '../../../../base/document-preview';


const ManualCard = ({ manual }) => {
    return (
        <Box p={4} borderWidth="1px" borderRadius="lg">
            <Text mb={4} fontWeight="bold">{capitalizeFirstLetter(manual.name)}</Text>
            <Text>{manual.document}</Text>
            <ManualPreview pdfUrl={manual.document} />
        </Box>
    );
};

const ManualsTable = ({ manuals }) => {
    return (
        <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
            {manuals.map((manual, index) => (
                <GridItem key={index}>
                    <ManualCard manual={manual} />
                </GridItem>
            ))}
        </Grid>
    );
};

export default ManualsTable;
