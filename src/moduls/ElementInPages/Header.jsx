import  styles  from '../../modulsStyle/Header.module.css'
import {Button} from '../Button/ButtonInHeader.jsx'
import {Line} from '../Decoration/HeaderLine.jsx'
import  styleSS  from '../../modulsStyle/HeaderLine.module.css'
import Scetches from '/src/moduls/Pageses/sketchesPage.jsx';
import React, { useState, useEffect } from 'react';
import Portfolio from '/src/moduls/Pageses/portfolioPage.jsx';

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
                    <Button to="/" title="|||"></Button>
                        
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
               <Button to="/" title="О студии"></Button>
               <Button to="/S" title="Услуги"></Button>
               <Button to="/Portfolio" title="Галерея"></Button>
               <Button to="/Scetches" title="Эскизы"></Button>
               </div> 
            )}
   
   
   <Button to="/S" title="Войти"></Button>
   </div>
   <Line CL = "_layout_zn774_1"></Line>
   </div>
   )
}