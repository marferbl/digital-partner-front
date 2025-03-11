import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';

const CustomButton = ({ text, onClick, showIcon, size, disabled, type, extraClass }) => {

    const sizeToButtonResponsive = () => {
        const object = {
            sm: 'px-2 py-1',
            md: 'px-4 py-2',
            lg: 'px-6 py-3',
        }

        return object[size] || object['md']
    }

    const styles = () => {
        const object = {
            primary: 'text-black bg-gridyellow',
            secondary: 'text-white bg-neutralblack',
        }

        return object[type] || object['primary']
    }


    return (
        <button className={`${styles()} px-2 py-1 md:px-4 md:py-2 rounded hover:text-neutral flex items-center rounded-3xl ${disabled && 'cursor-not-allowed opacity-50'} ${extraClass}`} disabled={disabled} onClick={onClick}>
            {text}
            {showIcon && <IoIosArrowRoundForward size={size || 28} />}
        </button>
    )
}

export default CustomButton