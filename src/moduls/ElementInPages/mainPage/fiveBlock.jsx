import  styles  from '../../../modulsStyle/FirstPage.module.css'
import  textstyles  from '../../../modulsStyle/Text.module.css'
import {FirstColumnPicture} from '../../Decoration/firstColumnPicture.jsx'
import myimgStyle from '../../../modulsStyle/MyImage.module.css'
import {SecondColumnPicture} from '../../Decoration/secondColumnPicture.jsx'
import {RoundButton} from '../../Button/RoundButton.jsx'
import  style  from '../../../modulsStyle/ColumnPictures.module.css'

export function FiveBlock(){
    const images = [
        { src: '../../../public/portfolio/1.png', alt: 'Изображение 1' , className: style.foto1},
        { src: '../../../public/portfolio/2.png', alt: 'Изображение 2' , className: style.foto2},
        { src: '../../../public/portfolio/3.png', alt: 'Изображение 3' , className: style.foto1},
    ];

    const images2 = [
        { src: '../../../public/portfolio/4.png', alt: 'Изображение 4' , className: style.foto1},
        { src: '../../../public/portfolio/5.png', alt: 'Изображение 5' , className: style.foto2},
        { src: '../../../public/portfolio/6.png', alt: 'Изображение 6' , className: style.foto1},
    ];

    const images3 = [
        { src: '../../../public/portfolio/7.png', alt: 'Изображение 1' , className: style.foto3},
        { src: '../../../public/portfolio/8.png', alt: 'Изображение 2' , className: style.foto4},
        { src: '../../../public/portfolio/9.png', alt: 'Изображение 3' , className: style.foto3},
    ];

    const images4 = [
        { src: '../../../public/portfolio/10.png', alt: 'Изображение 4' , className: style.foto3},
        { src: '../../../public/portfolio/11.png', alt: 'Изображение 5' , className: style.foto4},
        { src: '../../../public/portfolio/12.png', alt: 'Изображение 6' , className: style.foto3},
    ];
    
   return (
        <div className={styles.fourBlock}>
        <h2 className={textstyles.bigText}>Библиотека работ</h2>
          <div className={styles.fiveBlock2}>
          <FirstColumnPicture images={images}></FirstColumnPicture>
          <SecondColumnPicture images={images3}/>
          <FirstColumnPicture images={images2}></FirstColumnPicture>
          <SecondColumnPicture images={images4}/>
          </div>
          <RoundButton title="Посмотреть другие работы работы"></RoundButton>
        </div>
      );
}