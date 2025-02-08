import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import Main from './components/main'
import Loyihalarimiz from './components/loyihalarimiz'
import Hizmatlarimiz from './components/hizmatlarimiz'
import Boglanish from './components/boglanish'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Main/>
      <Loyihalarimiz/>
      <Hizmatlarimiz/>
      <Boglanish/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App