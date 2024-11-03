import  styles  from '../../modulsStyle/ColumnPictures.module.css'

export function FirstColumnPicture(){
   return (
        <div className={styles.fotoBlock}>
         <div className={styles.foto1}></div>
         <div className={styles.foto2}></div>
         <div className={styles.foto1}></div>
        </div>
      );
}