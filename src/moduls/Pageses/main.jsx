import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Header} from '../ElementInPages/Header.jsx'
import {FirstPage} from './FirstPage.jsx'
import '../../modulsStyle/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <FirstPage/>
  </StrictMode>,
)

