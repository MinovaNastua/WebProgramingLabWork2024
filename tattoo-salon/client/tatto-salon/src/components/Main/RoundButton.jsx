import  styles  from '../style/ButtonInHeader.module.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export function RoundButton({title, ad}){
   const address = useSelector((state) => state.address);

   // const handleClick = () => {
   //     if (address) {
   //         window.location.href = address; // Переход по адресу
   //     }
   // };
const navigate = useNavigate();
   const handleClick = () => {
      navigate(ad);
  };


   return (
   <button onClick={handleClick}  className={styles.roundButton}>
   {title}
   </button>
   )
}