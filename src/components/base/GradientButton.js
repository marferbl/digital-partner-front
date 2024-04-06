import { Button } from "@chakra-ui/react";

const GradientButton = ({ type, label, onClick, size, ...props }) => {
    // Define the gradients based on the type prop
    let bgGradient, hoverGradient, activeGradient;

    if (type === "red") {
        bgGradient = "linear(to-r, #fc8414, #ff456f)";
        hoverGradient = "linear(to-r, #ff6b2b, #ff1a62)";
        activeGradient = "linear(to-r, #ff8532, #ff5782)";
    } else if (type === "green") {
        bgGradient = "linear(to-r, #8bd305, #09fc1b)";
        hoverGradient = "linear(to-r, #8bd338, #3cff40)";
        activeGradient = "linear(to-r, #9cff3d, #62ff8b)";
    } else {
        // Default to gradient1 if type is not specified or invalid
        bgGradient = "linear(to-r, #fc8414, #ff456f)";
        hoverGradient = "linear(to-r, #ff6b2b, #ff1a62)";
        activeGradient = "linear(to-r, #ff8532, #ff5782)";
    }

    return (
        <Button
            bgGradient={bgGradient}
            _hover={{ bgGradient: hoverGradient }}
            _active={{ bgGradient: activeGradient }}
            color={type === "green" ? "black" : "white"}
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
