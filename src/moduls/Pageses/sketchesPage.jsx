import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Header} from '../ElementInPages/Header.jsx'
import {FiveBlock} from '../ElementInPages/mainPage/fiveBlock.jsx'
import {Footer} from '../ElementInPages/Footer.jsx'
import '../../modulsStyle/index.css'

 function Scetches(){
  return (
  <StrictMode>
    <Header />
    <FiveBlock/>
    <Footer/>
  </StrictMode>
)
}


export default Scetches;