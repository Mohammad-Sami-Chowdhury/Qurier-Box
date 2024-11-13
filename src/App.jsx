import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Service from './components/Service/Service'
import Counter from './components/Counter/Counter'
import Video from './components/Video/Video'
import Tastimonial from './components/Tastimonial/Tastimonial'
import Contact from './components/Contact/Contact'
import Map from './components/Map/Map'
import FooterOne from './components/FooterOne/FooterOne'
import FooterTwo from './components/FooterTwo/FooterTwo'
import Copyright from './components/Copyright/Copyright'

const App = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Service/>
      <Counter/>
      <Video/>
      <Tastimonial/>
      <Contact/>
      <Map/>
      <FooterOne/>
      <FooterTwo/>
      <Copyright/>
    </>
  )
}

export default App