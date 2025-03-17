import  styles  from '../style/Header.module.css'
import {Button} from './ButtonInHeader.jsx'
import {Line} from './HeaderLine.jsx'
import React, { useState, useEffect } from 'react';

import  stylesButon  from '../style/ButtonInHeader.module.css'

import Button1 from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const IsAuth = false

export function Header(){

      const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
      const [isMenuOpen, setIsMenuOpen] = useState(false);
  
      const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
      };
  
      useEffect(() => {
          window.addEventListener('resize', handleResize);
          return () => {
              window.removeEventListener('resize', handleResize);
          };
      }, []);
  
      const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
      };

      const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   return (
    <div className={styles.mainBlock}>
   <div className={styles.layout}>
    {/* <div className={styles.layout}>
   <Button to="/" title="О студии"></Button>
   <Button to="/S" title="Услуги"></Button>
   <Button to="/Scetches" title="Галерея"></Button>
   <Button to="/S" title="Эскизы"></Button>
   </div> */}

{isMobile ? (
                <>
                    <Button1 className={stylesButon.layout} variant="primary" onClick={handleShow}>Meню</Button1>
                   
                    <Offcanvas className={stylesButon.layout2} show={show} onHide={handleClose} >
                    <Offcanvas.Header>
                    </Offcanvas.Header>
                    {/* <Offcanvas.Body>
                        <Button to="/" title="О студии"></Button>
                        <Button to="/S" title="Блог"></Button>
                        <Button to="/Portfolio" title="Галерея"></Button>
                        <Button to="/Scetches" title="Эскизы"></Button>
                    </Offcanvas.Body> */}
                    </Offcanvas>
                    {/* {isMenuOpen && (
                        <div className="dropdown-menu">
                            <ul>
                                <li>Главная</li>
                                <li>О нас</li>
                                <li>Контакты</li>
                            </ul>
                        </div>
                    )} */}
                </>
            ) : (
               <div className={styles.layout}>
               {/* <Button to="/" title="О студии"></Button>
               <Button to="/S" title="Блог"></Button>
               <Button to="/Portfolio" title="Галерея"></Button>
               <Button to="/Scetches" title="Эскизы"></Button> */}
               </div> 
            )}
   
   
   {/* <Button to="/login" title="Войти"></Button> */}
   </div>
   <Line CL = "_layout_1674u_1"></Line>
   </div>
   )
}