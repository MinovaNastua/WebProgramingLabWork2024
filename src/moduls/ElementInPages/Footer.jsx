import  styles  from '../../modulsStyle/Header.module.css'
import {Line} from '../Decoration/HeaderLine.jsx'
import  textstyles  from '../../modulsStyle/Text.module.css'
import myimgStyle from '../../modulsStyle/MyImage.module.css'
import  styleSS  from '../../modulsStyle/HeaderLine.module.css'

export function Footer(){
   return (
    <div className={styles.footer}>
      <div className={styles.footerBlock1}>
         <h3 className={textstyles.smallTextBlack} >Все права защищены</h3> 
            <div className={styles.footerBlock2}>
              <img src="../public/fotoIcon/instBlack.svg" className={myimgStyle.svgStyle} />
              <img src="../public/fotoIcon/telegBlack.svg" className={myimgStyle.svgStyle} />
              <img src="../public/fotoIcon/vkBlack.svg" className={myimgStyle.svgStyle}  />
            </div>
      </div>
         <h3 className={textstyles.underlineText} >Политика конфиденциальности</h3> 
         <Line CL = "_layout2_zn774_17"></Line>
         <h4 className={textstyles.verySmallText} >Использование материалов только с разрешения правообладателя</h4> 
   </div>
   )
}