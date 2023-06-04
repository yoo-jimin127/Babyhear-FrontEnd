import { useEffect, useState } from "react";
import styled from "styled-components";
import MainBg from "../assets/mainBg.png";
import LogoImg from "../assets/logo.png";
import { Toggle } from "../components/Toggle";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isRecordOn, setIsRecordOn] = useState(false);
  const [isVibrateOn, setIsVibrateOn] = useState(false);

  const handleRecordToggle = () => {
    setIsRecordOn(!isRecordOn);
  };

  const handleVibrateToggle = () => {
    setIsVibrateOn(!isVibrateOn);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <Container>
      <TopWrapper windowWidth={windowWidth}>
        <TitleBox>
          <Logo src={LogoImg} alt='logo-image' />
          <Title>
            베이비 히어에서 제공하는<br />
            다양한 서비스를 사용해보세요.
          </Title>
        </TitleBox>
        <DetectBox>
          <DescBox>
            <Title style={{ fontSize: "20px" }}>울음소리 감지 기능</Title>
            <SubTitle>
              AI 모델이 아기의 울음소리를 감지하여<br />
              기기에 알림(진동)을 전송합니다.
            </SubTitle>
          </DescBox>
          <ToggleBox>
            <Toggle isOn={isRecordOn} onToggle={handleRecordToggle} text="음성 인식" />
            <Toggle isOn={isVibrateOn} onToggle={handleVibrateToggle} text="진동" />
          </ToggleBox>
        </DetectBox>
      </TopWrapper>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TopWrapper = styled.div<{ windowWidth: number }>`
  width: ${(props) => (props.windowWidth < 768 ? "100%" : "390px")};
  height: 250px;
  background-image: url(${MainBg});
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
  margin: 10px 0 0 10px;
  margin-right: auto;
`;

const Logo = styled.img`
  width: 60px;
`;

const Title = styled.div`
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  line-height: 1.7;
`;

const SubTitle = styled.div`
  color: #ffffff;
  font-size: 13px;
  font-weight: medium;
  line-height: 1.5;
`;

const DetectBox = styled.div`
  width: 350px;
  height: 120px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const ToggleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;