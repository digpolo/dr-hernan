'use client'
import React, { useEffect } from 'react'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Slider from '@/components/slider/slider'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => {console.log(data)});
  }, [])
  return (
  <div>
    <Header/>
    <ContactForm /> 
    <Slider/>
    <Footer/>
  </div>
  )
}
