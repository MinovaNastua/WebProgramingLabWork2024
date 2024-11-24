
import  styles  from '../../../modulsStyle/FirstPage.module.css'
import  textstyles  from '../../../modulsStyle/Text.module.css'
import {RoundButton} from '../../Button/RoundButton.jsx'
import myimgStyle from '../../../modulsStyle/MyImage.module.css'
import {Run} from '../../Decoration/RunStr.jsx';
import React, { useState, useEffect } from 'react';

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

   return (
        <div>
        <div className={styles.FirstPage}>
        <div className={styles.firstBlock}>
           <h2 className={textstyles.bigText}>Зарегистрируйся</h2>
           <h3 className={textstyles.smallText}>и получи скидку 20% на первое посещение </h3>
           <RoundButton title="Зарегистрироваться"></RoundButton>
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
               <img src="../public/fotoIcon/inst.svg" className={myimgStyle.svgStyle} />
               <img src="../public/fotoIcon/teleg.svg" className={myimgStyle.svgStyle} />
               <img src="../public/fotoIcon/vk.svg" className={myimgStyle.svgStyle}  />
            </div>
            )}
           {/* <div className={myimgStyle.svgBlockStyle} >
              <img src="../public/fotoIcon/inst.svg" className={myimgStyle.svgStyle} />
              <img src="../public/fotoIcon/teleg.svg" className={myimgStyle.svgStyle} />
              <img src="../public/fotoIcon/vk.svg" className={myimgStyle.svgStyle}  />
           </div> */}
        </div>
        <img src="../public/fotoIcon/Fone.png"  className={myimgStyle.MainimgStyle} />
         <Run></Run>
     </div>
      );
}