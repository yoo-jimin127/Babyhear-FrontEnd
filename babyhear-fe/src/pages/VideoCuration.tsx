import { useEffect, useState } from "react";
import styled from "styled-components";
import FeatBg from "../assets/featBg.png";
import LogoImg from "../assets/logo.png";
import EmotionImg from "../assets/emotion.png";
import CommunityImg from "../assets/community.png";
import EtiquetteImg from "../assets/etiquette.png";
import SolvingImg from "../assets/solving.png";
import VideoCurationButton from "../components/VideoCurationButton";

const VideoCuration = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
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
      <TopWrapper  windowWidth={windowWidth}>
        <TitleBox>
          <Logo src={LogoImg} alt='logo-image' />
          <Title>
            베이비 히어에서 제공하는<br />
            다양한 서비스를 사용해보세요.
          </Title>
        </TitleBox>
      </TopWrapper>
      <BottomWrapper>
        <FeatTitle>
          영유아 정서 발달에 도움이 되는<br />
          <span style={{ color: "var(--highlight)"}}>양질의 콘텐츠</span>를 선별했어요.<br />
          원하는 카테고리를 선택해보세요!
        </FeatTitle>
        <ContentBox>
          <Category>감정표현과 사회적 상호작용</Category>
          <VideoCurationButton 
            link="/video-detail/1"
            text={`다양한 감정을 인식하고 표현하며,\n사회적 상호작용을 경험할 수 있어요.`}
            image={EmotionImg}
          />
        </ContentBox>
        <ContentBox>
          <Category>언어 발달과 의사소통</Category>
          <VideoCurationButton 
            link="/video-detail/2"
            text={`수화 또는 자막이 포함된 영상을 활용해\n언어와 의사소통 능력을 기를 수 있어요.`}
            image={CommunityImg}
          />
        </ContentBox>
        <ContentBox>
          <Category>예절과 생활습관</Category>
          <VideoCurationButton 
            link="/video-detail/3"
            text={`식사 예절, 손 씻기, 정리정돈 등\n예절과 생활 습관을 배울 수 있어요.`}
            image={EtiquetteImg}
          />
        </ContentBox>
        <ContentBox>
          <Category>간단한 문제 해결과 논리적 사고</Category>
          <VideoCurationButton 
            link="/video-detail/4"
            text={`색상, 모양, 소리, 텍스처 등\n감각 자극과 인지발달을 도울 수 있어요.`}
            image={SolvingImg}
          />
        </ContentBox>
      </BottomWrapper>
    </Container>
  );
}

export default VideoCuration;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TopWrapper = styled.div<{ windowWidth: number }>`
  width: ${(props) => (props.windowWidth < 390 ? "100%" : "390px" )};
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

const BottomWrapper = styled.div`
  height: 650px;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 420px) {
    justify-content: space-around;
  }
`;

const ContentBox = styled.div`
  width: 390px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FeatTitle = styled.div`
  color: var(--text-default);
  font-size: 20px;
  font-weight: bold;
  margin: -20px 0 20px 20px;
  margin-right: auto;
`;

const Category = styled.div`
  color: var(--text-default);
  font-size: 16px;
  font-weight: bold;
  margin-left: 30px;
`;