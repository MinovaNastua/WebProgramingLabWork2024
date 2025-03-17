import  styles  from '../style/FirstPage.module.css'
import  textstyles  from '../style/Text.module.css'

export function SevenBlock(){
   return (
        <div className={styles.fourBlock}>
        <h2 className={textstyles.bigText}>Где мы находимся</h2>
          
          <iframe className={styles.sevenBlock2} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.3270024539524!2d30.30649897731356!3d53.90816487245755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d051d06a5e5613%3A0x89a68550fe9e5245!2z0YPQu9C40YbQsCDQmtC-0YHQvNC-0L3QsNCy0YLQvtCyIDE5LCDQnNC-0LPQuNC70ZHQsiwg0JzQvtCz0LjQu9GR0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sru!2sby!4v1730676241644!5m2!1sru!2sby"></iframe>
          
        </div>
      );
}