import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowImg from "../assets/arrow.png";

interface FeatButtonProps {
  link: string;
  title: string;
  image: string;
}

const FeatButton = ({ link, title, image }: FeatButtonProps) => {
  return (
    <ButtonContainer to={link}>
      <LeftContents>
        <img src={image} alt="feat-button-img" style={{ width: "65px" }} />
        <Title>{title}</Title>
      </LeftContents>
      <RightContents>
        <img src={ArrowImg} alt="feat-button-img" style={{ width: "45px" }} />
      </RightContents>
    </ButtonContainer>
  );
};

export default FeatButton;

const ButtonContainer = styled(Link)`
  width: 350px;
  height: 130px;
  margin: 10px auto;
  display: flex;
  border-radius: 20px;
  transition: 0.3s ease;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const LeftContents = styled.div`
  width: 250px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 20px 0 0 20px;
  font-size: 20px;
  color: #ffffff;
  background: linear-gradient(to right, var(--start-opacity), var(--end-opacity));
  border: none;
  cursor: pointer;
`;

const RightContents = styled.div`
  width: 100px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 0 20px 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  width: 130px;
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
  line-height: 1.3;
  text-align: left;
  white-space: pre-line;
  > * {
    display: block;
  }
`;