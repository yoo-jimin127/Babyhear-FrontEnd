import styled from "styled-components";
import PostImg from "../assets/post.png";
import { CommunityBoxProps } from "../interfaces/postContent";

const CommunityBox = ({ id, title, nickname, detail, date, link}: CommunityBoxProps) => {
  const truncatedTitle = title.length > 15 ? `${title.substring(0, 15)} ...` : title;
  const truncatedText = detail.length > 100 ? `${detail.substring(0, 100)} ...` : detail;

  return (
    <Container>
      <Wrapper>
        <TitleBox>
          <img src={PostImg} alt="post-img" style={{ width: "45px" }} />
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginLeft: "10px" }}>
            <Title>{truncatedTitle}</Title>
            <Writer>{nickname}</Writer>
          </div>
        </TitleBox>
        <Content>{truncatedText}</Content>
      </Wrapper>
    </Container>
  );
}

export default CommunityBox;

const Container = styled.div`
  width: 300px;
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
  height: 60px;
  margin-top: 10px;
  color: var(--sub-text);
  font-size: 11px;
  line-height: 1.8;
  white-space: pre-line;
  overflow: hidden;
  text-overflow: ellipsis;
`;
