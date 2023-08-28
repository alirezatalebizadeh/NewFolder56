import { Container } from 'react-bootstrap'
import Footer from './Component/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App () {
  return (
    <div className='mx-1-auto'>
      <Container fluid>
        <Container className=' '>
          <div class='p-3 d-flex flex-row rounded bg-primary text-white text-center'>
            <div class='logo'>
              <img src='imges/11zon_cropped.png' alt='person' />
            </div>
            <div class='me-2 font-size'>
              <h1>علیرضا طالبی زاده</h1>
              <p>
                برنامه نویس فرانت اند و دانشجوی رشته علوم و مهندسی صنایع غذایی
              </p>
            </div>
          </div>
        </Container>
      </Container>

      <Footer />
    </div>
  )
}
export default App
