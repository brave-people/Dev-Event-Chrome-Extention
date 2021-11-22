import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {lighten} from 'polished';
import {MdOutlineInsertLink} from 'react-icons/md';
import {RiStarLine} from 'react-icons/ri';

const CardWraper = styled.div`
  position: relative;
  width: 100%;
  height: 30%;
  display: flex;
`;
const CardTitle = styled.div`
  position: absolute;
  font-weight: bold;
  font-size: 1rem;
  left: 30px;
  top: 30px;
  color: ${props => props.theme.Colors.btColorGray};
`;
const CardDate = styled.div`
  position: absolute;
  font-size: 1rem;
  left: 30px;
  top: 55px;
  color: ${props => props.theme.Colors.btColorGray};
`;
const CardLinkButton = styled.button`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 0;
  outline: 0;

  position: absolute;
  left: 30px;
  top: 90px;
  width: 4rem;
  color: ${props => props.theme.Colors.btColorGray};
  background-color: ${props => props.theme.Colors.btColorBlue};
  &:hover {
    background-color: ${props => lighten(0.1, props.theme.Colors.btColorBlue)};
    color: ${props => lighten(0.1, props.theme.Colors.btColorGray)};
  }
`;
const CardDevTypeIcon = styled.div`
  pointer-events: none;
  position: absolute;
  width: 50px;
  height: 50px;
  border: 0;
  transform: translate(-50%, -50%);

  left: 240px;
  top: 50px;

  border-radius: 100%;
  background-color: ${props => props.theme.Colors[props.color]};
`;
const CardPointColor = styled.div`
  pointer-events: none;
  height: 100%;
  width: 10px;
  border: 0;
  border-radius: 10px 0 0 10px;
  background-color: ${props => props.theme.Colors[props.color]};
`;
const CardLinkIcon = styled(MdOutlineInsertLink)`
  font-size: 1rem;
  color: ${props => props.theme.Colors.btColorGray};
`;
const CardFollowIcon = styled(RiStarLine)`
  cursor: pointer;

  position: absolute;
  left: 240px;
  top: 95px;
  transform: translate(-50%, -50%);

  font-size: 1rem;
  &:hover {
    cursor: pointer;
    color: ${props => lighten(0.1, props.theme.Colors.btColorYellow)};
  }
`;

function CardPresenter({color}) {
  return (
    <>
      <CardWraper>
        <CardPointColor color={color} />
        <CardTitle> If Kakao </CardTitle>
        <CardDate>11:16(화) ~ 11:18(목)</CardDate>
        <CardLinkButton>
          <CardLinkIcon />
          &nbsp; Link
        </CardLinkButton>
        <CardFollowIcon />
        <CardDevTypeIcon color={color} />
      </CardWraper>
    </>
  );
}
CardPresenter.propTypes = {
  color: PropTypes.string.isRequired,
};

export default CardPresenter;
