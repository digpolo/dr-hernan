import { Carousel } from "@material-tailwind/react";
import ImgSlider from "./img-slider";
import ImgSlider2 from "./img-slider2";
// interface carousel{
//   : number;
//   name: string;
//   href: string;
// }


 
export const CarouselDefault: React.FC = (props) => {
  return (
    <Carousel transition={{ duration: 2 }} autoplay loop>
      <div>
      <ImgSlider2/>
      </div>
      <ImgSlider/>
      <ImgSlider2/>
      <ImgSlider/>
      
      
    </Carousel>
  )
}