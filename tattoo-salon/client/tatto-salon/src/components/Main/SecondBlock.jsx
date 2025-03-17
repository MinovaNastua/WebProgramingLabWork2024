import  styles  from '../style/FirstPage.module.css'
import  textstyles  from '../style/Text.module.css'
import myimgStyle from '../style/MyImage.module.css'


export function SecondBlock(){
   return (
        <div className={styles.SecondBlock}>
        <img src="./imgstyle/secondBlock.png" className={myimgStyle.imgFon} />
        <div className={styles.SecondBlock2}>
        <h2 className={textstyles.bigText}>Услуги</h2>
          <div>
          <img src="./fotoIcon/tattoos.svg" className={myimgStyle.svgStyle2}  /> 
          <img src="./fotoIcon/perm.svg" className={myimgStyle.svgStyle2} />          
          </div>
          <div className={styles.SecondBlockTextBlock} >
        <h2 className={textstyles.bigText}>Консультация в салоне</h2>
        <h2 className={textstyles.bigFatText}>бесплатная!</h2>
          </div>
        </div>
        </div>
      );
}