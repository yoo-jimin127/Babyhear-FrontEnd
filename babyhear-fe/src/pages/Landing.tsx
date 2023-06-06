import { useEffect, useState } from "react";
import styled from "styled-components";
import LandingBg from '../assets/landingBg.png';
import LogoImg from "../assets/logo.png";
import EarImg from "../assets/ear.png";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const [remainderSec, setRemainderSec] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (remainderSec > 0) {
        setRemainderSec(remainderSec - 1);
      } else {
        navigate("/home");
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [remainderSec, navigate]);

  return (
    <Container>
      <TopWrapper>
        <Logo src={LogoImg} alt="logo-image" />
      </TopWrapper>
      <BottomWrapper>
        <SubTitle>
          청각 장애 부모를 위한<br />
          울음소리 감지 서비스
        </SubTitle>
        <FlexBox>
          <Title>BABY HEAR</Title>
          <Ear src={EarImg} alt="ear-image" />
        </FlexBox>
        <Button to="/home">시작하기</Button>
        <SubTitle>{remainderSec + 1}초 뒤에 메인 서비스 페이지로 이동합니다.</SubTitle>
      </BottomWrapper>
    </Container>
  );
}

export default Landing;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TopWrapper = styled.div`
  width: 420px;
  height: 400px;
  background-image: url(${LandingBg});
  background-position: top;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 180px;
`;

const BottomWrapper = styled.div`
  width: 420px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const SubTitle = styled.div`
  color: var(--primary);
  font-size: 13px;
  text-align: center;
  line-height: 1.7;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Title = styled.div`
  color: var(--primary);
  font-size: 24px;
  font-weight: bold;
`;

const Ear = styled.img`
  width: 45px;
  margin: 15px 0 0 10px;
`;

const Button = styled(Link)`
  margin: 60px 0 20px 0;
  padding: 10px 20px;
  font-size: 14px;
  color: #ffffff;
  background: linear-gradient(
    to right,
    var(--start-opacity),
    var(--end-opacity)
  );
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    background: linear-gradient(
      to right,
      var(--start-opacity),
      var(--end-opacity)
    );
  }
`;