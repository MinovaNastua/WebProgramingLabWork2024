import  styles  from '../../../modulsStyle/FirstPage.module.css'
import  textstyles  from '../../../modulsStyle/Text.module.css'
import myimgStyle from '../../../modulsStyle/MyImage.module.css'


export function SecondBlock(){
   return (
        <div className={styles.SecondBlock}>
        <img src="../public/imgstyle/secondBlock.png" className={myimgStyle.imgFon} />
        <div className={styles.SecondBlock2}>
        <h2 className={textstyles.bigText}>Услуги</h2>
          <div>
          <img src="../public/fotoIcon/tattoos.svg" className={myimgStyle.svgStyle2}  /> 
          <img src="../public/fotoIcon/perm.svg" className={myimgStyle.svgStyle2} />          
          </div>
          <div className={styles.SecondBlockTextBlock} >
        <h2 className={textstyles.bigText}>Консультация в салоне</h2>
        <h2 className={textstyles.bigFatText}>бесплатная!</h2>
          </div>
        </div>
        </div>
      );
}