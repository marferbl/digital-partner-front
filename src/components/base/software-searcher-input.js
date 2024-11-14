import { useState } from 'react';
import { Flex, Input, Button, Icon } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { COLORS, DARK_COLORS } from '../../colors/colors.js'; // Assuming COLORS is imported from your constants file
import { FiTool, FiRepeat, FiCalendar } from "react-icons/fi";
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { Tooltip } from 'react-tooltip'
import { FiSearch } from "react-icons/fi";





export const SoftwareSearcherInput = ({ onChange, defaultClass }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Using useNavigate instead of useHistory
    const { t } = useTranslation('global');

    const isInPanel = () => {
        return window.location.pathname.includes('private');
    }

    const handleSearch = () => {
        const route = getRoute();
        navigate(route); // Using navigate function instead of push method
    };

    const getRoute = () => {
        return `/search/${searchTerm}`;
    };

    const goToSearch = (key) => {
        navigate(getRoute(), { state: { filters: { lineType: key } } }, { replace: true }
        );
    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="flex items-center justify-center">
            <div className="relative w-60 lg:w-110">
                <input
                    className={defaultClass || "bg-white bg-opacity-20 font-light text-white backdrop-blur-md shadow-md text-sm lg:text-base w-full rounded-full px-4 py-3 pr-10 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"}
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                    placeholder={t('iaHelpsYou')}
                    type="text"
                />
                <button
                    type="submit"
                    className="absolute inset-y-0 right-3 flex items-center text-blue-500 hover:text-blue-700 focus:outline-none"
                    aria-label="Search"
                >
                    {/* Replace with your icon, for example Font Awesome's search icon */}
                    <FiSearch color={defaultClass ? DARK_COLORS.darkgray : DARK_COLORS.gridyellow} onClick={() => onChange(searchTerm)} />
                </button>
            </div>
        </form>

    );
};
