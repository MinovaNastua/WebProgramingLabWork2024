import  styles  from '../../modulsStyle/ColumnPictures.module.css'
import React, { useState } from 'react';
import classNames from 'classnames';


export function FirstColumnPicture({images}){

const [hoveredIndex, setHoveredIndex] = useState(null); // Состояние для хранения индекса наведеного изображения


   return ( <div className={styles.fotoBlock}>

         {/* <div className={styles.foto1}></div>
         <div className={styles.foto2}></div>
         <div className={styles.foto1}></div> */}

            {images.map((image, index) => (
                <div
                    key={index}
                    className={classNames(`_imageitem_1jrfv_97 ${hoveredIndex !== null && hoveredIndex !== index ? '_fade_1jrfv_115' : ''}`)}
                    // className={classNames(styles.imageitem, styles.fade)}
                    onMouseEnter={() => setHoveredIndex(index)} // Устанавливаем индекс при наведении
                    onMouseLeave={() => setHoveredIndex(null)} // Сбрасываем индекс при уходе
                >
                    <img src={image.src} alt={image.alt} className={image.className} />
                </div>
            ))}

        </div>
      );
}