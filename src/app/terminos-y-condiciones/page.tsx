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
                <h3 className="my-5 text-green py-14 font-semibold text-[30px]">Terminos y condiciones</h3>

                <p className='font-extralight text-[16px]'>Al utilizar nuestra aplicación, los usuarios aceptan los siguientes términos y condiciones:</p>

                <h4 className="py-14 font-semibold text-[16px] text-green">1. Aceptación de los Términos y Condiciones</h4>
                <p className='font-extralight text-[16px]'>
                    Al acceder y utilizar este sitio web de amapola corsets, aceptas cumplir y estar sujeto a los siguientes términos y condiciones de uso. Si no estás de acuerdo con estos términos y condiciones, por favor, no utilices este sitio.
                </p>

                <h4 className="py-14 font-semibold text-[16px] text-green">2. Uso del Sitio Web</h4>
                <p className='font-extralight text-[16px]'>
                    Te comprometes a proporcionar información precisa y completa al realizar pedidos en este sitio web, no puedes utilizar este sitio web con fines ilegales o no autorizados.
                </p>
                <h4 className="py-14 font-semibold text-[16px] text-green">3. Compras y Pagos</h4>
                <p className='font-extralight text-[16px]'>
                    Aceptamos los siguientes métodos de pago, transferencia por PSE, Efecty, los pedidos están sujetos a disponibilidad y confirmación. Nos reservamos el derecho de cancelar o rechazar cualquier pedido en cualquier momento por cualquier motivo.
                </p>
                <h4 className="py-14 font-semibold text-[16px] text-green">4. Envío y Entrega</h4>
                <p className='font-extralight text-[16px]'>
                    No nos hacemos responsables de retrasos en la entrega causados por factores fuera de nuestro control.
                </p>
                <h4 className="py-14 font-semibold text-[16px] text-green">5.  Propiedad Intelectual</h4>
                <p className='font-extralight text-[16px]'>
                    Todos los contenidos de este sitio web, incluyendo pero no limitado a textos, imágenes, logotipos y diseños, están protegidos por derechos de autor y otros derechos de propiedad intelectual.

                    No puedes utilizar, reproducir o distribuir estos contenidos sin autorización previa por escrito.

                </p>
                <h4 className="py-14 font-semibold text-[16px] text-green">6. Modificaciones de los Términos y Condiciones</h4>
                <p className='font-extralight text-[16px]'>
                    Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en este sitio web.
                </p >
                <h4 className="py-14 font-semibold text-[16px] text-green">7. Contacto</h4>
                <p className='font-extralight text-[16px]'>
                    Si tienes alguna pregunta o inquietud con respecto a estos términos y condiciones, puedes ponerte en contacto con nosotros a través de nuestro numero de WhatsApp +57 3105307440.


                </p>
            </div>
            <Footer />
        </section>
    )
}

export default page