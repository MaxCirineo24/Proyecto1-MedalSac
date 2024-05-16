import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import fotonLogo from './../../assets/logoFoton.webp'
import tractoLogo from './../../assets/logoTractoCamiones.webp'

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'

function NavBar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* navbar head  */}
      <div className='navhead'>
        <div className='navheaddiv1'>
          <img className='fotonavhead1' src={fotonLogo} alt="" />
        </div>
        <img className='fotonavhead2' src={tractoLogo} alt="" />
      </div>
      {/* navbar head  */}

      {/* nav bar menu  */}
      <nav className='navbody'>
        <Button className='btn_menu_hambuerguesa' onClick={handleShow}>
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <ul className='navbodyul1'>
          <li className='navbodyulli1'><button className='navbodyullibutton2' type="button">Inicio</button></li>
          <li className='navbodyulli1'>Nuestros Vehículos</li>
          <li className='navbodyulli1'>Nuestras Marcas</li>
          <li className='navbodyulli1'>Servicio Post Venta</li>
          <li className='navbodyulli1'>Red de Concesionarios</li>
          <li className='navbodyulli1'>Nosotros</li>
          <li className='navbodyulli1'>TRACTO OUTLET</li>
        </ul>
        <ul className='navbodyul2'>
          <li className='navbodyulli2'><button className='navbodyullibutton2' type="button">COTIZA AHORA</button></li>
          <li className='navbodyulli2 btn_wsp_responsive'><button className='navbodyullibutton2' type="button">WHATSAPP</button></li>
        </ul>
      </nav>
      {/* nav bar menu  */}

     

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu de paginas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className='navbodyul1_responsive'>
            <li className='navbodyulli1'><button className='navbodyullibutton2' type="button">Inicio</button></li>
            <li className='navbodyulli1_responsive'>Nuestros Vehículos</li>
            <li className='navbodyulli1_responsive'>Nuestras Marcas</li>
            <li className='navbodyulli1_responsive'>Servicio Post Venta</li>
            <li className='navbodyulli1_responsive'>Red de Concesionarios</li>
            <li className='navbodyulli1_responsive'>Nosotros</li>
            <li className='navbodyulli1_responsive'>TRACTO OUTLET</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
    </>
  )
}

export default NavBar
