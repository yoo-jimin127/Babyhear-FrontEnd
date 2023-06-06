import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "styled-components";
import CommunityBox from "./CommunityBox";
import { CommunityBoxProps } from "../interfaces/postContent";

interface CarouselProps {
  contents: Array<CommunityBoxProps>;
}

const Carousel = ({contents}: CarouselProps) => {
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
        {contents.map((post, index) => (
          <CommunityBox
            key={index}
            title={post.title}
            writer={post.writer}
            text={post.text}
          />
        ))}
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

const Arrow = styled.div`
  color: var(--primary);
  font-size: 24px;
  line-height: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;