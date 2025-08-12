import React, { useEffect, useState } from 'react'
import DigitalProfileForm from '../../components/personal/digital-profile-form';
import { getFreelance } from '../../services/freelance';

const DigitalProfilePage = () => {
    const [freelance, setFreelance] = useState(null);

    useEffect(() => {
        getFreelance().then(res => {
            if (res) {
                setFreelance(res.data.freelance);
            }
        })
    }, [])



    return (
        <div className="bg-black min-h-screen flex flex-col items-center">
            <div className='w-full px-4 lg:px-20'>
                <DigitalProfileForm myFreelance={freelance} />
            </div>
        </div>
    )
}

export default DigitalProfilePage;