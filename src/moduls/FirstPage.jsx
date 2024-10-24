import  styles  from '../modulsStyle/FirstPage.module.css'
import  textstyles  from '../modulsStyle/Text.module.css'
import {RoundButton} from '../moduls/RoundButton.jsx'
import inst from '../moduls/RoundButton.jsx'

const IsAuth = false

export function FirstPage(){
   return (
   <div className={styles.FirstPage}>
    <div className={styles.firstBlock}>
        <h2 className={textstyles.bigText}>Зарегистрируйся</h2>
        <h3 className={textstyles.smallText}>и получи скидку 20% на первое посещение </h3>
        <RoundButton title="Зарегистрироваться"></RoundButton>
   </div>
      <div>
         inst
      </div>
   </div>
   )
}