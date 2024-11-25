// import Carousel from 'react-bootstrap/Carousel';
// // import ExampleCarouselImage from '../../../public/sketches/1.png';
// import {ExampleCarouselImage} from '../Decoration/ExampleCarouselImage.jsx';

// export function MyCarousel() {
//   return (
//     <div style={{margin: '3vw', marginBottom: '0vw', fontFamily: 'Andika'}}>
//        <Carousel   fade={true}>
//       <Carousel.Item>
//         <ExampleCarouselImage text="../../../public/process/1.png" />
//         <Carousel.Caption>
//           <h3>Как подготовится к тату сеансу</h3>
//           <p>Все что необходимо или запрещается делать перед сеансом </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="../../../public/process/2.png" />
//         <Carousel.Caption>
//           <h3>Почему татуировки могут плохо зажить</h3>
//           <p>Список причин почему ваша татуировка выпала или расплылась</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="../../../public/process/3.png" />
//         <Carousel.Caption>
//           <h3>Почему татуировки со временем "плавут"</h3>
//           <p>
//             Причины, по которым татуировки расплываются со временем
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel> 
//     </div>
    
//   );
// }


import Carousel from 'react-bootstrap/Carousel';
import { ExampleCarouselImage } from '../Decoration/ExampleCarouselImage.jsx';
import './MyCarousel.css'; // Импортируйте файл стилей

export function MyCarousel() {
  return (
    <div style={{ margin: '3vw', marginBottom: '0vw', fontFamily: 'Andika' }}>
      <Carousel >
        <Carousel.Item>
          <ExampleCarouselImage text="../../../public/process/1.png" />
          <Carousel.Caption>
            <h3>Как подготовится к тату сеансу</h3>
            <p>Все что необходимо или запрещается делать перед сеансом</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="../../../public/process/2.png" />
          <Carousel.Caption>
            <h3>Почему татуировки могут плохо зажить</h3>
            <p>Список причин почему ваша татуировка выпала или расплылась</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="../../../public/process/3.png" />
          <Carousel.Caption>
            <h3>Почему татуировки со временем "плавут"</h3>
            <p>Причины, по которым татуировки расплываются со временем</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}