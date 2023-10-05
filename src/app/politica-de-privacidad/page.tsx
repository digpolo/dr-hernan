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
                <h3 className="my-5 text-green py-14 font-semibold text-[30px]">Protección de datos</h3>

                <p className='font-extralight text-[16px]'>Amapola Corsets nos comprometemos a proteger la privacidad de tus datos personales. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos tus datos cuando utilizas nuestros servicios y nuestro sitio web www.amapolacorsets.com</p>

                <h4 className="py-14 font-semibold text-[16px] text-green">1. Recopilación de datos</h4>
                <ul className='font-extralight text-[16px]'>
                    <li>a. Datos de Identificación Personal: Cuando realizas una compra en nuestro sitio web, recopilamos información como tu nombre, dirección de correo electrónico, dirección de envío y número de teléfono.</li>
                    <li>
                        b. Información de Pago: Si decides comprar productos, recopilamos información de pago, como números de tarjeta de crédito o débito. Sin embargo, esta información no se almacena en nuestros sistemas y se procesa a través de un servicio de pago seguro.
                    </li>
                    <li>c. Información de Uso: Recopilamos información sobre cómo interactúas con nuestro sitio web, incluyendo las páginas que visitas, el tiempo que pasas en ellas y los productos que visualizas.</li>
                </ul>

                <h4 className="py-14 font-semibold text-[16px] text-green">2. Uso de tus Datos Personales</h4>
                <ul className='font-extralight text-[16px]'>
                    <li>a. Utilizamos tus datos personales para procesar tus pedidos, proporcionarte información sobre el estado de tus pedidos y responder a tus consultas.</li>
                    <li>b. Podemos utilizar tu información para mejorar nuestros productos y servicios, personalizar tu experiencia en nuestro sitio web y ofrecerte promociones y ofertas especiales.</li>
                    <li>c. No compartiremos tus datos personales con terceros, excepto cuando sea necesario para cumplir con obligaciones legales o para llevar a cabo servicios como el procesamiento de pagos y la entrega de productos.</li>
                </ul>

                <h4 className="py-14 font-semibold text-[16px] text-green">3. Protección de Datos</h4>
                <p className='font-extralight text-[16px]'>
                    a. Implementamos medidas de seguridad adecuadas para proteger tus datos personales y prevenir el acceso no autorizado, la divulgación, la alteración o la destrucción de tus datos.
                </p>
                <h4 className="py-14 font-semibold text-[16px] text-green">4. Cookies y Tecnologías Similares</h4>
                <p className='font-extralight text-[16px]'>
                    Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web. Puedes configurar tu navegador para rechazar todas las cookies o para recibir una notificación cuando se envíe una cookie. Sin embargo, ten en cuenta que algunas funciones del sitio pueden no funcionar correctamente sin cookies.

                </p>
                <h4 className="py-14 font-semibold text-[16px] text-green">5. Cambios en esta Política de Privacidad</h4>
                <p className='font-extralight text-[16px]'>
                    Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Cualquier cambio será efectivo inmediatamente después de su publicación en nuestro sitio web.
                </p>
                <h4 className="py-14 font-semibold text-[16px] text-green">6. Contacto</h4>
                <p className='font-extralight text-[16px]'>
                    Si tienes alguna pregunta o inquietud con respecto a nuestra política de privacidad, puedes ponerte en contacto con nosotros a través del siguiente número +57 3105307440

                </p>
            </div>
            <Footer />
        </section >
    )
}

export default page