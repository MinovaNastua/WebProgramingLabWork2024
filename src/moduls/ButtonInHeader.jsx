import  styles  from '../modulsStyle/ButtonInHeader.module.css'

export function Button({title}){
   return (
   <button className={styles.layout}>
   {title}
   </button>
   )
}