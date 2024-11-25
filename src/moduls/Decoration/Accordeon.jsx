// import Accordion from 'react-bootstrap/Accordion';
// import styles from '../../modulsStyle/ModalWindow.module.css';

// export function Accordeon() {
//   return (
//     <div >
//        <Accordion className={styles.accordeonBlock}>
//       <Accordion.Item className={styles.accordeonEl} eventKey="0">
//         <Accordion.Header >Accordion Item #1</Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item className={styles.accordeonEl} eventKey="1">
//         <Accordion.Header>Accordion Item #2</Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item className={styles.accordeonEl} eventKey="2">
//         <Accordion.Header>Accordion Item #2</Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion> 
//     </div>
    
//   );
// }

import Accordion from 'react-bootstrap/Accordion';
import styles from '../../modulsStyle/ModalWindow.module.css';
import accordionData from '../../info/questions.json'; // Импортируйте JSON

export function Accordeon() {
  return (
    <div>
      <Accordion  className={styles.accordeonBlock}>
        {accordionData.map(item => (
          <Accordion.Item  className={styles.accordeonEl}  eventKey={item.id.toString() } key={item.id}>
            <Accordion.Header >{item.title}</Accordion.Header>
            <Accordion.Body >
              {item.content}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

// style={{borderRadius: '10px !important', borderRadius: '20px', height: '3vw'}}