import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import oferta1 from './assets/home/oferta1.webp'
import oferta1_responsive from './assets/home/oferta1_responsive.jpg'
import vehiculo1 from './assets/home/vehiculo1.png'
import vehiculo2 from './assets/home/vehiculo2.png'
import vehiculo3 from './assets/home/vehiculo3.png'
import vehiculo4 from './assets/home/vehiculo4.png'
import banner from './assets/home/banner.png'
import home_seminuevos from './assets/home/home_seminuevos.png'
import Carousel from 'react-bootstrap/Carousel';
import NavBar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';
import './App.css'

function App() {

  return (
    <>

      <NavBar></NavBar>

      {/* slider images home  */}
      <div>
        <Carousel className='ofertas'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={oferta1} 
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={oferta1} 
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={oferta1} 
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <Carousel className='ofertas_responsive'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={oferta1_responsive} 
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={oferta1_responsive} 
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={oferta1_responsive} 
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      {/* slider images home  */}

      {/* nuestros vehiculos  */}
      <div className='contenedor_vehiculos_tipos_titulo'>
            <h1>Nuestros Vehículos</h1>
      </div>
      <div className='contenedor_vehiculos_tipos_galeria'>
        <div className="gallery">
          <div className="gallery-item"><img src={vehiculo1} alt="Image 1"/><div className='gallery_titulo'>Camionetas</div></div>
          <div className="gallery-item"><img src={vehiculo2} alt="Image 2"/><div className='gallery_titulo'>Camionetas</div></div>
          <div className="gallery-item"><img src={vehiculo3} alt="Image 3"/><div className='gallery_titulo'>Camionetas</div></div>
          <div className="gallery-item"><img src={vehiculo4} alt="Image 4"/><div className='gallery_titulo'>Camionetas</div></div>
          <div className="gallery-item"><img src={vehiculo1} alt="Image 5"/><div className='gallery_titulo'>Camionetas</div></div>
          <div className="gallery-item"><img src={vehiculo2} alt="Image 6"/><div className='gallery_titulo'>Camionetas</div></div>
          <div className="gallery-item"><img src={vehiculo3} alt="Image 7"/><div className='gallery_titulo'>Camionetas</div></div>
          <div className="gallery-item"><img src={vehiculo4} alt="Image 8"/><div className='gallery_titulo'>Camionetas</div></div>
          <div className="gallery-item"><img src={vehiculo1} alt="Image 9"/><div className='gallery_titulo'>Camionetas</div></div>
          <div className="gallery-item"><img src={vehiculo2} alt="Image 10"/><div className='gallery_titulo'>Camionetas</div></div>
          <div className="gallery-item"><img src={vehiculo3} alt="Image 11"/><div className='gallery_titulo'>Camionetas</div></div>
          <div className="gallery-item"><img src={vehiculo4} alt="Image 12"/><div className='gallery_titulo'>Camionetas</div></div>
          <div className="gallery-item"><img src={vehiculo1} alt="Image 13"/><div className='gallery_titulo'>Camionetas</div></div>
          <div className="gallery-item"><img src={vehiculo2} alt="Image 14"/><div className='gallery_titulo'>Camionetas</div></div>
        </div>
      </div>
      {/* nuestros vehiculos  */}

      {/* foto del medio  */}
        
      <div className='contenedor_imagen_medio'>
        <img src={banner} alt="medio imagen" />
      </div>

      {/* foto del medio  */}

      {/* servicios  */}

      <div className='contenedor_servicios_home'>
        <div className='contenedor_servicios_home_content1'>
          <div className='contenedor_servicios_home_sec1'>
            <div className='contenedor_servicios_home_sec1_titulo' >Servicios de Post Venta</div>
            <div className='contenedor_servicios_home_sec1_div'>El equipo de Servicio Tracto Camiones USA está debidamente capacitado y certificado para ofrecerte las soluciones que necesitas de manera rápida y eficiente. Somos taller certificado por Cummins a nivel nacional, contamos con todas las herramientas especiales, así como el stock de repuestos adecuados para brindarte un servicio de calidad y rápido.</div>
            <br />
            <div className='contenedor_servicios_home_sec1_div'>Sabemos que cada minuto cuenta y eso lo demostramos en nuestro reducido tiempo de entrega.</div>
            <button class="serviciosButton">
              Realizar una cotización
              <div class="iconButtonhome_service">
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className='contenedor_servicios_home_sec2'>
          <div className='contenedor_servicios_home_sec2_content'>
            <div className='contenedor_servicios_home_sec2_fila1'>
              <div className="card_home_service">
                <div className="icon_home_service">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="38px" width="38px" version="1.1" id="heart" viewBox="0 0 471.701 471.701" xml:space="preserve">
                      <linearGradient id="gradientColor">
                        <stop offset="5%" stop-color="#f47e48"></stop>
                        <stop offset="95%" stop-color="#dc5719"></stop>
                      </linearGradient>
                      <g>
                        <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"></path>
                      </g>
                    </svg>
                  </div>
                  <p className="title_home_service">Mantenimiento Preventivo</p>
                  <p className="text_home_service">Conservamos tu vehículo en condiciones óptimas de operación, lo cual significa ahorro y eficiencia para ti.</p>
              </div>
              <div className="card_home_service">
                <div className="icon_home_service">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="38px" width="38px" version="1.1" id="heart" viewBox="0 0 471.701 471.701" xml:space="preserve">
                      <linearGradient id="gradientColor">
                        <stop offset="5%" stop-color="#f47e48"></stop>
                        <stop offset="95%" stop-color="#dc5719"></stop>
                      </linearGradient>
                      <g>
                        <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"></path>
                      </g>
                    </svg>
                  </div>
                  <p className="title_home_service">Mantenimiento Preventivo</p>
                  <p className="text_home_service">Conservamos tu vehículo en condiciones óptimas de operación, lo cual significa ahorro y eficiencia para ti.</p>
              </div>
            </div>
            <div className='contenedor_servicios_home_sec2_fila2'>
              <div className="card_home_service">
                <div className="icon_home_service">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="38px" width="38px" version="1.1" id="heart" viewBox="0 0 471.701 471.701" xml:space="preserve">
                      <linearGradient id="gradientColor">
                        <stop offset="5%" stop-color="#f47e48"></stop>
                        <stop offset="95%" stop-color="#dc5719"></stop>
                      </linearGradient>
                      <g>
                        <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"></path>
                      </g>
                    </svg>
                  </div>
                  <p className="title_home_service">Mantenimiento Preventivo</p>
                  <p className="text_home_service">Conservamos tu vehículo en condiciones óptimas de operación, lo cual significa ahorro y eficiencia para ti.</p>
              </div>
              <div className="card_home_service">
                <div className="icon_home_service">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="38px" width="38px" version="1.1" id="heart" viewBox="0 0 471.701 471.701" xml:space="preserve">
                      <linearGradient id="gradientColor">
                        <stop offset="5%" stop-color="#f47e48"></stop>
                        <stop offset="95%" stop-color="#dc5719"></stop>
                      </linearGradient>
                      <g>
                        <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"></path>
                      </g>
                    </svg>
                  </div>
                  <p className="title_home_service">Mantenimiento Preventivo</p>
                  <p className="text_home_service">Conservamos tu vehículo en condiciones óptimas de operación, lo cual significa ahorro y eficiencia para ti.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* servicios  */}

      <Footer></Footer>
      <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
    </>
  )
}

export default App
