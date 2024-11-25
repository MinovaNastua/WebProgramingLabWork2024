import Image from 'react-bootstrap/Image';

// export function ExampleCarouselImage() {
//   return <Image src="../Decoration/myCarousel.jsx" fluid />;
// }

export function ExampleCarouselImage({ text }) {
    return (
      <Image
        src={text }
        fluid
        style={{height:'40vw', width:'100%',objectFit: 'cover'}}
      />
    );
  }