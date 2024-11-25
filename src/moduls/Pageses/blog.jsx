import React from 'react';
import  textstyles  from '../../modulsStyle/Text.module.css'
import {Header} from '../ElementInPages/Header.jsx'
import {MyTabs} from '../Decoration/MyTabs.jsx'
import {Footer} from '../ElementInPages/Footer.jsx'
import  styles  from '../../modulsStyle/FirstPage.module.css'

 function Blog(){
  return (
    <div className={styles.NotFound}>
        <Header />
        <MyTabs/>
        <Footer/>
    </div>
)
}

export default Blog;