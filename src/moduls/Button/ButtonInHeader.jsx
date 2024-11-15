import  styles  from '../../modulsStyle/ButtonInHeader.module.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Button({to, title}){
   
   const navigate = useNavigate();
 
    const handleClick = () => {
        navigate(to);
    };

   return (
       <button onClick={handleClick} className={styles.layout} title={title}>{title}</button>
   )
}