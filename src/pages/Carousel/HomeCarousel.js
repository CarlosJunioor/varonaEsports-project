import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
   image: require('./imgs/sponsor2.png').default, 
   caption:"",
   description:""
  },
  {
    image: require('./imgs/sponsor2.png').default, 
    caption:"",
    description:""
   },
   {
    image: require('./imgs/sponsor2.png').default, 
    caption:"",
    description:""
   } 
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000} pause={false}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="rounded mx-auto d-block"
          src={slide.image}
          alt="slider imagedfgdfg"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default HomeCarousel;
