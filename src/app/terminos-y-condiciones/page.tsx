import React from 'react'
import NavBar from '@/components/nav-bar'
import NavBarPrivacy from '@/components/nav-bar-privacy'
import Footer from '@/components/footer'

const page = () => {
    return (
        <section>
     
            <NavBarPrivacy />
            <div className='mx-4'>
                <h3 className="my-5 text-green py-14 font-semibold text-[30px]">Terminos y condiciones</h3>

                <p className='font-extralight text-[16px]'>Al utilizar nuestra aplicación, los usuarios aceptan los siguientes términos y condiciones:</p>

                <h4 className="py-14 font-semibold text-[16px] text-green">1. Aceptación de los Términos y Condiciones</h4>
                <ul className='font-extralight text-[16px]'>
                    <li>Propósito: La Aplicación está diseñada para proporcionar información sobre nuestros servicios odontológicos y facilitar la programación de citas y consultas.</li>
                    <li>Acceso y Cuentas: Para utilizar ciertas funciones de la Aplicación, es posible que deba crear una cuenta. Usted es responsable de mantener la confidencialidad de su información de inicio de sesión y de cualquier actividad que ocurra en su cuenta.</li>
                    <li>Uso Apropiado: Usted se compromete a utilizar la Aplicación de manera legal y apropiada, sin violar ninguna ley aplicable ni infringir los derechos de terceros.</li>
                </ul>

                <h4 className="py-14 font-semibold text-[16px] text-green">2. Información y Privacidad</h4>
                <ul className='font-extralight text-[16px]'>
                    <li>Política de Privacidad: Su uso de la Aplicación está sujeto a nuestra Política de Privacidad, que describe cómo recopilamos, utilizamos y protegemos su información personal. Lea nuestra Política de Privacidad detenidamente.</li>
                    <li>Precisión de la Información: Nos esforzamos por proporcionar información precisa en la Aplicación, pero no garantizamos la precisión, integridad o actualidad de la información proporcionada.</li>
                </ul>

                <h4 className="py-14 font-semibold text-[16px] text-green">3. Citas y consultas</h4>
                <ul className='font-extralight text-[16px]'>
                    <li>Programación: Puede utilizar la Aplicación para programar citas odontológicas y enviar consultas. Toda cita está sujeta a la disponibilidad de horarios.</li>
                    <li>Confirmación: Le enviaremos una confirmación de su cita o consulta a través de la información de contacto que proporcione. Asegúrese de que su información de contacto sea precisa.</li>
                </ul>

                <h4 className="py-14 font-semibold text-[16px] text-green">4. Limitación de Responsabilidad</h4>
                <p className='font-extralight text-[16px]'>
                    Uso a su Propio Riesgo: El uso de la Aplicación es bajo su propio riesgo. No nos hacemos responsables por daños directos, indirectos, incidentales o consecuentes que puedan surgir del uso de la Aplicación.
                    Modificaciones y Terminación

                    Nos reservamos el derecho de modificar, suspender o descontinuar la Aplicación en cualquier momento sin previo aviso. También podemos terminar o suspender su acceso a la Aplicación en caso de incumplimiento de estos Términos y Condiciones.

                </p>
                <h4 className="py-14 font-semibold text-[16px] text-green">5.  Ley aplicable</h4>
                <p className='font-extralight text-[16px]'>
                    Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes vigentes en Colombia

                </p>
                <h4 className="py-14 font-semibold text-[16px] text-green">6. Modificaciones de los Términos y Condiciones</h4>
                <p className='font-extralight text-[16px]'>
                    Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en este sitio web.
                </p >
                <h4 className="py-14 font-semibold text-[16px] text-green">7. Contacto</h4>
                <p className='font-extralight text-[16px]'>
                    Si tienes alguna pregunta o inquietud con respecto a estos términos y condiciones, puedes ponerte en contacto con nosotros a través de nuestros canales de comunicación.
                </p>
            </div>
          
        </section>
    )
}

export default page