import { useEffect, useState } from "react";
import styled from "styled-components";
import MainBg from "../assets/mainBg.png";
import LogoImg from "../assets/logo.png";
import Toggle from "../components/Toggle";
import axios from 'axios';
import FeatButton from "../components/FeatButton";
import VideoImg from "../assets/video.png";
import InfantImg from "../assets/infant.png";
import { useAudioRecorder } from 'react-audio-voice-recorder';

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

  const {
    startRecording,
    stopRecording,
    recordingBlob,
  } = useAudioRecorder();

  useEffect(() => {
    let nineSecInterval = setInterval(() => {
      if(isRecordOn){
        stopRecording();
        startRecording();
      }
    }, 9000)

    return () => {
      clearInterval(nineSecInterval)
    }
  },[stopRecording, startRecording, isRecordOn])

  useEffect(() => { 
    if(!recordingBlob) return;

    const audioFile = new File([recordingBlob], 'signal_9s.webm', { type: 'audio/webm' })
    const formData = new FormData()
    formData.append('file', audioFile);

    axios
      .post("https://seungyeonnnnnni.shop/record", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("오디오 업로드 성공: ", response);
      })
      .catch((error) => {
        console.error("오디오 업로드 실패: ", error);
      });

    // 다운로드 파일 주석
    // const url = URL.createObjectURL(recordingBlob);
    // const link = document.createElement("a");
    // link.href = url;
    // link.download = "voice.webm";
    // link.click();
  },[recordingBlob])

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isVibrateOn) {
      interval = setInterval(() => {
        fetch("https://seungyeonnnnnni.shop/hello")
          .then((response) => response.json())
          .then((data) => {
            if (data === 1) {
              console.log("-----start vibrate-----");
              window.navigator.vibrate([500, 100, 500, 100, 500, 100, 500, 100, 500, 100, 500, 100, 500, 100, 500, 100, 100, 500, 100, 500, 100, 500, 100, 500, 100]);
              console.log("-----end vibrate-----");
            }
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, 10000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isVibrateOn]);

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
      <BottomWrapper>
        <ContentBox>
          <FeatTitle>
            영유아를 위한 <span style={{ color: "var(--highlight)"}}>영상 큐레이션</span>
          </FeatTitle>
          <FeatDesc>
            베이비 히어에서 영유아 정서 발달에 도움이 되는<br />
            양질의 콘텐츠를 선별했어요.
            <FeatButton 
              link="/video-curation" 
              title="Video Curation" 
              image={VideoImg} 
            />
          </FeatDesc>
        </ContentBox>
        <ContentBox>
          <FeatTitle>
            부모님을 위한 <span style={{ color: "var(--highlight)"}}>육아 커뮤니티</span>
          </FeatTitle>
          <FeatDesc>
            청각 장애 부모님을 위한 육아커뮤니티에요.<br />
            육아 중 겪는 다양한 이야기를 함께 나눠보세요!
            <FeatButton 
              link="/community" 
              title="Parenting Comminity" 
              image={InfantImg} 
            />
          </FeatDesc>
        </ContentBox>
      </BottomWrapper>
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

const BottomWrapper = styled.div`
  height: 530px;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 420px) {
    justify-content: space-around;
    margin-top: 50px;
  }
`;

const ContentBox = styled.div`
  width: 350px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;

const FeatTitle = styled.div`
  color: var(--text-default);
  font-size: 20px;
  font-weight: bold;
`;

const FeatDesc = styled.div`
  color: var(--sub-text);
  font-size: 13px;
  margin-bottom: 20px;
`;