import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import YoutubeThumbnail from "../components/YoutubeThumbnail";
import { VIDEO_URLS } from '../static/videoUrl';
import Header from "../components/Header";

const VideoDetail = () => {
  const videoId = useParams().videoId;
  const location = useLocation();
  const { category } = location.state || {};
  const IntVideoId = parseInt(videoId || "0", 10) as number;

  return (
    <Container>
      <Header link="/video-curation" />
      <BottomWrapper>
        <CategoryTitleBox>
          <VideoCategory>{category}</VideoCategory>
          <SubTitle>시청을 희망하시는 영상을 클릭해주세요!</SubTitle>
        </CategoryTitleBox>
        <VideoTitle>
          <span style={{ color: "var(--highlight)"}}>아이</span>가 좋아할 영상이에요.
        </VideoTitle>
        <ContentBox>
          {VIDEO_URLS[IntVideoId].slice(0, 6).map((url, index) => (
            <YoutubeThumbnail key={index} videoUrl={url} />
          ))}
        </ContentBox>
        <VideoTitle>
          <span style={{ color: "var(--highlight)"}}>부모님</span>이 좋아하실 영상이에요.
        </VideoTitle>
        <ContentBox>
          {VIDEO_URLS[IntVideoId].slice(6, 12).map((url, index) => (
            <YoutubeThumbnail key={index} videoUrl={url} />
          ))}
        </ContentBox>
      </BottomWrapper>
    </Container>
  );
}

export default VideoDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubTitle = styled.div`
  color: var(--sub-text);
  font-size: 13px;
  margin: -10px 0 20px 20px;
  margin-right: auto;
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

const VideoCategory = styled.div`
  color: var(--text-default);
  font-size: 20px;
  font-weight: bold;
  margin: -20px 0 20px 20px;
  margin-right: auto;
`;

const CategoryTitleBox = styled.div`
  width: 390px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
`;

const ContentBox = styled.div`
  width: 380px;
  height: 300px;
  max-height: 320px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const VideoTitle = styled.div`
  width: 370px;
  color: var(--sub-text);
  font-size: 15px;
  font-weight: bold;
  margin: 30px 0 0 10px;
`;