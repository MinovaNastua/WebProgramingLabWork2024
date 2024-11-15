import  styles  from '../../modulsStyle/Header.module.css'
import {Button} from '../Button/ButtonInHeader.jsx'
import {Line} from '../Decoration/HeaderLine.jsx'
import  styleSS  from '../../modulsStyle/HeaderLine.module.css'
import Scetches from '/src/moduls/Pageses/sketchesPage.jsx';

const IsAuth = false

export function Header(){
   return (
    <div className={styles.mainBlock}>
   <div className={styles.layout}>
    <div className={styles.layout}>
   <Button to="/" title="О студии"></Button>
   <Button to="/S" title="Услуги"></Button>
   <Button to="/Scetches" title="Галерея"></Button>
   <Button to="/S" title="Эскизы"></Button>
   </div>
   
   
   <Button to="/S" title="Войти"></Button>
   </div>
   <Line CL = "_layout_zn774_1"></Line>
   </div>
   )
}