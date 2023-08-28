import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa'
import { AiTwotoneMail } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { Container } from 'react-bootstrap'
import './Footer.css'

export default function Footer () {
  return (
    <Container className='mt-2  p-2 rounded bg-dark text-white text-center'>
      <p>راه های ارتباطی با مدیر وب سایت</p>
      <ul className='footer-sotial-media' id='relation'>
        <a
          className='btn'
          target='_blank'
          href='mailto:webmaster.web1400@gmail.com'
        >
          <i>
            <AiTwotoneMail className='white' />
          </i>
        </a>

        <a
          className='btn black'
          target='_blank'
          href='https://github.com/alirezatalebizadeh'
        >
          <i>
            <BsGithub className='black' />
          </i>
        </a>

        <a
          className='btn'
          target='_blank'
          href='https://www.linkedin.com/in/%D8%B9%D9%84%DB%8C%D8%B1%D8%B6%D8%A7-%D8%B7%D8%A7%D9%84%D8%A8%DB%8C-%D8%B2%D8%A7%D8%AF%D9%87-675388248/'
        >
          <i>
            <BsLinkedin className='blue' />
          </i>
        </a>

        <a
          className='btn'
          target='_blank'
          href='https://api.whatsapp.com/send?phone=09036439883'
          title='09036439883'
        >
          <i>
            <FaWhatsapp className='green' />
          </i>
        </a>

        <a
          className='btn'
          target='_blank'
          href='https://www.instagram.com/alireza_talebizadeh00'
        >
          <FaInstagram className='orange' />
        </a>
      </ul>
      <h6 className='mt-5'>
        خیلی خیلی ممنونم که وقتت رو گذاشتی و از سایت بنده بازدید کردی.عاشقتم...
      </h6>
    </Container>
  )
}
