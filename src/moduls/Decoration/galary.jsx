import  styles  from '../../modulsStyle/FirstPage.module.css'
import  style  from '../../modulsStyle/ColumnPictures.module.css'
import React, { useEffect, useState } from 'react';

export function Galary({imagesData}){

    const [blocks, setBlocks] = useState([]);
    const numberOfBlocks = 12; 
    const names = blocks.map(blocks => blocks.image);
    let fuf =-1;
    useEffect(() => {
        const randomImages = [];
        const { images } = imagesData;


        for (let i = 0; i < numberOfBlocks; i++) {

            const selectedImage = images[i];

            randomImages.push({
                id: `${i + 1}`,
                image: selectedImage.url,
                title: selectedImage.alt,
            });
        }

        setBlocks(randomImages);
    }, []);
    
   return (
    <div className={styles.fiveBlock3}>
    <div className={styles.fiveBlock2}>

        <div  style={{backgroundImage : `url(${names[fuf+=1]})`}} className={style.foto1}></div>
        
        <div  style={{backgroundImage : `url(${names[fuf+=1]})`}} className={style.foto2}></div>
        
        <div  style={{backgroundImage : `url(${names[fuf+=1]})`}} className={style.foto1}></div>
    </div>

    <div className={styles.fiveBlock2}>

        <div  style={{backgroundImage : `url(${names[fuf+=1]})`}} className={style.foto3}></div>
        
        <div  style={{backgroundImage : `url(${names[fuf+=1]})`}} className={style.foto4}></div>
        
        <div  style={{backgroundImage : `url(${names[fuf+=1]})`}} className={style.foto3}></div>
    </div>

    <div className={styles.fiveBlock2}>

    <div  style={{backgroundImage : `url(${names[fuf+=1]})`}} className={style.foto1}></div>

    <div  style={{backgroundImage : `url(${names[fuf+=1]})`}} className={style.foto2}></div>

    <div  style={{backgroundImage : `url(${names[fuf+=1]})`}} className={style.foto1}></div>
    </div>
    <div className={styles.fiveBlock2}>

        <div  style={{backgroundImage : `url(${names[fuf+=1]})`}} className={style.foto3}></div>
        
        <div  style={{backgroundImage : `url(${names[fuf+=1]})`}} className={style.foto4}></div>
        
        <div  style={{backgroundImage : `url(${names[fuf+=1]})`}} className={style.foto3}></div>
    </div>
    </div>
      );
}