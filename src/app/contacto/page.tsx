
'use client'
import ContactForm from '@/components/ContactForm'
import Location from '@/components/location'
import NavBar from '@/components/nav-bar'
import React from 'react'

const Page = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl'>
         <ContactForm/>
         <Location/>
        </div>
    )
}
export default Page
