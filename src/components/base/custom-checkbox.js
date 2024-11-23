import { Checkbox } from '@headlessui/react'
import { useState } from 'react'

function CustomCheckbox({ setValue }) {
    const [enabled, setEnabled] = useState(false)

    const changeValue = (value) => {
        setEnabled(value)
        setValue(value)
    }

    return (
        <Checkbox
            checked={enabled}
            onChange={(value) => { changeValue(value) }}
            className="group block size-4 rounded border bg-gray-200 data-[checked]:bg-gray-500"
        >
            {/* Checkmark icon */}
            <svg className="stroke-white opacity-0 group-data-[checked]:opacity-100" viewBox="0 0 14 14" fill="none">
                <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Checkbox>
    )
}

export default CustomCheckbox