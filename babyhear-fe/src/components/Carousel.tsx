import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "styled-components";

const Carousel = () => {
	const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

    return (
    <Section className="page-carousel">
    	<Slider {...settings}>
        <Box>box 1</Box>
        <Box>box 2</Box>
        <Box>box 3</Box>
        <Box>box 4</Box>
        <Box>box 5</Box>
        </Slider>
    </Section>
    );
}

export default Carousel;

const Section = styled.section`
  width: 320px;
  height: 170px;
  margin: 0 auto;
`;

const Box = styled.div`
  width: 200px;
  height: 150px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 10px;
`;