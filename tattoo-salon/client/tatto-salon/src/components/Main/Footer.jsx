import  styles  from '../style/Header.module.css'
import {Line} from './HeaderLine.jsx'
import  textstyles  from '../style/Text.module.css'
import myimgStyle from '../style/MyImage.module.css'

export function Footer(){
   return (
    <div className={styles.footer}>
      <div className={styles.footerBlock1}>
         <h3 className={textstyles.smallTextBlack} >Все права защищены</h3> 
            <div className={styles.footerBlock2}>
            <a href="https://www.instagram.com/stacy_tattoo.mg?igsh=MWw3bG9mMnIwcGxjbQ==" target="_blank" rel="noopener noreferrer">
               <img src="./fotoIcon/instBlack.svg" className={myimgStyle.svgStyle} alt="Instagram Icon" />
            </a>
            <a href="https://t.me/nastionnnna_min" target="_blank" rel="noopener noreferrer">
               <img src="./fotoIcon/telegBlack.svg" href="" className={myimgStyle.svgStyle} />
            </a>
            <a href="https://vk.com/nastionnnna" target="_blank" rel="noopener noreferrer">
               <img src="./fotoIcon/vkBlack.svg" href="" className={myimgStyle.svgStyle}  />
            </a>
              
             
            </div>
      </div>
         <h3 className={textstyles.underlineText} >Политика конфиденциальности</h3> 
         <Line CL = "_layout2_1674u_17"></Line>
         <h4 className={textstyles.verySmallText} >Использование материалов только с разрешения правообладателя</h4> 
   </div>
   )
}