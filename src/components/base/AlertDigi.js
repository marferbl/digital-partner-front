import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'

const AlertDigi = ({ text, children }) => {
    return (
        <div className='flex items-center justify-between w-full p-3 bg-gridyellow text-black rounded-xl'>
            <div className='flex items-center'>
                <FaInfoCircle />
                <span className='ml-2 text-light'>{text}</span>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default AlertDigi