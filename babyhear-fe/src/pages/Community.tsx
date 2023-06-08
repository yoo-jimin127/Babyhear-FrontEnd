import styled from "styled-components";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import { LikePostDummy, RecentPostDummy } from "../static/postContent";
import ArrowImg from "../assets/arrow.png";

const Community = () => {
  return (
    <Container>
      <Header link="/home" />
      <BottomWrapper>
        <FeatTitle>
          청각 장애 부모님을 위한<br />
          <span style={{ color: "var(--highlight)"}}>육아 커뮤니티</span>에요.<br />
          다양한 이야기를 함께 나눠보세요!
        </FeatTitle>
        <ContentBox>
          <Category to="/community-list/1">
            많은 공감을 받은 이야기에요.
            <ArrowButton>
              전체 보기
              <img src={ArrowImg} alt="arrow-img" style={{ width: "20px" }} />
            </ArrowButton>
          </Category>
          <Carousel contents={LikePostDummy} />
        </ContentBox>
        <ContentBox>
          <Category to="/community-list/2">
            최근에 올라온 이야기에요.
            <ArrowButton style={{ marginLeft: "90px"}}>
              전체 보기
              <img src={ArrowImg} alt="arrow-img" style={{ width: "20px" }} />
            </ArrowButton>
          </Category>
          <Carousel contents={RecentPostDummy} />
        </ContentBox>
      </BottomWrapper>
      <Button to="/post">글쓰기</Button>
    </Container>
  );
}

export default Community;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BottomWrapper = styled.div`
  height: 550px;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 420px) {
    justify-content: space-around;
  }
`;

const FeatTitle = styled.div`
  color: var(--text-default);
  font-size: 20px;
  font-weight: bold;
  margin: -20px 0 0 20px;
  margin-right: auto;
`;

const ContentBox = styled.div`
  width: 390px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Category = styled(Link)`
  color: var(--text-default);
  display: flex;
  justify-content: space-around;
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0 0 30px;
  margin-right: auto;
`;

const ArrowButton = styled.div`
  width: 80px;
  color: var(--primary);
  margin-left: 70px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled(Link)`
  width: 350px;
  text-align: center;
  padding: 10px 0;
  margin: 40px 0;
  font-size: 14px;
  font-weight: bold;
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