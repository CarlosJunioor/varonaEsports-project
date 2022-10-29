import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
   image: require('./imgs/team1.png').default, 
   caption:"",
   description:""
  },
  {
    image: require('./imgs/team2.png').default, 
    caption:"",
    description:""
   },
   {
    image: require('./imgs/team3.png').default, 
    caption:"",
    description:""
   } 
]

function HomeCarousel2() {
  const [index, setIndex] = useState(0);
  const handleSelect2 = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect2} interval={3000} pause={false}>
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
export default HomeCarousel2;
