/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {lighten} from 'polished';
import {MdOutlineInsertLink} from 'react-icons/md';
import {RiStarLine} from 'react-icons/ri';

const CardWraper = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  height: 30%;
`;
const CardTitle = styled.div`
  position: absolute;
  left: 30px;
  top: 30px;

  font-weight: bold;
  font-size: 1rem;
  color: ${props => props.theme.Colors.btColorGray};
`;
const CardDate = styled.div`
  position: absolute;
  left: 30px;
  top: 55px;

  font-size: 1rem;
  color: ${props => props.theme.Colors.btColorGray};
`;
const CardLinkButton = styled.button`
  display: flex;
  position: absolute;
  left: 30px;
  top: 90px;

  border: 0;
  outline: 0;
  cursor: pointer;

  justify-content: center;
  align-items: center;
  border-radius: 15px;

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
  left: 240px;
  top: 50px;

  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%);

  border: 0;
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

function CardPresenter({DevTitle, DevDate, DevEventType, color}) {
  return (
    <>
      <CardWraper>
        <CardPointColor color={color} />
        <CardTitle> {DevTitle} </CardTitle>
        <CardDate>{DevDate}</CardDate>
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
  DevTitle: PropTypes.string.isRequired,
  DevDate: PropTypes.string.isRequired,
  DevEventType: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CardPresenter;