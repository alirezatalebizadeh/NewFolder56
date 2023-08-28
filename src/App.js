import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Footer from './Component/Footer/Footer'
import './App.css'
import NavbarMenu from './Component/Main/Navbar/NavbarMenu'

function App () {
  return (
    <div className='mx-1-auto'>
      <Container>
        <Container className=''>
          <div className='p-3 d-flex flex-row rounded bg-primary text-white text-center'>
            <div className='logo'>
              <img src='imges/11zon_cropped.png' alt='person' />
            </div>
            <div className='me-2 font-size'>
              <h1>علیرضا طالبی زاده</h1>
              <p>
                برنامه نویس فرانت اند و دانشجوی رشته علوم و مهندسی صنایع غذایی
              </p>
            </div>
          </div>
        </Container>

        <NavbarMenu />
        <Footer />
      </Container>
    </div>
  )
}
export default App
