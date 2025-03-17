import  styles  from '../style/ButtonInHeader.module.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export function Button({to, title}){
   
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
         Эта кнопка переведет вас на страницу '{title}'
        </Tooltip>
      );

   const navigate = useNavigate();
 
    const handleClick = () => {
        navigate(to);
    };

   return (


<OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
          {/* <Button variant="success" onClick={handleClick}>Hover me to see</Button> */}
        <button onClick={handleClick} className={styles.layout} title={title}>{title}</button>
    </OverlayTrigger>

       
   )
}