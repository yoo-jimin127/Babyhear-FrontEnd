import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackButtonImg from "../assets/back-icon.png";
import FeatBg from "../assets/featBg.png";
import LogoImg from "../assets/logo.png";
import styled from "styled-components";

interface HeaderProps {
  link: string;
}

const Header = ({ link }: HeaderProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      console.log(window.innerWidth);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return(
    <TopWrapper windowWidth={windowWidth}>
      <TitleBox>
        <BackButton to={link}>
          <img src={BackButtonImg} alt="back-button" style={{ width: "35px" }} />
        </BackButton>
        <Logo src={LogoImg} alt='logo-image' />
        <Title>
          베이비 히어에서 제공하는<br />
          다양한 서비스를 사용해보세요.
        </Title>
      </TitleBox>
    </TopWrapper>
  );
}

export default Header;

const TopWrapper = styled.div<{ windowWidth: number }>`
  width: ${(props) => (props.windowWidth < 390 ? "390px" : "440px" )};
  height: 100px;
  background-image: url(${FeatBg});
  background-position: top;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10px 0 0 7%;
  margin-right: auto;
`;

const Logo = styled.img`
  width: 60px;
  margin-left: 15px;
`;

const Title = styled.div`
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  line-height: 1.7;
`;

const BackButton = styled(Link)`
  width: 35px;
  margin: 10px 0 0 10px;
  margin-right: auto;
`;