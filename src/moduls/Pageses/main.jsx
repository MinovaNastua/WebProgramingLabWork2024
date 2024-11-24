import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Header} from '../ElementInPages/Header.jsx'
import {FirstBlock} from '../ElementInPages/mainPage/FirstBlock.jsx'
import {ThirtBlock} from '../ElementInPages/mainPage/thirtBlock.jsx'
import {SecondBlock} from '../ElementInPages/mainPage/SecondBlock.jsx'
import {FourBlock} from '../ElementInPages/mainPage/FourBlock.jsx'
import {FiveBlock} from '../ElementInPages/mainPage/fiveBlock.jsx'
import {SevenBlock} from '../ElementInPages/mainPage/seven.jsx'
import {Footer} from '../ElementInPages/Footer.jsx'
import '../../modulsStyle/index.css'
import React from 'react';
import data from '../../info/portfolioFoto.json';

 function Mainn(){
  return (
    <div>
 <StrictMode>
    <Header />
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