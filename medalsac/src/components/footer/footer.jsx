import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import map from './../../assets/home/map.png'
import './footer.css'

function Footer() {

  return (
    <>
      {/* Contact Section */}
      <div className='contact'>
        
        {/* Contact Title */}
        <div className='container-contact'>
          <h2>Contact</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        </div>
        {/* Body contact*/}
        <div className='container-contact'>
          {/*  */}
          <div className='row-contact'>
            <div className='col-contact-w5'>
              <div className='info-contact'>
                <div className='info-contact-item'>

                  <p>ico</p>

                  <div>
                    <h5>Dirección</h5>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>

                <div className='info-contact-item'>

                  <p>ico</p>

                  <div>
                    <h5>Nro. de Celular</h5>
                    <p>+51 993 221 311</p>
                  </div>
                </div>

                <div className='info-contact-item'>

                  <p>ico</p>

                  <div>
                    <h5>Gmail</h5>
                    <p>ragde@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-contact-w7'>
              <div className='map-contact'>
                <img src={map} alt="map" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='footer'>

        <div className='container footer-top'>
          <div className='row gy-4'>
            <div className='col-lg-3 col-md-6 footer-about col-footer-w4'>
              <a href="">Medal Sac</a>
              <div className='footer-contact'>
                <p>Lorem, ipsum dolor.</p>
                <p>Lima, Perú</p>
                <p className='mt-3'>
                  <strong>Telefono:</strong>
                  <span>+51 993 221 311</span>
                </p>
                <p>
                  <strong>Gmail:</strong>
                  <span>ragde@gmail.com</span>
                </p>
              </div>
            </div>
            <div className='col-lg-2 col-md-3 footer-links'>
              <h4>Enlaces útiles</h4>
              <ul>
                <li>
                  <i></i>
                  <a href="">Home</a>
                </li>
                <li>
                  <i></i>
                  <a href="">Nuestros Vehículos</a>
                </li>
                <li>
                  <i></i>
                  <a href="">Nuestras Marcas</a>
                </li>
                <li>
                  <i></i>
                  <a href="">Servicios PostVenta</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-2 col-md-3 footer-links'>
            <h4>Nuestros servicios</h4>
              <ul>
                <li>
                  <i></i>
                  <a href="">Lorem, ipsum.</a>
                </li>
                <li>
                  <i></i>
                  <a href="">Lorem, ipsum.</a>
                </li>
                <li>
                  <i></i>
                  <a href="">Lorem, ipsum.</a>
                </li>
                <li>
                  <i></i>
                  <a href="">Lorem, ipsum.</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-4 col-md-12 footer-img'>
              
                <img src={map} alt="map" />
              
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            ©
            <span>Copyright</span>
            <strong className='px-1 sitename'>Medal SAC</strong>
            <span>Reservados todos los derechos</span>
          </p>
          <div className='credits'>
            Diseñado por 
            <a href=""> Programador en Acenso</a>
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin></script>
    </>
  )
}

export default Footer