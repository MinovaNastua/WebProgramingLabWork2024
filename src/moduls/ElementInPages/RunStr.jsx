import React from 'react';
import styles from '../../modulsStyle/HeaderLine.module.css'; 
import myimgStyle from '../../modulsStyle/MyImage.module.css';
import classNames from 'classnames';

export function Run(){
    return (
        <div className={myimgStyle.LineStyleBlock}>
        <img src="../public/fotoIcon/Line.png" className={myimgStyle.LineStyle} />
        <div className={classNames(styles.comonM ,styles.marquee)} >
            <p>stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo</p>
        </div>
        <div className={classNames(styles.comonM ,styles.marquee2)}>
            <p>stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo</p>
        </div>

        <div className={classNames(styles.comonM ,styles.marquee3)}>
            <p>stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo</p>
        </div>
        <div className={classNames(styles.comonM ,styles.marquee4)}>
            <p>stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo</p>
        </div>
     </div>
    );
}
