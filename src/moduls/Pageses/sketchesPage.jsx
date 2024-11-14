import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Header} from '../ElementInPages/Header.jsx'
import {FiveBlock} from '../ElementInPages/mainPage/fiveBlock.jsx'
import {Footer} from '../ElementInPages/Footer.jsx'
import '../../modulsStyle/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <FiveBlock/>
    <Footer/>
  </StrictMode>
)
