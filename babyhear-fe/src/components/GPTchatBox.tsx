import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const GPTChatBox = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://seungyeonnnnnni.shop/completion/chat', {
        message: message
      });

      const { messages } = response.data;
      if (messages && messages.length > 0) {
        const assistantMessage = messages[0].message.replace(/\n/g, '<br>');
        setResponse(assistantMessage);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BoxContainer>
      <InputContainer>
        <Input type="text" value={message} onChange={handleInputChange} />
        <Button onClick={handleSubmit}>전송</Button>
      </InputContainer>
      <ResponseBox dangerouslySetInnerHTML={{ __html: response }}/>
    </BoxContainer>
  )
};

export default GPTChatBox;

const BoxContainer = styled.div`
  width: 350px;
  height: 250px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  width: 350px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Input = styled.input`
  width: 290px;
  height: 35px;
  font-size: 12px;
  border-radius: 10px;
  outline: none;
  border: none;
  color: var(--text-default);
  padding-left: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  width: 50px;
  height: 35px;
  border: none;
  outline: none;
  border-radius: 10px;
  transition: 0.3s ease;
  font-size: 12px;
  color: #ffffff;
  background: linear-gradient(to right, var(--start-opacity), var(--end-opacity));
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ResponseBox = styled.div`
  width: 350px;
  height: 150px;
  padding: 7px;
  line-height: 1.5;
  font-size: 12px;
  color: var(--text-default);
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
`;