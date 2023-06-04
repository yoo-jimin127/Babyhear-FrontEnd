import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowImg from "../assets/arrow.png";
import React from "react";

interface VideoCurationButtonProps {
  link: string;
  text: React.ReactNode;
  image: string;
}

const VideoCurationButton = ({ link, text, image }: VideoCurationButtonProps) => {
  return (
    <ButtonContainer to={link}>
      <img src={image} alt="curation-image" style={{ width: "70px" }} />
      <Text>{text}</Text>
    </ButtonContainer>
  );
};

export default VideoCurationButton;

const ButtonContainer = styled(Link)`
  width: 350px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  background-color: #ffffff;
  transition: 0.3s ease;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Text = styled.div`
  width: 240px;
  color: var(--sub-text);
  font-size: 13px;
  line-height: 1.5;
  text-align: left;
  white-space: pre-line;
`;