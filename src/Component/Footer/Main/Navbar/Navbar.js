import React from 'react'
import { Container } from 'react-bootstrap'
import { MdDarkMode } from 'react-icons/md'

export default function Navbar () {
  return (
    <Container className='container-fluid mt-2'>
      <nav
        className='navbar navbar-expand-md bg-dark sticky-top rounded-3'
        dir='ltr'
      >
        <div className='container-fluid'>
          <a className='navbar-brand text-white' href='#'>
            Alireza Talebizadeh
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapsibleNavbar'
          >
            <span className='navbar-toggler-icon bg-info rounded text-white'>
              منو
            </span>
          </button>
          <div
            className='collapse justify-content-end navbar-collapse'
            id='collapsibleNavbar'
          >
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='#about-me'>
                  <span className='dark-mode-trigger'>
                    <span className='material-symbols-outlined white'>
                      <MdDarkMode />
                    </span>
                  </span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#detail-person'>
                  مشخصات فردی
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#relation'>
                  ارتباط با من
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  علاقه مندی ها
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#job'>
                  سوابق کاری
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#skills'>
                  مهارت ها
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#about-me'>
                  درباره من
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  )
}
