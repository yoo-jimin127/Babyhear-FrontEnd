import styled from 'styled-components';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { LikePostDummy, RecentPostDummy } from '../static/postContent';
import ListComponent from '../components/ListComponent';

const PostList = () => {
  return (
    <Container>
      <Header link="/community" />
      <BottomWrapper>
        <FeatTitle>
          청각 장애 부모님을 위한<br />
          <span style={{ color: "var(--highlight)"}}>육아 커뮤니티</span>에요.<br />
          다양한 이야기를 함께 나눠보세요!
        </FeatTitle>
          <ListComponent contents={LikePostDummy} />
      </BottomWrapper>
    </Container>
  );
}

export default PostList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BottomWrapper = styled.div`
  height: 550px;
  display: flex;
  margin: 50px 0;
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
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;