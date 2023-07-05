import styled from 'styled-components';
import PostBox from './PostBox';
import { CommunityBoxProps } from '../interfaces/postContent';

interface ListComponentProps {
  contents: Array<CommunityBoxProps>;
}

const ListComponent = ({contents}:ListComponentProps) => {
  return (
    <Wrapper>
      {contents.map((post, index) => (
        <PostBox
          id={index}
          title={post.title}
          nickname={post.nickname}
          detail={post.detail}
          date={post.date}
          link={post.link}
        />
      ))}
    </Wrapper>
  );
}

export default ListComponent;

const Wrapper = styled.div`
  width: 370px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
`;