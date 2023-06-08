import styled from "styled-components";
import PostImg from "../assets/post.png";
import { CommunityBoxProps } from "../interfaces/postContent";
import HeartImg from "../assets/heart.png";

const PostBox = ({ title, writer, text}: CommunityBoxProps) => {
  const truncatedTitle = title.length > 15 ? `${title.substring(0, 15)} ...` : title;
  const truncatedText = text.length > 100 ? `${text.substring(0, 100)} ...` : text;

  return (
    <Container>
      <Wrapper>
        <TitleBox>
          <img src={PostImg} alt="post-img" style={{ width: "45px" }} />
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginLeft: "10px" }}>
            <Title>{truncatedTitle}</Title>
            <Writer>{writer}</Writer>
          </div>
        </TitleBox>
        <Content>{truncatedText}</Content>
        <HeartButton>
          <img src={HeartImg} alt="heart-img" style={{ width: "20px", marginRight: "5px" }} />
          12
        </HeartButton>
      </Wrapper>
    </Container>
  );
}

export default PostBox;

const Container = styled.div`
  width: 330px;
  height: 150px;
  padding: 10px;
  margin: 10px;
  background-color: #ffffff;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  width: 280px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const TitleBox = styled.div`
  display: flex;
  margin-right: auto;
`;

const Title = styled.div`
  color: var(--text-default);
  font-size: 14px;
  font-weight: bold;
`;

const Writer = styled.div`
  color: var(--text-default);
  font-size: 11px;
`;

const Content = styled.div`
  width: 300px;
  height: 60px;
  margin-left: 40px;
  margin-top: 10px;
  color: var(--sub-text);
  font-size: 11px;
  line-height: 1.8;
  white-space: pre-line;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const HeartButton = styled.div`
  width: 70px;
  color: var(--gradient-end);
  font-size: 12px;
  display: flex;
  align-items: center;
  padding-left: 230px;
`;