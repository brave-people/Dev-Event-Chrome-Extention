import React from 'react';
import styled from 'styled-components';
import {RiCloseCircleLine} from 'react-icons/ri';

const HeaderWraper = styled.div`
  width: 100%;
  height: 10%;
  border: 1px solid white;
  color: #f8f8f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  width: 80%;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
`;

const CloseButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
`;

const CloseIcon = styled(RiCloseCircleLine)`
  color: #f8f8f2;
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
