import { Button } from "@chakra-ui/react";
import { COLORS } from "../../colors/colors";

const GradientButton = ({ type, label, onClick, size, ...props }) => {
    // Define the gradients based on the type prop
    let bgGradient, hoverGradient, activeGradient;

    if (type === "red") {
        bgGradient = "linear(to-r, #fc8414, #ff456f)";
    } else if (type === "green") {
        bgGradient = `linear(to-r, ${COLORS.secondary}, #17a7c2)`
    } else {
        // Default to gradient1 if type is not specified or invalid
    }

    return (
        <Button
            bgGradient={bgGradient}
            _hover={{ shadow: 'xl', opacity: 0.9 }}
            color={"white"}
            fontWeight="bold"
            _focus={{ boxShadow: "outline" }}
            onClick={onClick}
            size={size || 'md'}
            {...props}
        >
            {label}
        </Button>
    );
};

export default GradientButton;
