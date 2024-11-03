import  styles  from '../../../modulsStyle/FirstPage.module.css'
import  textstyles  from '../../../modulsStyle/Text.module.css'
import {Line} from '../../Decoration/HeaderLine.jsx'
import myimgStyle from '../../../modulsStyle/MyImage.module.css'

export function FourBlock(){
   return (
        <div className={styles.fourBlock}>
        <h2 className={textstyles.bigText}>Преимущества</h2>
          <div className={styles.fourBlock2}>
            <img src="../public/fotoIcon/bus.svg" className={myimgStyle.svgStyle3} /> 
            <img src="../public/fotoIcon/pen.svg" className={myimgStyle.svgStyle3}/> 
            <img src="../public/fotoIcon/heart.svg" className={myimgStyle.svgStyle3}/> 
            <img src="../public/fotoIcon/money.svg" className={myimgStyle.svgStyle3}/> 
          </div>
          
        <Line></Line>
        </div>
      );
}