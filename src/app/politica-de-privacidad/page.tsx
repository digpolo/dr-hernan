import React from 'react'
import NavBar from '@/components/nav-bar'
import NavBarPrivacy from '@/components/nav-bar-privacy'
import Footer from '@/components/footer'

const page = () => {
    return (
        <section>
            <NavBar />
            <NavBarPrivacy />
            <div className='mx-4'>
                <h3 className="my-5 text-green py-14 font-semibold text-[30px]">Política de privacidad</h3>

                <p className='font-extralight text-[16px]'>Agradecemos su confianza al elegir nuestros servicios odontológicos y su interés en nuestra página web. La privacidad de nuestros pacientes y visitantes es de suma importancia para nosotros, y estamos comprometidos en protegerla. Por lo tanto, hemos establecido esta Política de Privacidad para informarle cómo recopilamos, utilizamos y protegemos la información que nos proporciona a través de nuestro formulario en línea.</p>

                <h4 className="py-14 font-semibold text-[16px] text-green">1. Recopilación de Información</h4>
                <ul className='font-extralight text-[16px]'>
                    <p>Cuando usted utiliza nuestro formulario en línea para programar una cita o enviar una consulta, recopilamos cierta información personal, que puede incluir: nombre, apellido, número de teléfono celular, motivo de consulta
                        Esta información es esencial para brindarle el servicio adecuado y mantener un registro de sus necesidades odontológicas.
                    </p>
                </ul>

                <h4 className="py-14 font-semibold text-[16px] text-green">2. Uso de la información</h4>
                <ul className='font-extralight text-[16px]'>
                    <p>La información personal que recopilamos se utiliza únicamente para los siguientes propósitos:</p>
                    <li>Programar y confirmar citas odontológicas.</li>
                    <li>Comunicarnos con usted en relación con su cita o consulta.</li>
                    <li>Mantener un registro de su historial de visitas y tratamientos dentales.</li>
                    <li>Mejorar nuestros servicios y su experiencia en nuestro sitio web</li>
                </ul>

                <h4 className="py-14 font-semibold text-[16px] text-green">3. Protección de la Información</h4>
                <p className='font-extralight text-[16px]'>
                Nos comprometemos a proteger su información personal. Implementamos medidas de seguridad adecuadas para proteger su información contra el acceso no autorizado, la divulgación, la alteración o la destrucción. Solo el personal autorizado tiene acceso a su información personal, y se les exige mantenerla confidencial.
                </p>

                <h4 className="py-14 font-semibold text-[16px] text-green">4. Divulgación de los datos</h4>
                <p className='font-extralight text-[16px]'>
                    Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web. Puedes configurar tu navegador para rechazar todas las cookies o para recibir una notificación cuando se envíe una cookie. Sin embargo, ten en cuenta que algunas funciones del sitio pueden no funcionar correctamente sin cookies.

                </p>
                <h4 className="py-14 font-semibold text-[16px] text-green">5. Cambios en esta Política de Privacidad</h4>
                <p className='font-extralight text-[16px]'>
                    Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Cualquier cambio será efectivo inmediatamente después de su publicación en nuestro sitio web.
                </p>
                <h4 className="py-14 font-semibold text-[16px] text-green">6. Contacto</h4>
                <p className='font-extralight text-[16px]'>
                Le agradecemos su confianza en nosotros y su elección de utilizar nuestros servicios. Estamos comprometidos en mantener la privacidad y seguridad de su información personal.
                </p>
            </div>
            <Footer />
        </section >
    )
}

export default page