import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { MdDarkMode } from 'react-icons/md'
import { BsSun } from 'react-icons/bs'

export default function NavbarMenu () {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <Navbar collapseOnSelect expand='lg' className='bg-body-dark rounded'>
      <Container>
        <Navbar.Brand href='#home'>علیرضا طالبی زاده</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'></Nav>
          <Nav>
            <Nav.Link href='#deets' >
              {theme === 'dark' ? (
                <BsSun onClick={toggleTheme} />
              ) : (
                <MdDarkMode onClick={toggleTheme} />
              )}
            </Nav.Link>
            <Nav.Link href='#deets' className='text-primary'>
              مهارت ها
            </Nav.Link>
            <Nav.Link href='#deets' className='text-primary'>
              ارتباط با من
            </Nav.Link>
            <Nav.Link href='#deets' className='text-primary'>
              {' '}
              علاقه مندی ها
            </Nav.Link>
            <Nav.Link href='#deets' className='text-primary'>
              {' '}
              سوابق کاری
            </Nav.Link>
            <Nav.Link href='#deets' className='text-primary'>
              مهارت ها
            </Nav.Link>
            <Nav.Link eventKey={2} href='#memes'  className='text-primary'>
              درباره من
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
