import React from 'react'
import NavBar from '@/components/nav-bar'
import NavBarPrivacy from '@/components/nav-bar-privacy'
import Footer from '@/components/footer'

const page = () => {
    return (
        <section>
          
            <NavBarPrivacy />
            <div className='mx-4'>
                <h3 className="my-5 text-green py-14 font-semibold text-[30px]">Políticas de cookies</h3>

                <p className='font-extralight text-[16px]'>Esta Política de Cookies describe cómo Dr. Hernan Jojoa utilizamos cookies y tecnologías similares en nuestra aplicación móvil y sitio web. Al usar la Aplicación, usted acepta el uso de cookies de acuerdo con esta política.</p>

                <h4 className="py-14 font-semibold text-[16px] text-green">1. ¿Qué son las Cookies?</h4>
                <p className='font-extralight text-[16px]'>
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita una página web o utiliza una aplicación. Estos archivos permiten que el sitio web o la aplicación recuerde sus acciones y preferencias durante un período de tiempo, lo que mejora su experiencia de navegación.
                </p>

                <h4 className="py-14 font-semibold text-[16px] text-green">2. ¿Cómo Utilizamos las Cookies?</h4>
                <p className='font-extralight text-[16px]'>
                Utilizamos cookies para varios fines, que incluyen:
                </p>
                <ul className='font-extralight text-[16px]'>
                    <li>Cookies de Sesión: Estas cookies se eliminan automáticamente cuando cierra la Aplicación. Son temporales y se utilizan para almacenar información temporal, como su carrito de compras en línea.</li>
                    <li>Rendimiento y Analíticas: Utilizamos cookies para recopilar información sobre cómo los usuarios interactúan con la Aplicación. Esto nos ayuda a mejorar la calidad y el rendimiento de nuestros servicios.</li>
                    <li>Publicidad: Podemos utilizar cookies para mostrar anuncios personalizados y relevantes en la Aplicación y en otros sitios web y aplicaciones.</li>
                </ul>
                

                <h4 className="py-14 font-semibold text-[16px] text-green">3. Tipo de cookies que utilizamos</h4>
                <ul className='font-extralight text-[16px]'>
                    <li>Funcionalidad: Las cookies son esenciales para el funcionamiento adecuado de la Aplicación. Nos permiten recordar sus preferencias y configuraciones, como el idioma y la ubicación.</li>
                    <li>Cookies Persistentes: Estas cookies permanecen en su dispositivo después de cerrar la Aplicación. Se utilizan para recordar sus preferencias y configuraciones para futuras visitas.</li>
                </ul>

                <h4 className="py-14 font-semibold text-[16px] text-green">4. Control de Cookies</h4>
                <p className='font-extralight text-[16px]'>
                Puede controlar y administrar las cookies en su dispositivo a través de la configuración de su navegador o la configuración de la Aplicación. Puede optar por bloquear o eliminar cookies en cualquier momento. Sin embargo, tenga en cuenta que deshabilitar las cookies puede afectar la funcionalidad de la Aplicación y limitar su experiencia de usuario.
                </p>
                <h4 className="py-14 font-semibold text-[16px] text-green">5.  Cambios en la Política de Cookies</h4>
                <p className='font-extralight text-[16px]'>
                Nos reservamos el derecho de actualizar o modificar esta Política de Cookies en cualquier momento. Cualquier cambio significativo se comunicará a través de la Aplicación.

                </p>
                <h4 className="py-14 font-semibold text-[16px] text-green">6. Preguntas y contacto</h4>
                <p className='font-extralight text-[16px]'>
                Si tiene alguna pregunta sobre nuestra Política de Cookies o desea obtener más información sobre cómo utilizamos las cookies en la Aplicación, no dude en ponerse en contacto con nosotros a través de los datos de contacto proporcionados en la Aplicación.
                </p >
            </div>
 
        </section>
    )
}

export default page