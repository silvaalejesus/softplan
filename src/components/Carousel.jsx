import Carousel from 'react-bootstrap/Carousel';
import { useMediaQuery } from 'react-responsive';

const Caroussel = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Carousel fade indicators={true} interval={2000} style={{ overflow: 'hidden' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: isMobile ? '250px' : '350px', objectFit: 'cover' }}
          src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: isMobile ? '250px' : '350px', objectFit: 'cover' }}
          src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: isMobile ? '250px' : '350px', objectFit: 'cover' }}
          src="https://source.unsplash.com/random"
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Caroussel;
