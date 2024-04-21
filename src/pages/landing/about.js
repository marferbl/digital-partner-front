import { Box, Flex, Image, Center, Heading, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import FooterLanding from '../../components/base/landing/footer'
import Navbar from '../../components/base/navbar'

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Box>
            <Navbar />

            <Box pb={10}>
                <Heading textAlign={'center'} fontFamily='Montserrat' fontWeight={'bold'} mt={10}>
                    ¿Quiénes somos?
                </Heading>
                {/* <Center>
                <Link to="/">
                    <Image src={"/logo-digitalando.png"} height={14} pl={4} />
                </Link>
            </Center> */}
                <Box px={{ base: 3, md: 5, lg: 20 }} py={2} >
                    <Text fontWeight={'bold'} fontSize={20} mt={6} mb={3}>
                        ⦿ ¿Qué es digitalando?
                    </Text>
                    <Text>
                        Cuando hablamos de digitalando, la palabra comunidad es obligatoria. Lo que nació con pinceladas de comparador de soluciones y empresas de servicios, se ha convertido inevitablemente en una gran plataforma que pone el foco en la digitalización integral de la empresa. <br />

                        Woooow, la digitalización integral… ¿A qué te refieres exactamente?  Muy sencillo, en la imponente era digital (que muchas empresas no acaban de entender), existen necesidades tecnológicas de diferentes tipos, y no solo de búsqueda de soluciones, como intuyeron nuestros compis que llegaron años antes que nosotros. La digitalización integral incluye el asesoramiento para la implantación de cualquier solución, la oferta de todo tipo de servicio digital, la oferta de talento tecnológico (de forma permanente o por proyectos) y, por supuesto, los eventos más innovadores de interés público, ¡Todo en la misma plataforma!

                        <br /> <br />Alerta spoiler: Esta es la plataforma {';)'}

                    </Text>
                </Box>
                <Box px={{ base: 3, md: 5, lg: 20 }} bgColor={'gray.50'} my={2} pt={2} pb={8}>
                    <Text fontWeight={'bold'} fontSize={20} mt={6} mb={3}>
                        ⦿ ¿Por qué nace en este panorama?
                    </Text>
                    <Text>
                        El panorama actual es idóneo por muchas razones pero por una especialmente, ¿Cuándo suelen aparecer las ideas más rompedoras que llegan para quedarse? Pues desgraciadamente hemos tenido que esperar a uno de los cambios generacionales más relevantes en la escena profesional.<br />

                        Los nativos digitales empiezan a llegar a puestos directivos o a emprender sus propios proyectos, decididos a optimizar tiempos sin renunciar a los mejores resultados y de repente, en un entorno en el que todo está al alcance de un click se ven en la obligación de reuniones y procesos eternos con consultoras tecnológicas para tomar ciertas decisiones que acaban llegando tarde, poco contrastadas por el cliente y en absoluto neutrales entre todas las opciones existentes.

                        <br /> <br />Hasta hoy.
                    </Text>
                </Box>
                <Box px={{ base: 3, md: 5, lg: 20 }} py={2}>

                    <Text fontWeight={'bold'} fontSize={20} mt={6} mb={3}>
                        ⦿ ¿Quiénes son Iván y Marcos?
                    </Text>
                    <Text>
                        Son muchas cosas. Son amigos, primero que nada. Amigos con una ambición compartida desde hace muchos años: Poder cambiar el rumbo del sector con el que siempre han compartido su trayectoria profesional. <br /> <br />

                        Iván es sociólogo especializado en recursos humanos con experiencia en el desarrollo de negocio digital. Su trayectoria profesional se divide en dos partes muy marcadas: Una primera etapa dedicada a la selección de personal IT y una segunda muy relacionada con el mundo de las start-ups. <br />  <br />

                        Marcos es desarrollador, posibilidad por la que se decantó al acabar sus estudios de ingeniería informática y ADE. Su trayectoria profesional ha ido muy ligada al entorno start-up. Se trata de una persona con unas habilidades interpersonales equiparadas con su talento para el desarrollo. <br /> <br />

                        Desde luego, creo que cualquiera afirmaría que no se trata de personas al uso y que, en la mayoría de ocasiones, destacan por su forma de interpretar la realidad. Esta bomba de relojería no podía dejar indiferente a nadie y en fin, ¡Encantados de saludaros a todxs!

                    </Text>
                    <Center>
                        <Link to="/">
                            <Image src={"/photo-us.png"} h={40} mt={12} borderRadius={10} />
                        </Link>
                    </Center>
                </Box>
            </Box >
            <FooterLanding />
        </Box >
    )
}

export default AboutPage