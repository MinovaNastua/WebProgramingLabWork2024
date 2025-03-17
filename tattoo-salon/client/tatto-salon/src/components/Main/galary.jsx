import  styles  from '../style/FirstPage.module.css'
import  style  from '../style/ColumnPictures.module.css'
import React, { useEffect, useState } from 'react';

export function Galary({imagesData}){

    const [blocks, setBlocks] = useState([]);
    const numberOfBlocks = 12; 
    const names = blocks.map(blocks => blocks.image);
    const handleClick = (event) => {
        const id = event.target.id; // Получаем id элемента
            console.log('Блок был нажат! ID:', id)
    }
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

        <div id={fuf+=1} style={{backgroundImage : `url(${names[fuf]})`}}  className={style.foto1} onClick={handleClick}></div>
        
        <div id={fuf+=1} style={{backgroundImage : `url(${names[fuf]})`}}  className={style.foto2} onClick={handleClick}></div>
        
        <div id={fuf+=1} style={{backgroundImage : `url(${names[fuf]})`}}  className={style.foto1} onClick={handleClick}></div>
    </div>

    <div className={styles.fiveBlock2}>

        <div  style={{backgroundImage : `url(${names[fuf+=1]})`}} className={style.foto3}></div>
        
        <div  style={{backgroundImage : `url(${names[fuf+=1]})`}} className={style.foto4}></div>
        
        <div  style={{backgroundImage : `url(${names[fuf+=1]})`}} className={style.foto3}></div>
    </div>

    <div className={styles.fiveBlock2}>

    <div id={fuf+=1} style={{backgroundImage : `url(${names[fuf]})`}}  className={style.foto1} onClick={handleClick}></div>
        
        <div id={fuf+=1} style={{backgroundImage : `url(${names[fuf]})`}}  className={style.foto2} onClick={handleClick}></div>
        
        <div id={fuf+=1} style={{backgroundImage : `url(${names[fuf]})`}}  className={style.foto1} onClick={handleClick}></div>
    </div>
    <div className={styles.fiveBlock2}>

        <div  style={{backgroundImage : `url(${names[fuf+=1]})`}} className={style.foto3}></div>
        
        <div  style={{backgroundImage : `url(${names[fuf+=1]})`}} className={style.foto4}></div>
        
        <div  style={{backgroundImage : `url(${names[fuf+=1]})`}} className={style.foto3}></div>
    </div>
    </div>
      );
}