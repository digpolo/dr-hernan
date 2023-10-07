import { Contact } from '@/components/contact'
import Footer from '@/components/footer'
import Form from '@/components/form/form'
import Header from '@/components/header'
import NavBar from '@/components/nav-bar'
import Slider from '@/components/slider/slider'
import Image from 'next/image'

export default function Home() {
  return (
  <div>
    <Header/>
    <Form/>
    <Contact/>
    <Slider/>
    <Footer/>
  </div>
  )
}
