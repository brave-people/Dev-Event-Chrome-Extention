import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {lighten} from 'polished';
import {RiCloseLine} from 'react-icons/ri';

const HeaderWrapper = styled.div`
  pointer-events: none;

  width: 100%;
  height: 10%;
  color: ${props => props.theme.Colors.btColorGray};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.div`
  width: 60%;

  text-align: center;
  font-size: 1rem;
  font-weight: bold;

  flex-grow: 2;
`;

const HeaderCloseButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;

  text-align: center;

  flex-grow: 1;
`;

const HeaderCloseIcon = styled(RiCloseLine)`
  color: ${props => props.theme.Colors.btColorGray};
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
    color: ${props => lighten(0.1, props.theme.Colors.btColorGray)};
  }
`;

function HeaderPresenter({NowMonth}) {
  return (
    <>
      <HeaderWrapper>
        <HeaderTitle>{NowMonth} Dev-Event Schedule</HeaderTitle>
        <HeaderCloseButton>
          <HeaderCloseIcon />
        </HeaderCloseButton>
      </HeaderWrapper>
    </>
  );
}

HeaderPresenter.propTypes = {
  NowMonth: PropTypes.number.isRequired,
};

export default HeaderPresenter;
