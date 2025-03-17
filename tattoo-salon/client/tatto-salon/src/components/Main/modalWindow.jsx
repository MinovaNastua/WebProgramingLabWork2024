import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from '../style/ModalWindow.module.css';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function ModalWindow() {  // Изменено на заглавную букву
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
  
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/user-auth');
    };

    return (
      <>
        <Modal show={show} onHide={handleClose} animation={false}> 
            <div className={styles.body}>
                <Modal.Header closeButton style={{ borderBottom: 'var(--bs-modal-header-border-width) solid #F2889C' }}>
                    <Modal.Title>Зарегистрируйся</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ borderBottom: 'var(--bs-modal-header-border-width) solid #F2889C' }}>
                    и получи скиду 20% на первое посещение
                </Modal.Body>
                <Modal.Footer style={{ borderTop: 'var(--bs-modal-header-border-width) solid #F2889C' }}>
                    <Button style={{ backgroundColor: 'rgb(122 74 101)', borderColor: 'rgb(122 74 101)', color: '#F2889C' }} variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                    <Button style={{ backgroundColor: '#F2889C', borderColor: '#F2889C', color: '#232227' }} variant="primary" onClick={handleClick}>
                        Зарегистрироваться
                    </Button>
                </Modal.Footer>     
            </div>
        </Modal>
      </>
    );
}

export default ModalWindow;