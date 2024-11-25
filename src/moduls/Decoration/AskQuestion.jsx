import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import styles from '../../modulsStyle/ModalWindow.module.css';
import Spinner from 'react-bootstrap/Spinner';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Toast from 'react-bootstrap/Toast';


import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




export function AskQuestion() {

   
  
    const toggleShowA = () => {setShow(false) ; setSeconds(0)};


    const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Функция для обновления секунд
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000); // Обновлять каждую секунду (1000 мс)

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, []);


  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(true);
 
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {

if(items.length<10){
    // Добавляем введённое значение в список
      
        setItems([...items, inputValue]);
      setVisible(true);
       setTimeout(() => {
        setVisible(false);
      }, 1000);
      // Очистка таймера при размонтировании компонента
      
      
}
else    {
    
    setShow(true);
      
}
      setInputValue('');
    }

 

 
  };


  
  useEffect(() => {
    // Устанавливаем таймер на 5 секунд (5000 мс)
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1000);

    // Очистка таймера при размонтировании компонента
    return () => clearTimeout(timer);
  }, []);
  // Очищаем поле ввода  


//   useEffect(() => {
//     if (ref.current) {
//       const inner = ref.current.querySelector(".progress-bar");
//       if ( inner ) {
//          inner.style.backgroundColor = "green";
//       }
//     }
//   }, [ref]);

  

  return (    <div style={{ margin: '20px'}}>

    


      <h1>Задай свой вопрос</h1>
      <form  onSubmit={handleSubmit}>
        <input
        // style={{  backgroundColor: '#F2889C', color:'black', fontFamily:'Andika'}}
         className={styles.textfield}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите что-то..."
          required
        />
        <button className={styles.buttonfield} type="submit" >Отправить </button>
       
        
      </form>

      
      <ProgressBar  animated  variant="danger"  now={items.length*10}  className="styles.progress" style={{'--bs-progress-bar-bg': '#ff69b4 !important', backgroundColor: 'pink !important', margin:'2vw', transition: ' 1s ease-in-out'}} />




      <Table striped bordered hover variant="dark" style={{ borderRadius: '10px'}} className="styles.progress" >
      
  
      {items.length > 0 && (
        
          <div style={{ color: '#000'}}>

           {/* <Toast show={show} style={{margin: '1vw', fontFamily:'andika', width:'50vw'}}>
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">Попытки отправить вопросы закончились!</strong>
            <small>{seconds} сек</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast> */}



        <Toast show={show} onClose={toggleShowA } style={{margin: '1vw', fontFamily:'andika', width:'50vw'}}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Попытки отправить вопросы закончились!</strong>
            <small>{seconds} сек назад</small>
          </Toast.Header>
          <Toast.Body>Вы можете отправить только 10 вопросовю Подождите пока их просмотрит администратор</Toast.Body>
        </Toast>
      


                <div>
                {visible && <Spinner style={{margin: '1vw'}} animation="border" variant="secondary" />}   
                </div>
                
              
  

        

        <thead style={{color: 'black', borderColor:'black !important',fontFamily:'andika'}}>
          <tr style={{backgroundColor: '#f2889c', color: 'black'}}>
            <th>Список введённых значений:</th>
          </tr>
        </thead>
        <tbody style={{backgroundColor: '#f2889c', borderColor:'black !important'}} >
        {!visible && items.map((item, index) => (
          <tr key={index} style={{color: 'black',backgroundColor: '#f2889c', borderColor:'black'}}>
         <td style={{color: 'black !important',backgroundColor: '#f2889c', borderColor:'black !important'}}>{item}</td>
           </tr>
              ))}
          
         
        </tbody>
          </div>
        )}
      </Table>

     
     
    </div>
  );
}

