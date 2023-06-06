import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = () => {
    // axios.post("/api/post", { title, content })
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    console.log(`---Submit---\nTitle:${title}\nContent:${content}`);
    navigate("/community");
  };

  return (
    <Container>
      <Header link="/community" />
      <BottomWrapper>
        <FeatTitle>
          청각 장애 부모님을 위한<br />
          <span style={{ color: "var(--highlight)"}}>육아 커뮤니티</span>에요.<br />
          다양한 이야기를 함께 나눠보세요!
        </FeatTitle>
        <FlexBox>
        <TitleInput
          type="text"
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={handleTitleChange}
        />
        <SubmitButton onClick={handleSubmit}>게시</SubmitButton>
        </FlexBox>
        <ContentTextarea
          placeholder="당신의 이야기를 들려주세요."
          value={content}
          onChange={handleContentChange}
        />
        <Legal>
          <div 
            style={{ color: "var(--sub-text)", 
                    fontSize: "13px", 
                    fontWeight: "bold", 
                    marginBottom: "10px"
                  }}>
            게시글 작성 시 주의사항
          </div>
          상대방에게 불쾌함 또는 모욕감을 주는 내용을 게시한 경우,<br />
          비속어 또는 욕설을 사용해 글을 게시한 경우 등<br />
          온라인 커뮤니티 상에서 에티켓을 지키지 않은 게시자와 게시물은<br />
          관리자에 의해 게시물 삭제 후 신고 또는 처벌을 받을 수 있습니다.<br /><br /> 
          커뮤니티 멤버들과 상호 존중하며 건전한 토론과 정보 공유를 도모하는 데에 협조해 주시기 바랍니다.<br /><br />
          베이비 히어는 모든 청각 장애 부모님들께 보다 편한 육아 환경을 제공드리기 위해 최선을 다하겠습니다.
        </Legal>
      </BottomWrapper>
    </Container>
  );
}

export default Post;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BottomWrapper = styled.div`
  height: 600px;
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

const FlexBox = styled.div`
  width: 370px;
  display: flex;
  justify-content: space-evenly;
`;

const TitleInput = styled.input`
  width: 250px;
  height: 40px;
  padding: 7px 10px;
  color: var(--text-default);
  font-size: 12px;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: var(--sub-text);
  }
`;

const ContentTextarea = styled.textarea`
  width: 330px;
  height: 200px;
  padding: 10px;
  color: var(--text-default);
  font-size: 12px;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: var(--sub-text);
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 13px;
  color: #ffffff;
  background: linear-gradient(
    to right,
    var(--start-opacity),
    var(--end-opacity)
  );
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Legal = styled.div`
  width: 300px;
  height: 150px;
  margin: 20px 0;
  color: var(--sub-text);
  font-size: 11px;
  white-space: pre-line;
`;