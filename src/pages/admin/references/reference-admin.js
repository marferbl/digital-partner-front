import React, { useEffect, useContext, useState } from 'react'
import { getReferences } from '../../../services/reference'
import { UserContext } from '../../../context/userContext'
import CustomButton from '../../../components/base/CustomButton'
import { ButtonSendReference } from '../../../components/references/buttonsendreference'

const ReferenceAdmin = () => {

    const [references, setReferences] = useState([])

    const { me } = useContext(UserContext)

    useEffect(() => {
        me && getReferencesByCompanyId()
    }, [])


    const getReferencesByCompanyId = async () => {
        await getReferences(me.corporate._id)
            .then(res => {
                setReferences(res.data)
            }
            )

    }

    return (
        <>
            <div className="flex justify-end pb-8">
                <ButtonSendReference />
            </div>
            {references.map(reference => (
                <div key={reference._id} className="w-full flex my-4 items-center justify-between text-white p-4 bg-neutralblack rounded-xl border-1 border-white">
                    <span>{reference.email}</span>
                    <span>{reference.entityName}</span>
                    <CustomButton onClick={() => { }} text='Ver respuestas' showIcon disabled></CustomButton>
                </div>
            ))}
        </>
    )
}

export default ReferenceAdmin