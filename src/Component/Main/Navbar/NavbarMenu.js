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
          <Nav className='me-auto'>
            <Nav.Link href='#deets'>مهارت ها</Nav.Link>
            <Nav.Link href='#deets'>ارتباط با من</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='#deets'>
              {theme === 'dark' ? (
                <BsSun onClick={toggleTheme} />
              ) : (
                <MdDarkMode onClick={toggleTheme}/>
              )}
            </Nav.Link>
            <Nav.Link href='#deets'> علاقه مندی ها</Nav.Link>
            <Nav.Link href='#deets'> سوابق کاری</Nav.Link>
            <Nav.Link href='#deets'>مهارت ها</Nav.Link>
            <Nav.Link eventKey={2} href='#memes'>
              درباره من
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

// ;<Container className='container-fluid mt-2'>
//   <nav
//     className='navbar navbar-expand-md bg-dark sticky-top rounded-3'
//     dir='ltr'
//   >
//     <div className='container-fluid'>
//       <a className='navbar-brand text-white' href='#'>
//         Alireza Talebizadeh
//       </a>
//       <button
//         className='navbar-toggler'
//         type='button'
//         data-bs-toggle='collapse'
//         data-bs-target='#collapsibleNavbar'
//       >
//         <span className='navbar-toggler-icon bg-white rounded '></span>
//       </button>
//       <div
//         className='collapse justify-content-end navbar-collapse'
//         id='collapsibleNavbar'
//       >
//         <ul className='navbar-nav'>
//           <li className='nav-item'>
//             <a className='nav-link' href='#about-me'>
//               <span className='dark-mode-trigger'>
//                 <span className='material-symbols-outlined white'>
//                   {theme === 'light' ? (
//                     <MdDarkMode onClick={toggleTheme} />
//                   ) : (
//                     <BsSun onClick={toggleTheme} />
//                   )}
//                 </span>
//               </span>
//             </a>
//           </li>
//           <li className='nav-item'>
//             <a className='nav-link' href='#detail-person'>
//               مشخصات فردی
//             </a>
//           </li>
//           <li className='nav-item'>
//             <a className='nav-link' href='#relation'>
//               ارتباط با من
//             </a>
//           </li>
//           <li className='nav-item'>
//             <a className='nav-link' href='#'>
//               علاقه مندی ها
//             </a>
//           </li>
//           <li className='nav-item'>
//             <a className='nav-link' href='#job'>
//               سوابق کاری
//             </a>
//           </li>
//           <li className='nav-item'>
//             <a className='nav-link' href='#skills'>
//               مهارت ها
//             </a>
//           </li>
//           <li className='nav-item'>
//             <a className='nav-link' href='#about-me'>
//               درباره من
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// </Container>
