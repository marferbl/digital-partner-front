import React from "react";

const Avatar = ({ src, name }) => {
    const avatarStyle = {
        width: "50px", // Adjust size as needed
        height: "50px", // Adjust size as needed
        borderRadius: "50%",
        backgroundColor: "#ccc", // Default background color
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px", // Adjust font size as needed
    };

    return (
        <div style={avatarStyle}>
            {src ? (
                <img src={src} alt={name} style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
            ) : (
                name ? name.charAt(0).toUpperCase() : "A"
            )}
        </div>
    );
};

export default Avatar;
