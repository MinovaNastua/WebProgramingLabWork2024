import  styles  from '../../../modulsStyle/FirstPage.module.css'
import  textstyles  from '../../../modulsStyle/Text.module.css'
import {RoundButton} from '../../Button/RoundButton.jsx'
import {Galary} from '../../Decoration/galary.jsx'

export function FiveBlock({data} ){
   return (
        <div className={styles.fourBlock}>
        <h2 className={textstyles.bigText}>Библиотека работ</h2>
            <Galary imagesData={data}></Galary>

          <RoundButton title="Посмотреть другие работы работы"></RoundButton>
        </div>
      );
}