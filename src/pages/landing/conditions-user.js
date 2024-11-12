import React, { useEffect } from 'react'
import {
    Heading,
    Box,
    Text,
    Button,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react'
import Navbar from '../../components/base/navbar'
import FooterLanding from '../../components/base/landing/footer'

const ConditionsUserPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Box>
            <Heading textAlign="center" fontFamily="Montserrat" fontWeight="bold" mt={10}>
                Condiciones Generales de Usuario
            </Heading>

            <Box mt={8} p={4}>
                {/* Section 1: General Conditions */}
                <Heading as="h2" size="lg" mt={6}>1. Condiciones Generales de los Usuarios</Heading>

                {/* Subsection 1: General Information */}
                <Heading as="h3" size="md" mt={4}>1. Información General</Heading>
                <Text mt={2}>
                    Digitalando es el nombre comercial de Digitalando xxxx, sociedad constituida
                    de acuerdo con la legislación española, con domicilio social en la Plaza Ramón y
                    Cajal, número 6, 03801, con NIF número Bxxxxxxx, inscrita en el Registro Mercantil
                    de Alicante, al Tomo xxx, Folio xx, Hoja xxxx y con dirección de correo electrónico xxxxxx.
                </Text>

                {/* Subsection 2: Purpose */}
                <Heading as="h3" size="md" mt={4}>2.  Objeto</Heading>
                <Text mt={2}>
                    Las presentes Condiciones Generales de los Usuarios regulan el acceso, uso,
                    navegación y/o registro en el Sitio bajo el dominio www.digitalando.org y App,
                    así como la relación de aquellos con Digitalando.
                </Text>
                <Text mt={2}>
                    De igual modo, este punto contiene la regulación de la descarga y uso de textos,
                    imágenes o cualquier otra información a la que se pueda acceder a través del Sitio y la App.
                </Text>

                {/* Subsection 3: Eligibility */}
                <Heading as="h3" size="md" mt={4}>3. Elegibilidad</Heading>
                <Text mt={2}>
                    Tanto el Sitio como la App, como los Servicios, están limitados a usuarios mayores de
                    18 años; y más en concreto a empresas y/o profesionales que buscan soluciones digitales
                    para su actividad profesional.
                </Text>
                <Text mt={2}>
                    Las personas físicas que se registren en representación de una empresa o como profesionales
                    deben tener la capacidad legal y la autoridad necesaria para actuar en nombre de dicha empresa
                    o en su propia capacidad.
                </Text>
                <Text mt={2}>
                    Digitalando se reserva el derecho de verificar en cualquier momento el cumplimiento de estos
                    requisitos de elegibilidad. En caso de detectar que un Usuario no cumple con los mismos,
                    Digitalando se reserva el derecho de suspender o cancelar su cuenta de manera inmediata y
                    sin previo aviso.
                </Text>

                {/* Subsection 4: Access and Acceptance */}
                <Heading as="h3" size="md" mt={4}>4. Acceso y Aceptación de las Condiciones Generales</Heading>
                <Text mt={2}>
                    Al acceder y utilizar el Sitio y la App de Digitalando, aceptas cumplir con las presentes
                    Condiciones Generales, así como con cualquier otra política, guía o reglamentación que se pueda
                    implementar en el futuro. Es fundamental que el uso del Servicio se realice de manera legal,
                    ética y conforme a las normas de conducta aceptadas.
                </Text>

                {/* Subsection 4.1: User Obligations */}
                <Heading as="h4" size="sm" mt={4}>1.4.1. Obligaciones y Responsabilidades de los Usuarios</Heading>
                <Text mt={2}>1. Acceso y Navegación</Text>
                <Text ml={4}>• Puedes navegar por el Sitio y App de Digitalando sin necesidad de registrarte y de forma gratuita.</Text>
                <Text ml={4}>• Si decides registrarte, es obligatorio utilizar credenciales auténticas y seguras. Eres responsable de mantener la confidencialidad de tus datos de acceso.</Text>

                {/* More subsections following the same format... */}

                {/* Section 2: Account Registration */}
                <Heading as="h2" size="lg" mt={6}>2. Registro de Cuenta</Heading>
                <Text mt={2}>
                    En el supuesto de que vayas a hacer uso de alguna de las Utilidades que necesiten registro,
                    deberás registrarte creando un Perfil de Usuario con su contraseña personal e intransferible.
                </Text>
                <Text mt={2}>
                    Dependiendo de las Utilidades que quieras aprovechar podrás registrarte como Seeker, Corporate
                    Buyer o Corporate Seller. Las dos primeras modalidades son gratuitas, no así la modalidad de
                    Corporate Seller.
                </Text>

                <Box mt={5}>
                    <Heading as="h2" size="md" mt={5}>
                        6. Propiedad Intelectual
                    </Heading>

                    <Heading as="h3" size="sm" mt={4}>
                        6.1 Contenido de Digitalando
                    </Heading>
                    <Text mt={2}>
                        Digitalando posee y retiene todos los derechos de propiedad intelectual e industrial
                        sobre el contenido disponible en su sitio web y aplicación móvil, incluyendo, entre
                        otros, textos, gráficos, logotipos, imágenes, clips de audio, descargas digitales, datos y software.
                    </Text>

                    <Heading as="h3" size="sm" mt={4}>
                        6.2 Uso Autorizado
                    </Heading>
                    <Text mt={2}>
                        Se concede a los usuarios una licencia limitada, revocable, no exclusiva y no sublicenciable para acceder y
                        utilizar el contenido de Digitalando únicamente para fines personales y no comerciales relacionados con el uso de los
                        servicios ofrecidos por Digitalando.
                    </Text>

                    <Heading as="h3" size="sm" mt={4}>
                        6.3 Contenido del Usuario
                    </Heading>
                    <Text mt={2}>
                        Los usuarios conservan todos los derechos de propiedad intelectual e industrial sobre el contenido que ellos mismos
                        crean y suben a Digitalando. Al cargar contenido, los usuarios otorgan a Digitalando una licencia mundial, irrevocable
                        y no exclusiva para usar dicho contenido.
                    </Text>

                    <Heading as="h3" size="sm" mt={4}>
                        6.4 Protección y Cumplimiento
                    </Heading>
                    <Text mt={2}>
                        Digitalando se reserva todos los derechos no expresamente otorgados. Los usuarios se comprometen a no utilizar,
                        copiar o explotar de otra manera el contenido de Digitalando sin el consentimiento previo por escrito.
                    </Text>

                    <Heading as="h3" size="sm" mt={4}>
                        6.5 Reclamaciones por Infracción
                    </Heading>
                    <Text mt={2}>
                        En caso de que un usuario o tercero considere que su trabajo ha sido copiado de manera que infringe derechos de
                        autor u otros derechos de propiedad intelectual, se debe notificar a Digitalando para tomar las medidas correspondientes.
                    </Text>

                    <Heading as="h3" size="sm" mt={4}>
                        6.6 Modificaciones y Actualizaciones
                    </Heading>
                    <Text mt={2}>
                        Digitalando se reserva el derecho de modificar o actualizar estas disposiciones en cualquier momento. Es responsabilidad
                        de los usuarios revisar periódicamente estas disposiciones.
                    </Text>

                    <Heading as="h2" size="md" mt={5}>
                        7. Privacidad y Cookies
                    </Heading>
                    <Text mt={2}>
                        En Digitalando, valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Consulta nuestra Política
                        de Privacidad y Política de Cookies para obtener más información sobre cómo gestionamos tus datos.
                    </Text>

                    <Heading as="h2" size="md" mt={5}>
                        8. Declaraciones y Garantías
                    </Heading>
                    <Text mt={2}>
                        Al utilizar los servicios de Digitalando, declaras y garantizas que:
                    </Text>
                    <UnorderedList mt={2}>
                        <ListItem>Tienes plena capacidad y autoridad para aceptar estas Condiciones Generales.</ListItem>
                        <ListItem>
                            La información que proporcionas no infringe los derechos de terceros ni es contraria a la ley.
                        </ListItem>
                        <ListItem>Cumples con todas las leyes y normativas aplicables.</ListItem>
                        <ListItem>Tus sistemas están libres de virus o malware que puedan comprometer la seguridad.</ListItem>
                    </UnorderedList>

                    <Text mt={2}>
                        Por parte de Digitalando, garantizamos que tenemos la autoridad para ofrecer los servicios descritos y que cumplimos con todas
                        las normativas aplicables.
                    </Text>

                    <Heading as="h2" size="md" mt={5}>
                        9. Cese de la Cuenta
                    </Heading>

                    <Heading as="h3" size="sm" mt={4}>
                        9.1 Terminación por parte de Digitalando
                    </Heading>
                    <Text mt={2}>
                        Nos reservamos el derecho de suspender o finalizar el acceso de un usuario a nuestros servicios en caso de actividades que
                        violen nuestros términos.
                    </Text>

                    <Heading as="h3" size="sm" mt={4}>
                        9.2 Terminación Solicitada por el Usuario
                    </Heading>
                    <Text mt={2}>
                        Los usuarios pueden cancelar su cuenta en cualquier momento enviando una solicitud. Procesaremos la solicitud en un plazo
                        de cinco días hábiles.
                    </Text>

                    <Heading as="h3" size="sm" mt={4}>
                        9.3 Instrucciones para los Sellers
                    </Heading>
                    <Text mt={2}>
                        Los Sellers deben seguir el procedimiento detallado en las Condiciones Generales de los Sellers para terminar su relación con
                        Digitalando.
                    </Text>

                    <Heading as="h2" size="md" mt={5}>
                        10. Formas de Pago del Sitio
                    </Heading>
                    <Text mt={2}>
                        Todos los pagos en el sitio y la app se realizarán a través de nuestra plataforma de pago propia.
                    </Text>

                    <Heading as="h2" size="md" mt={5}>
                        11. Contratación con Terceros
                    </Heading>
                    <Text mt={2}>
                        Digitalando no se responsabiliza de las relaciones contractuales o extracontractuales que establezcas con terceros anunciados
                        en nuestro sitio.
                    </Text>
                </Box>
            </Box>

            <FooterLanding />
        </Box>
    );
};

export default ConditionsUserPage;
