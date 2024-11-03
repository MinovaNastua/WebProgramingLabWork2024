import  styles  from '../../../modulsStyle/FirstPage.module.css'
import  textstyles  from '../../../modulsStyle/Text.module.css'
import {FirstColumnPicture} from '../../Decoration/firstColumnPicture.jsx'
import myimgStyle from '../../../modulsStyle/MyImage.module.css'
import {SecondColumnPicture} from '../../Decoration/secondColumnPicture.jsx'
import {RoundButton} from '../../Button/RoundButton.jsx'


export function FiveBlock(){
   return (
        <div className={styles.fourBlock}>
        <h2 className={textstyles.bigText}>Библиотека работ</h2>
          <div className={styles.fiveBlock2}>
          <FirstColumnPicture/>
          <SecondColumnPicture/>
          <FirstColumnPicture/>
          <SecondColumnPicture/>
          </div>
          <RoundButton title="Посмотреть другие работы работы"></RoundButton>
        </div>
      );
}