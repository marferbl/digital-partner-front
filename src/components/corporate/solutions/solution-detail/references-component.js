import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getReferencesByEntityDetail } from '../../../../services/reference'
import CustomButton from '../../../../components/base/CustomButton.js'
import ButtonReferenceAnswers from '../../../../components/corporate/references/button-reference-answers.js'
import { useTranslation } from 'react-i18next';

export const ReferencesComponent = () => {

    const { id } = useParams()
    const [references, setReferences] = useState([])
    const { t } = useTranslation("global")

    useEffect(() => {
        getReferencesByEntityDetail({
            entityName: 'solution',
            entityId: id
        }).then(res => {
            console.log(res)
            setReferences(res.data.references)

        }
        )

    }, [])
    return (
        <div className='text-white'>
            {references?.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {references?.map(reference => (
                    <div
                        key={reference._id}
                        className={`bg-darkgray rounded-xl p-4 shadow-md flex flex-col justify-between border-b-4 ${reference.finished ? 'border-green-400' : 'border-red-400'
                            }`}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <div className="mb-2">
                                <div className="text-lg font-semibold">{reference.contactName}</div>
                                <div className="text-sm text-gray-400">{reference.job} {t("references.of")} {reference.companyName}</div>
                            </div>
                            <ButtonReferenceAnswers reference={reference}>
                                <CustomButton text={t("references.view")} showIcon />
                            </ButtonReferenceAnswers>
                        </div>
                        <div className="mt-4 text-sm">
                            <div className="mb-1">
                                <span className="font-medium">{t("references.status")}:</span>{' '}
                                <span className={reference.finished ? 'text-green-300' : 'text-red-300'}>
                                    {reference.finished ? t("references.completed") : t("references.pending")}
                                </span>
                            </div>
                            {reference.finished && (
                                <div>
                                    <span className="font-medium">{t("references.answeredOn")}:</span>{' '}
                                    {new Date(reference.updatedAt).toLocaleDateString()}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div> :
                <div className='h-80 w-full flex items-center justify-center'>
                    <div className='text-white flex flex-col items-center'>
                        <span className="text-3xl font-bold">{t("common.nothingHere")}</span>
                        <span>{t("references.empty")}</span>
                    </div>
                </div>
            }
        </div>


    )
}