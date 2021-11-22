import React, {useEffect} from 'react';
import styled from 'styled-components';
import {RiCloseLine} from 'react-icons/ri';

const HeaderWraper = styled.div`
  width: 100%;
  height: 10%;
  color: ${props => props.theme.Colors.bgColorGray};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  width: 60%;
  text-align: left;
  font-size: 1rem;
  font-weight: bold;
`;

const CloseButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
`;

const CloseIcon = styled(RiCloseLine)`
  color: ${props => props.theme.Colors.bgColorGray};
  font-size: 1.5rem;
`;

function HeaderPresenter() {
  return (
    <>
      <HeaderWraper>
        <Title>Dev-Event Schedule</Title>
        <CloseButton>
          <CloseIcon />
        </CloseButton>
      </HeaderWraper>
    </>
  );
}

export default HeaderPresenter;
