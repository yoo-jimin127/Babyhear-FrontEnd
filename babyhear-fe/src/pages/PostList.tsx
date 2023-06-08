import styled from 'styled-components';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { LikePostDummy } from '../static/postContent';
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
          <ContentBox>
            <ListComponent contents={LikePostDummy} />
          </ContentBox>
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
  margin-bottom: 30px;
`;

const BottomWrapper = styled.div`
  height: 550px;
  display: flex;
  padding-right: 20px;
  margin: 30px 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 420px) {
    justify-content: space-around;
  }
`;

const FeatTitle = styled.div`
  color: var(--text-default);
  font-size: 20px;
  font-weight: bold;
  margin: -20px 0 0 40px;
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