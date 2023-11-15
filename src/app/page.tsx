'use client'
import React, { useEffect } from 'react'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Slider from '@/components/slider/slider'

export default function Home() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => { console.log(data) });
  }, [])
  return (
    <div>
      <Header />
      <Slider />
    </div>
  )
}
