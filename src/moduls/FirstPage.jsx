
import  styles  from '../modulsStyle/FirstPage.module.css'
import  textstyles  from '../modulsStyle/Text.module.css'
import {RoundButton} from '../moduls/RoundButton.jsx'
import myimgStyle from '../modulsStyle/MyImage.module.css'

const IsAuth = false

export function FirstPage(){
   return (
   <div>
      <div className={styles.FirstPage}>
      <div className={styles.firstBlock}>
         <h2 className={textstyles.bigText}>Зарегистрируйся</h2>
         <h3 className={textstyles.smallText}>и получи скидку 20% на первое посещение </h3>
         <RoundButton title="Зарегистрироваться"></RoundButton>
      </div>
         <div className={myimgStyle.svgBlockStyle} >
            <img src="../public/fotoIcon/inst.svg" className={myimgStyle.svgStyle} />
            <img src="../public/fotoIcon/teleg.svg" className={myimgStyle.svgStyle} />
            <img src="../public/fotoIcon/vk.svg" className={myimgStyle.svgStyle}  />
         </div>
      </div>
      <img src="../public/fotoIcon/Fone.png"  className={myimgStyle.MainimgStyle} />
   </div>
   )
}