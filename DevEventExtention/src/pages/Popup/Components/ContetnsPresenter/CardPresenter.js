/* eslint-disable no-unused-vars */
import React from 'react';
import styled, {css} from 'styled-components';
import {darken} from 'polished';
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
`;
const CardDevTypeIcon = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border: 0;
  transform: translate(-50%, -50%);

  left: 240px;
  top: 50px;

  border-radius: 100%;
  ${props => {
    const selectedColor = props.theme.Colors[props.color];
    return css`
      background-color: ${selectedColor};
      &:hover {
        background: ${darken(0.1, selectedColor)};
      }
    `;
  }}
`;
const CardPoint = styled.div`
  height: 100%;
  width: 10px;
  border: 0;
  border-radius: 10px 0 0 10px;
  ${props => {
    const selectedColor = props.theme.Colors[props.color];
    return css`
      background-color: ${selectedColor};
      &:hover {
        background: ${darken(0.1, selectedColor)};
      }
    `;
  }}
`;
const CardLinkIcon = styled(MdOutlineInsertLink)`
  font-size: 1rem;
  color: ${props => props.theme.Colors.btColorGray};
`;
const CardFollowIcon = styled(RiStarLine)`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 240px;

  top: 95px;
  ${props => {
    const selectedColor = props.theme.Colors.btColorGray;
    return css`
      color: ${selectedColor};
      &:hover {
        color: ${darken(0.1, selectedColor)};
      }
    `;
  }}
`;

function CardPresenter(props) {
  return (
    <>
      <CardWraper>
        <CardPoint />
        <CardTitle> If Kakao </CardTitle>
        <CardDate>11:16(화) ~ 11:18(목)</CardDate>
        <CardLinkButton>
          <CardLinkIcon />
          &nbsp; Link
        </CardLinkButton>
        <CardFollowIcon />
        <CardDevTypeIcon />
      </CardWraper>
    </>
  );
}

export default CardPresenter;
