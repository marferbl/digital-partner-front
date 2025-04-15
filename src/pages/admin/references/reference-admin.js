import React, { useEffect, useContext, useState } from 'react'
import { getReferences } from '../../../services/reference'
import { UserContext } from '../../../context/userContext'
import CustomButton from '../../../components/base/CustomButton'
import { ButtonSendReference } from '../../../components/references/buttonsendreference'
import { useNavigate } from 'react-router-dom'
import SearchSelectSolutions from '../../../components/base/search-select-solutions'
import RadarChart from '../../../components/statistics/radar-chart'

const ReferenceAdmin = () => {

    const [references, setReferences] = useState([])
    const navigate = useNavigate()
    const [selectedRoute, setSelectedRoute] = useState("myReferences")
    const [solutionId, setSolutionId] = useState(null)
    const [solution, setSolution] = useState(null)
    const [solutionSelected, setSolutionSelected] = useState(null)
    const [filteredReferences, setFilteredReferences] = useState([])

    const { me } = useContext(UserContext)

    useEffect(() => {
        if (!solution) {
            setFilteredReferences(references)
            return;
        }
        const filtered = references?.filter(e => e.entityName === solution.name)
        setFilteredReferences(filtered)
    }, [references, solution])


    useEffect(() => {
        me && getReferencesByCompanyId()
    }, [])

    const options = [
        { label: "Mis referencias", key: "myReferences" },
        { label: "Estadisticas", key: "statistics" },
    ];


    const getReferencesByCompanyId = async () => {
        await getReferences(me.corporate._id)
            .then(res => {
                setReferences(res.data)
            }
            )
    }

    const goToDetails = (reference) => {
        navigate(`/private/reference-answer`, { state: { reference } });
    }

    return (
        <div className='pb-20'>
            <div className="flex justify-center text-white text-2xl font-bold">
                {/* <SwitchMenu options={options} selected={selectedRoute} onChange={setSelectedRoute} /> */}
            </div>
            {selectedRoute === 'myReferences' ? <div>
                <div className="flex justify-end pb-8">
                    <ButtonSendReference spreadFullObject={(sol) => setSolution(sol)} />
                </div>
                <p className='text-8xl text-white font-light text-center w-full mt-12'>MIS REFERENCIAS</p>
                <div className="w-full flex my-4 items-center text-white p-4 border-b-1 border-neutralblack gap-6">
                    {solution?.logo ? <img src={solution ? solution.logo : ''} alt="" className='w-28 h-28 bg-white rounded-xl' /> : 'Filtra por solución'}
                    <span className='text-6xl font-light'>{solution?.name}</span>
                    <div className='min-w-78'>
                        <SearchSelectSolutions corporate placeholder='Seleccionar solución' onChange={(solution) => { setSolutionSelected(solution) }} emitFullObject getFullObject={(solution) => setSolution(solution)} />
                    </div>
                    {solution && <span className='cursor-pointer hover:bg-gray-700 p-3 rounded-xl' onClick={() => { setSolution(null) }}>Limpiar filtro</span>}
                </div>

                {filteredReferences?.map(reference => (
                    <div key={reference._id} className="w-full flex my-4 items-center justify-between text-white p-4 border-b-1 border-neutralblack">
                        <span className='w-80'>{reference.email}</span>
                        <span className='w-80'>{reference.entityName}</span>
                        <span className={`w-80 ${reference.finished ? 'text-green-200' : 'text-red-400'}`}>{reference.finished ? 'Contestada' : 'Pendiente'}</span>
                        <CustomButton onClick={() => { goToDetails(reference) }} text='Ver respuestas' showIcon></CustomButton>
                    </div>
                ))}
            </div> :
                <div>

                    <div className="flex flex-col items-center text-white py-8 gap-6">
                        Selecciona la solución para ver los resultados ENPS

                        <div className='w-60'>
                            <SearchSelectSolutions onChange={(value) => setSolutionId(value)} corporate />
                        </div>
                        <div>
                            <RadarChart />
                        </div>
                    </div>

                </div>}
        </div>
    )
}

export default ReferenceAdmin