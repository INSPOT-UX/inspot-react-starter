import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  border: 1px solid black;
  display: inline-block; height: 40px;
  padding: 5px 12px;
  border-radius: 3px;
  font-size: ${(props)=>props.fontSize};
  ${props => props.big && `
    padding: 10px 16px; height: 70px; font-size:1.5rem;
  `}
  &:hover {
    background: black;
    color: white; 
  }
`;

const ButtonStyled01 = ({children, big, ...rest}) => {
  return (
    <Wrapper fontSize="1rem" {...rest} big={big}>
      {children}
    </Wrapper>
  );
};

export default ButtonStyled01;