import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import RecruiterSearch from './RecruiterSearch'

const SelectionPage = () => {
    const [selected, setSelected] = useState()

    const mockup = [
        {
            id: 1,
            name: 'Desarrollador Fullstack',
            description: 'Buscamos un desarrollador frontend con experiencia en React y Redux.',
            status: 'open',
            date: '2023-10-01',
            salaryMax: 50000,
            salaryMin: 30000,
            job: 'full_stack',
        },
        {
            id: 2,
            name: 'Diseñador UI/UX',
            description: 'Se busca un diseñador UI/UX con experiencia en Figma y Adobe XD.',
            status: 'open',
            date: '2023-10-01',
            salaryMax: 50000,
            salaryMin: 30000,
            job: 'front_end',
        },
    ]

    return (
        <div className='min-h-screen'>
            <h1 className='text-xl font-bold text-white mb-3'>Tus búsquedas</h1>
            {selected && (
                <div onClick={() => setSelected(null)} className="text-white py-4">
                    <Button variant='outline' className='mb-4 hover:text-black'>
                        Volver a búsquedas
                    </Button>
                </div>
            )}
            {!selected ? <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {mockup.map((vacancy) => (
                    <div
                        key={vacancy.id}
                        className='bg-darkgray rounded-xl p-4 shadow-md flex flex-col justify-between border-b-4 border-green-400 cursor-pointer transition-transform transform hover:scale-105 duration-200'
                        onClick={() => setSelected(vacancy)}
                    >
                        <div className='flex justify-between items-center mb-4'>
                            <div className='mb-2'>
                                <div className='text-lg font-semibold text-white'>{vacancy.name}</div>
                                <div className='text-sm text-gray-400'>{vacancy.description}</div>
                            </div>
                        </div>
                        <div className='mt-4 text-sm'>
                            <div className='mb-1'>
                                <span className='text-green-300'>
                                    {vacancy.status === 'open' ? 'Abierta' : 'Cerrada'}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div> :
                <RecruiterSearch vacancy={selected} />}
        </div>
    )
}

export default SelectionPage
