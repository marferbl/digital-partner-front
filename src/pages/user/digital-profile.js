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
            <h2 className="text-6xl md:text-10xl lg:text-12xl font-semibold text-white text-center" style={{ lineHeight: '0.9', fontWeight: 'light' }}>DIGITAL PROFILE</h2>
            <div className='w-full px-4 lg:px-20'>
                <DigitalProfileForm myFreelance={freelance} />
            </div>
        </div>
    )
}

export default DigitalProfilePage;