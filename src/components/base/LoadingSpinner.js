import { motion } from "framer-motion";
import { Center, Image, Text } from "@chakra-ui/react";

const LoadingSpinner = ({ label }) => {
    return (
        <Center height={'full'} flexDir='column'>
            <motion.div
                initial={{ y: -30, opacity: 0 }} // Initial position and opacity
                animate={{ y: 30, opacity: 1 }} // Animation to bounce down and fade in
                transition={{ y: { duration: 0.5, yoyo: Infinity }, opacity: { duration: 0.5 } }} // Animation transition
                style={{ fontSize: "24px", fontWeight: "bold" }} // Styling
            >
                <Image src={'/logo-d.png'} height={16} w={16} />
            </motion.div>
            {label && <Text fontSize={'xl'} fontWeight='bold' mt={10}>{label}</Text>}
        </Center>
    );
};

export default LoadingSpinner;
