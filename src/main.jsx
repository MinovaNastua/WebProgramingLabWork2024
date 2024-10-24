import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Header} from './moduls/Header.jsx'
import {FirstPage} from './moduls/FirstPage.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  <FirstPage/>
  </StrictMode>,
)

