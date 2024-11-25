import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from '../../modulsStyle/ModalWindow.module.css';
import {MyCarousel} from '../Decoration/myCarousel.jsx';
import {AskQuestion} from '../Decoration/AskQuestion.JSX';
import {Accordeon} from '../Decoration/Accordeon.jsx';

export function MyTabs() {
  const [key, setKey] = useState('home');

  return (
    <div className={styles.tabBlock}>
      <Tabs 
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        // className="mb-3"
        className={styles.nav}
      >
        <Tab eventKey="Популярные вопросы" title="Популярные вопросы"   >
        <Accordeon/>
        </Tab>
        <Tab eventKey="Задать свой вопрос" title="Задать свой вопрос">
        <AskQuestion/>
        </Tab>
        <Tab eventKey="Статьи" title="Статьи">
        <MyCarousel/>
        </Tab>
      </Tabs>
    </div>
  );
}
