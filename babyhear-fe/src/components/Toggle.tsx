import { useState } from 'react';
import styled from 'styled-components';

interface ToggleProps {
  isOn: boolean;
  onToggle: () => void;
  text: string;
}

const Toggle = ({ isOn, onToggle, text }: ToggleProps) => {
  return (
    <ToggleContainer onClick={onToggle}>
      <div className={`toggle-container ${isOn ? 'toggle--checked' : null}`}>
        {isOn ? "ON" : null}
      </div>
      <div className={`toggle-circle ${isOn ? 'toggle--checked' : null}`} />
      <Text>{text}</Text>
    </ToggleContainer>
  );
};

export default Toggle;

const ToggleContainer = styled.div`
  position: relative;
  margin-top: 1rem;
  cursor: pointer;
  display: flex;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: var(--status-inactive);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 2px 0 0 7px;
    font-size: 12px;
    justify-content: flex-start;
    color: #ffffff;
    transition: 0.5s;
  }
  > .toggle--checked {
    background-color: var(--status-active);
    transition: 0.5s;
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: 0.5s;
  }
  > .toggle--checked {
    left: 27px;
    transition: 0.5s;
  }
`;

const Text = styled.div`
  color: #ffffff;
  font-size: 13px;
  margin: 3px 0 0 10px;
`;
