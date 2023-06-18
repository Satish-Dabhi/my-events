import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Typewriter from 'typewriter-effect';
import bg1 from '../assets/event-home.jpg';
import bg2 from '../assets/event-home2.jpg';
import bg3 from '../assets/event-home3.jpg';

const MyCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade={true}>
      <Carousel.Item>
        <img className="d-block w-100" src={bg1} alt="First slide" />
        <Carousel.Caption>
          <Typewriter
            options={{
              strings: ['Music Concert'],
              autoStart: true,
              loop: true,
            }}
          />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={bg2} alt="Second slide" />
        <Carousel.Caption>
          <Typewriter
            options={{
              strings: ['Fashion Show'],
              autoStart: true,
              loop: true,
            }}
          />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={bg3} alt="Third slide" />
        <Carousel.Caption>
          <Typewriter
            options={{
              strings: ['Culinary Festival'],
              autoStart: true,
              loop: true,
            }}
          />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
