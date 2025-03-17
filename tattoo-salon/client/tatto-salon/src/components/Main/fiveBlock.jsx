import  styles  from '../style/FirstPage.module.css'
import  textstyles  from '../style/Text.module.css'
import {RoundButton} from './RoundButton.jsx'
import {Galary} from './galary.jsx'

export function FiveBlock({data} ){
 
   return (
        <div className={styles.fourBlock}>
        <h2 className={textstyles.bigText}>Библиотека работ</h2>
            <Galary imagesData={data}></Galary>

          <RoundButton title="Посмотреть другие работы работы" ad='/user-auth'></RoundButton>
        </div>
      );
}