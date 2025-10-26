import { Box, Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react'
import { COLORS } from '../../colors/colors'
import SolutionDetailDemo from './solution-detail'
import CustomToast from './Toast'
import ServicesTableDemo from './services-demo'
import { AskForDemoComponent } from './askdemodemo'
import Manualsdemo from './manualsdemo'
import SimpleReview from './references'
import CertificationsDemo from './certifications'
import GradientButton from '../base/GradientButton'
import { FiZap } from "react-icons/fi";
import { Link } from 'react-router-dom'




export const DemoSolution = () => {

    const [label, setLabel] = useState('Info')
    const [step, setStep] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const STEPS = [
        { message: 'Esta es la demo de digitalando, aqui verás algunos de los conceptos básicos que puedes ver en nuestro portal.', submenssage: 'Podrás navegar por las diferentes secciones con los botones de arriba.' },
        { message: 'La pantalla principal es para el resumen de la información más importante de la solución o servicio', submenssage: 'Aqui podrás ver su web y descripción. Puedes contactar con el responsable de la solución, asi como ver tanto funcionalidad como paises y lenguajes en los que esta disponible la solución o servicio.' },
        { message: 'Puedes ver la información de los servicios que tienen partner con esta solución. Verás tanto el tipo de servicio, como lenguajes  y paises en los que está disponible.', submenssage: 'Podrás acceder directamente a la pagina del servicio con el boton de detalles.' },
        { message: 'Puedes pedir una demo directamente con el responsable de la solución, tanto a traves del correo electrónico, como por la propia web', },
        { message: 'Puedes descargar manuales de formación de cualquier tipo. Estos manuales los subirá la solucion o servicio para poder formarse en su utilización', },
        { message: 'Puedes comprar referencias para que la solución tenga opiniones reales sobre los clientes', },
        { message: 'Puedes obtener certificaciones de la solución para posicionarte de una mejor manera en el mercado laboral', },
        { message: 'Gracias por probar la demo de digitalando, esperamos que te haya sido de ayuda. Si tienes alguna duda, puedes contactar con nosotros a través de nuestro correo electrónico.' }
    ]

    const LINKS = [
        { label: 'Info', },
        { label: 'Descubrir partners', },
        { label: 'Pedir demo', },
        { label: 'Descargar manuales', },
        { label: 'Comprar referencias', },
        { label: 'Obtener certificaciones', },
    ];

    const handleStep = (index) => {
        if (index <= 1) {
            setStep(step + 1)
        } else if (index === 2 && label === 'Descubrir partners') {
            setStep(3)
        } else if (index === 3 && label === 'Pedir demo') {
            setStep(4)
        } else if (index === 4 && label === 'Descargar manuales') {
            setStep(5)
        } else if (index === 5 && label === 'Comprar referencias') {
            setStep(6)
        } else if (index === 6 && label === 'Obtener certificaciones') {
            setStep(7)
        }
    }

    const canStep = (index) => {
        if (index <= 1) {
            return true
        } else if (index === 2 && label === 'Descubrir partners') {
            return true
        } else if (index === 3 && label === 'Pedir demo') {
            return true
        } else if (index === 4 && label === 'Descargar manuales') {
            return true
        } else if (index === 5 && label === 'Comprar referencias') {
            return true
        } else if (index === 6 && label === 'Obtener certificaciones') {
            return true
        }
        return false
    }

    const handleLabel = (link, index) => {
        setLabel(link.label)
        if (step >= 6) {
            setStep(index + 1)
        }
    }
    console.log(step)
    return (
        <Box>
            <CustomToast
                message={STEPS[step].message}
                submenssage={STEPS[step].submenssage}
                onClose={() => { }}
                setStep={() => { handleStep(step) }}
                canStep={canStep(step)}
            />
            <Center w='full' bg={COLORS.secondary} color='gray.600'>Estas viendo una demo con datos de prueba</Center>
            <Flex pt={10} w='full' justify={'space-evenly'} mt={4}
                pb={5}
            >
                {LINKS.map((link, index) => (
                    <Text
                        key={link.label}
                        textAlign='center'
                        borderWidth={1}
                        w={180}
                        py={1}
                        px={2}
                        fontSize={13}
                        rounded='md'
                        bgColor={label === link.label ? COLORS.primary : 'white'}
                        onClick={() => { handleLabel(link, index) }}
                        color={label === link.label ? 'white' : 'black'}
                        cursor={index + 1 > step ? 'not-allowed' : 'pointer'}
                        opacity={index + 1 > step ? 0.3 : 1}
                    >
                        {link.label}
                    </Text>

                ))}
            </Flex>
            <Box opacity={step === 0 ? 0.2 : 1}>
                {(step <= 1 || (label !== 'Descubrir partners' && step === 2)) && <SolutionDetailDemo />}
                {(step === 2 && label === 'Descubrir partners' || (step === 3 && label !== 'Pedir demo')) && <ServicesTableDemo />}
                {(step === 3 && label === 'Pedir demo' || (step === 4 && label !== 'Descargar manuales')) && <AskForDemoComponent />}
                {(step === 4 && label === 'Descargar manuales' || (step === 5 && label !== 'Comprar referencias')) && <Manualsdemo />}
                {(step === 5 && label === 'Comprar referencias' || (step === 6 && label !== 'Obtener certificaciones')) && <SimpleReview />}
                {(step === 6 && label === 'Obtener certificaciones' || (step === 7 && label !== 'Obtener certificaciones')) && <CertificationsDemo />}
                {step === 7 &&
                    <Center pt={5} flexDir='column' gap={4}>
                        <Text fontSize={26} fontWeight='bold'>Has terminado la demo 🎉</Text>
                        <Text>Ahora puedes probar por ti mismo...</Text>
                        <Link to={'/search/'}>
                            <GradientButton label='Ir a probar' type={'green'} icon={FiZap} />
                        </Link>
                    </Center>}

            </Box>
        </Box >
    )
}
