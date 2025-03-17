import React, { useState, useEffect } from 'react';
import styles from '../style/HeaderLine.module.css'; 
import myimgStyle from '../style/MyImage.module.css';
import classNames from 'classnames';
import stylesmedia from '../style/mediaTag.module.css'; 


export function Run(){


    const [isMobile, setIsMobile] = useState(window.innerWidth < 850);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 850);
    };

    const ptext1="stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo ";
    const ptext2="stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo stacy.tattoo";

    useEffect(() => {
        
        window.addEventListener('resize', handleResize);
        
      
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={classNames(myimgStyle.LineStyleBlock, stylesmedia.LineStyleBlock)}>
        <img src="./fotoIcon/Line.png" className={myimgStyle.LineStyle} />
        <div className={classNames(styles.comonM ,styles.marquee, stylesmedia.comonM, stylesmedia.marquee)} >
            <p>{isMobile ? ptext2 : ptext1}</p>
        </div>
        <div className={classNames(styles.comonM ,styles.marquee2, stylesmedia.comonM, stylesmedia.marquee2 )}>
            <p>{isMobile ? ptext2 : ptext1}</p>
        </div>

        <div className={classNames(styles.comonM ,styles.marquee3, stylesmedia.comonM, stylesmedia.marquee3)}>
            <p>{isMobile ? ptext2 : ptext1}</p>
        </div>
        <div className={classNames(styles.comonM ,styles.marquee4, stylesmedia.comonM, stylesmedia.marquee4)}>
            <p>{isMobile ? ptext2 : ptext1}</p>
        </div>
     </div>
    );
}
