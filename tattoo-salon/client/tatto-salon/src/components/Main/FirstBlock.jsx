
import  styles  from '../style/FirstPage.module.css'
import  textstyles  from '../style/Text.module.css'
import {RoundButton} from './RoundButton.jsx'
import myimgStyle from '../style/MyImage.module.css'
import {Run} from './RunStr.jsx';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const IsAuth = false

export function FirstBlock(){

   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
   

   const handleResize = () => {
       setIsMobile(window.innerWidth < 768);
   };

   useEffect(() => {
       window.addEventListener('resize', handleResize);
       return () => {
           window.removeEventListener('resize', handleResize);
       };
   }, []);

   const dispatch = useDispatch();


   return (
        <div>
        <div className={styles.FirstPage}>
        <div className={styles.firstBlock}>
           <h2 className={textstyles.bigText}>Зарегистрируйся</h2>
           <h3 className={textstyles.smallText}>и получи скидку 20% на первое посещение </h3>
           <RoundButton  title="Зарегистрироваться" ad='/user-auth'></RoundButton>
        </div>

        {isMobile ? (
                <>
                    <p></p>
                        
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
               <div className={myimgStyle.svgBlockStyle} >
                
                <a href="https://www.instagram.com/stacy_tattoo.mg?igsh=MWw3bG9mMnIwcGxjbQ==" target="_blank" rel="noopener noreferrer">
               <img src="./fotoIcon/inst.svg" className={myimgStyle.svgStyle} alt="Instagram Icon" />
            </a>
            <a href="https://t.me/nastionnnna_min" target="_blank" rel="noopener noreferrer">
               <img src="./fotoIcon/teleg.svg" href="" className={myimgStyle.svgStyle} />
            </a>
            <a href="https://vk.com/nastionnnna" target="_blank" rel="noopener noreferrer">
               <img src="./fotoIcon/vk.svg" href="" className={myimgStyle.svgStyle}  />
            </a>

            </div>
            )}
           {/* <div className={myimgStyle.svgBlockStyle} >
              <img src="../public/fotoIcon/inst.svg" className={myimgStyle.svgStyle} />
              <img src="../public/fotoIcon/teleg.svg" className={myimgStyle.svgStyle} />
              <img src="../public/fotoIcon/vk.svg" className={myimgStyle.svgStyle}  />
           </div> */}
        </div>
        <img src="./fotoIcon/Fone.png"  className={myimgStyle.MainimgStyle} />
         <Run></Run>
     </div>
      );
}