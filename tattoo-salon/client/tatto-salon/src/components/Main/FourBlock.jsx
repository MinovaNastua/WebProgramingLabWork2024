import  styles  from '../style/FirstPage.module.css'
import  textstyles  from '../style/Text.module.css'
import {Line} from './HeaderLine.jsx'
import myimgStyle from '../style/MyImage.module.css'

export function FourBlock(){
   return (
        <div className={styles.fourBlock}>
        <h2 className={textstyles.bigText}>Преимущества</h2>
          <div className={styles.fourBlock2}>
            <img src="./fotoIcon/bus.svg" className={myimgStyle.svgStyle3} /> 
            <img src="./fotoIcon/pen.svg" className={myimgStyle.svgStyle3}/> 
            <img src="./fotoIcon/heart.svg" className={myimgStyle.svgStyle3}/> 
            <img src="./fotoIcon/money.svg" className={myimgStyle.svgStyle3}/> 
          </div>
          
        <Line></Line>
        </div>
      );
}