import React, { useState } from "react";
import RegisterForm from "../../components/Register/register-form";
import LoginForm from "../../components/Login/login-form";


const ContentSwitch = () => {
    const [isLeftActive, setIsLeftActive] = useState(true);

    const toggleSwitch = () => {
        setIsLeftActive(!isLeftActive);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative w-160 h-110 bg-gray-300 rounded-lg p-1">
                {/* Toggle Indicator */}
                <div
                    className={`absolute top-1 ${isLeftActive ? "left-1" : "left-[calc(50%-4px)]"
                        } w-[calc(50%-4px)] h-[calc(100%-8px)] bg-white rounded-lg transition-all duration-300`}
                />

                {/* Left Content */}
                <div
                    className={`absolute inset-y-0 left-0 w-1/2 flex items-center justify-center cursor-pointer ${isLeftActive ? "text-gray-800" : "text-gray-600"
                        } transition-all duration-300`}
                    onClick={() => setIsLeftActive(true)}
                >
                    
                </div>

                {/* Right Content */}
                <div
                    className={`absolute inset-y-0 right-0 w-1/2 flex items-center justify-center cursor-pointer ${isLeftActive ? "text-gray-600" : "text-gray-800"
                        } transition-all duration-300`}
                    onClick={() => setIsLeftActive(false)}
                >
                    <p className="text-sm font-medium">Right Content</p>
                </div>
            </div>
        </div>
    );
};

export default ContentSwitch;
