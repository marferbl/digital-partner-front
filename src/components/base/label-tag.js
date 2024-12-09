import React from 'react'
import { capitalizeFirstLetter } from '../../utils/methods'

const LabelTag = ({ label }) => {
    return (
        <div className="flex justify-center font-light items-center border-1 border-gray-300 text-neutral p-1 rounded-lg text-3xs whitespace-nowrap">
            <span>{capitalizeFirstLetter(label)}</span>
        </div>
    )
}

export default LabelTag