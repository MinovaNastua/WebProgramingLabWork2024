import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Header} from '../ElementInPages/Header.jsx'
import {FiveBlock} from '../ElementInPages/mainPage/fiveBlock.jsx'
import {Footer} from '../ElementInPages/Footer.jsx'
import '../../modulsStyle/index.css'
import data from '../../info/scethes.json'; // Импортируем JSON-файл

 function Scetches(){
  return (
  <StrictMode>
    <Header />
    <FiveBlock data={data}/>
    <Footer/>
  </StrictMode>
)
}


export default Scetches;