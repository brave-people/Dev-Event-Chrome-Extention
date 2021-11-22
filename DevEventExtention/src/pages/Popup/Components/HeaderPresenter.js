import React from 'react';
import styled from 'styled-components';
import {lighten} from 'polished';
import {RiCloseLine} from 'react-icons/ri';

const HeaderWraper = styled.div`
  width: 100%;
  height: 10%;
  color: ${props => props.theme.Colors.btColorGray};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  width: 60%;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  flex-grow: 2;
`;

const CloseButton = styled.button`
  border: 0;
  outline: 0;
  text-align: center;
  background-color: transparent;
  flex-grow: 1;
`;

const CloseIcon = styled(RiCloseLine)`
  color: ${props => props.theme.Colors.btColorGray};
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
    color: ${props => lighten(0.1, props.theme.Colors.btColorGray)};
  }
`;

function HeaderPresenter() {
  return (
    <>
      <HeaderWraper>
        <Title>11 Dev-Event Schedule</Title>
        <CloseButton>
          <CloseIcon />
        </CloseButton>
      </HeaderWraper>
    </>
  );
}

export default HeaderPresenter;
