import React, { useEffect } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
    Heading
} from '@chakra-ui/react'
import Navbar from '../../components/base/navbar'
import FooterLanding from '../../components/base/landing/footer'

const FaqsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const SEARCH_QUESTIONS = [
        {
            title: '¿Cómo puedo hacer una búsqueda?',
            paragraph: <div>
                Existen dos formas de realizar una búsqueda para poder obtener los resultados deseados:

                La primera de ellas es a través del buscador integrado con IA, donde podrás buscar por cualquier información que tengas del resultado que desees obtener (nombre, descripción, funcionalidad, país, idioma, etc.)

                La segunda de ellas es a través del test, donde podrás ajustar todos los filtros necesarios respondiendo algunas preguntas sobre las características que debe cumplir la solución/servicio/talento/evento que desees encontrar.
            </div>
        },
        {
            title: '¿Por qué está integrada la IA en la plataforma?',
            paragraph:
                <div>
                    La IA se integró en el buscador por una razón muy sencilla, en todos los sitios web de comparación de solución era muy difícil alcanzar los resultados deseados si no tenías claro cuál era el nombre de la solución o podías dar una descripción muy detallada sobre sus funcionalidades.
                    De este modo hemos conseguido que no tengas que tener tanta claridad para poder hacer una búsqueda y que los resultados se ajusten a tus necesidades.
                </div>
        },
        {
            title: '¿Cómo se ordenan las búsquedas?',
            paragraph:
                <div>
                    El orden de resultados siempre irá basado en el NPS. En primer lugar se ordenarán por NPS de mayor a menor las que ya tengan NPS general; en segundo lugar irán de mayor a menor las que no tengan NPS general pero tengan más de 10 referencias; en tercer lugar aparecerán de mayor a menor NPS las que tengan menos de 10 referencias y, en último lugar, aparecerán el resto de soluciones y/o servicios que todavía no tengan referencias.
                </div>
        },
    ]

    const REFERENCES_QUESTIONS = [
        {
            title: '¿Qué es una referencia?',
            paragraph: <div>
                Una referencia es un “business success story” en formato de texto. El documento de referencia descubre una serie de datos de la experiencia del cliente que puede ser de gran utilidad para otros clientes potenciales que están valorando la implantación de una solución o la contratación de una empresa de servicios. Se pueden comprar dentro del perfil de la solución y/o de la empresa de servicios.
                <br /><br />
                Es una parte fundamental de la plataforma puesto que permite a los usuarios adquirir opiniones de clientes valorando aspectos positivos y negativos de la solución y/o empresa de servicios que podrían ayudar en la toma de decisiones.
            </div>
        },
        {
            title: '¿Cómo puedo dar una referencia a una solución?',
            paragraph: <div>
                Debe ser el propio administrador de la solución el que te mande el formulario de referencia para que puedas completarlo. En el caso de estar interesado puedes ponerte en contacto con la empresa de servicios o la solución y expresarles el interés de poner una referencia.
            </div>
        },
        {
            title: '¿Cómo puedo solicitar una referencia a uno de mis clientes?',
            paragraph: <div>
                Dentro de tu corporate, en el apartado de referencias, existe la opción de solicitar reseña. Es importante destacar que un requisito fundamental para solicitar la reseña es que el cliente al que deseas solicitarla esté dado de alta en la plataforma como corporate.
            </div>
        },
        {
            title: '¿Qué relación tienen las referencias con el NPS?',
            paragraph: <div>
                Las referencias son el medio por el que se mide el NPS de la solución y/o la empresa de servicios, lo que hace que al tener más referencias, tu solución/empresa de servicios tenga un mucho mejor posicionamiento por la política de orden de resultados de la plataforma.
            </div>
        },
        {
            title: '¿Qué beneficios tiene tener referencias en el perfil?',
            paragraph: <div>
                Además de que es la única forma para conseguir un mejor posicionamiento en los resultados de búsqueda, también puede suponer un ahorro para quién las reciba, puesto que dentro la política de la plataforma se premia a las soluciones/empresas de servicios que más referencias tengan y más posibles clientes estén interesados en adquirir.
            </div>
        },
        {
            title: '¿Por qué las referencias son de pago?',
            paragraph: <div>
                Las referencias son de pago porque se considera que aportan un valor diferencial que va mucho más allá de una reseña, por este motivo, los posibles clientes de una solución/empresa de servicios, deberán adquirir un paquete de “spins” a un precio muy competitivo para poder investigar acerca de la opinión y la experiencia de clientes actuales de la solución y/o de la empresa de servicios en cuestión.
            </div>
        }
    ];

    const CORPORATE_QUESTIONS = [
        {
            title: '¿Qué encuentro dentro de mi pull de corporate?',
            paragraph: <div>
                Aunque las funcionalidades son muchas, las podemos dividir en dos grupos muy diferenciados. En primer lugar, dentro del pull de la corporate se levantan los anuncios de: Soluciones, servicios y/o eventos. En segundo lugar, también podremos encontrar un pequeño software de gestión que incluye: Gestión de mi equipo, gestión de licencias y ofertas de empleo publicadas.
                <br /><br />
                Todas estas funcionalidades aparecerán habilitadas en el pull una vez dada de alta la corporate por parte del usuario al que la plataforma considerará “superadmin” de la cuenta de corporate.
            </div>
        },
        {
            title: '¿Por qué crear una corporate es de pago?',
            paragraph: <div>
                El valor que ofrece la plataforma a las corporates requería de una tarifa anual para poder brindar un servicio de calidad. De todos modos, dentro del precio va incluido un anuncio de solución y/o empresa de servicios, además de la posibilidad de anunciar eventos de forma gratuita y hacer uso del software de gestión interno.
            </div>
        },
        {
            title: '¿En qué casos debo crear una corporate?',
            paragraph: <div>
                La corporate debe crearse en todos los casos en los que se pretenda poner un anuncio de cualquier tipo dentro del catálogo de la plataforma y, además, también en los casos en los que, aunque la empresa no quiera anunciar nada, esté interesada en acceder al software de gestión interno y poder adquirir referencias de otras soluciones y/o empresas de servicio.
            </div>
        },
        {
            title: '¿Cómo funciona la gestión de licencias?',
            paragraph: <div>
                La gestión de licencias es una funcionalidad que se puede encontrar dentro del pull de corporate y que permite introducir todas las licencias activas de nuestra compañía y tener actualizados datos como: nº de licencias, precio, fechas de vencimiento, métodos de pago, etc.
                <br /><br />
                Toda esta información debe introducirse, por el momento, de forma manual por el “superadmin” de la corporate, pero genera un gran valor de cara a hacer un seguimiento de los gastos de la empresa en este ámbito.
            </div>
        },
        {
            title: '¿Qué puedo hacer con la funcionalidad de “Mi equipo”?',
            paragraph: <div>
                “Mi equipo” es otra de las funcionalidades que podemos encontrar en el pull de la corporate. Esta no se trata de una funcionalidad manual, sino que permite que todos los empleados de una empresa puedan darse de alta en digitalando y, una vez rellenados sus datos del “digital profile”, su empresa pueda tener sus CV’s actualizados en todo momento y valorar necesidades como: formaciones, nuevas incorporaciones, necesidades por proyectos, etc.
            </div>
        },
        {
            title: '¿Quién tiene acceso a la gestión de la corporate?',
            paragraph: <div>
                La gestión del pull, una vez dada de alta la corporate, será, de forma automática, tarea del usuario que la haya dado de alta (“superadmin”). Este perfil puede, más tarde, crear un organigrama de permisos para otros usuarios de su empresa. Esta gestión podrá ser modificable en cualquier momento por cambios internos de la empresa, es decir, se podrán nombrar otros “superadmin” o modificar los permisos de cada usuario, incluso cortar todos los accesos a determinados perfiles por un cambio profesional u otra problemática de cualquier tipo.
                <br /><br />
                Por ejemplo, permitir al director de RRHH administrar la gestión de ofertas publicadas o la gestión de la funcionalidad de “Mi equipo”. O permitir al financiero acceder a la gestión de “Mis licencias” para valorar los costes que suponen a la empresa.
            </div>
        }
    ];






    return (
        <Box>
            <Navbar />
            <Heading textAlign={'center'} fontFamily='Montserrat' fontWeight={'bold'} mt={10}>
                Preguntas frecuentes
            </Heading>
            <Box p={10}>
                <Text fontSize={20} fontWeight='bold'>
                    Búsqueda
                </Text>
                <Accordion>
                    {SEARCH_QUESTIONS.map(e => (
                        <AccordionItem>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                    {e.title}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                {e.paragraph}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
            <Box px={10} pb={10}>

                <Text fontSize={20} fontWeight='bold'>
                    Referencias
                </Text>
                <Accordion>
                    {REFERENCES_QUESTIONS.map(e => (
                        <AccordionItem>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                    {e.title}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                {e.paragraph}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
            <Box px={10} pb={10}>

                <Text fontSize={20} fontWeight='bold'>
                    Corporate
                </Text>
                <Accordion>
                    {CORPORATE_QUESTIONS.map(e => (
                        <AccordionItem>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                    {e.title}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                {e.paragraph}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
            <FooterLanding />
        </Box>
    )
}

export default FaqsPage