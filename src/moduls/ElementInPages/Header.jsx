import  styles  from '../../modulsStyle/Header.module.css'
import {Button} from '../Button/ButtonInHeader.jsx'
import {Line} from '../Decoration/HeaderLine.jsx'

const IsAuth = false

export function Header(){
   return (
    <div className={styles.mainBlock}>
   <div className={styles.layout}>
    <div className={styles.layout}>
   <Button title="О студии"></Button>
   <Button title="Услуги"></Button>
   <Button title="Галерея"></Button>
   <Button title="Эскизы"></Button>
   </div>
   
   
   <Button title="Войти"></Button>
   </div>
   <Line></Line>
   </div>
   )
}