import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Header} from './Header.jsx'
import {FirstBlock} from './FirstBlock.jsx'
import {ThirtBlock} from './thirtBlock.jsx'
import {SecondBlock} from './SecondBlock.jsx'
import {FourBlock} from './FourBlock.jsx'
import {FiveBlock} from './fiveBlock.jsx'
import {SevenBlock} from './seven.jsx'
import data from './portfolioFoto.json'
import {Footer} from './Footer.jsx'
import React from 'react';
import classNames from 'classnames';
import ModalWindow from './modalWindow.jsx';
const Mainn = () =>
 {


  return (
    <div className={{ maxWidth: '100vw !important'}}>
 <StrictMode>
      <ModalWindow/>
    
    <FirstBlock/>
    <SecondBlock/>
    <ThirtBlock/>
    <FourBlock/>
    <FiveBlock data={data}/>
    <SevenBlock/>
    <Footer/>
  </StrictMode>
    </div>
)
}

export default Mainn;