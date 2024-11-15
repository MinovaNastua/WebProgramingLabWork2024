import React from 'react';
import  textstyles  from '../../modulsStyle/Text.module.css'
import {Header} from '../ElementInPages/Header.jsx'
import {Footer} from '../ElementInPages/Footer.jsx'
import  styles  from '../../modulsStyle/FirstPage.module.css'

 function NotFound(){
  return (
    <div className={styles.NotFound}>
        <Header />
        <h1 className={textstyles.problem404}>404</h1>
        <h1 className={textstyles.problem404}>Cтраница не найдена</h1>
        <Footer/>
    </div>
)
}

export default NotFound;