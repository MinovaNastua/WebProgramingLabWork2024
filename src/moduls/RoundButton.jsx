import  styles  from '../modulsStyle/ButtonInHeader.module.css'

export function RoundButton({title}){
   return (
   <button className={styles.roundButton}>
   {title}
   </button>
   )
}