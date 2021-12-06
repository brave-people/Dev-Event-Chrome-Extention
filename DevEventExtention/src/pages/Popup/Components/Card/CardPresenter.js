/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {lighten} from 'polished';
import {MdOutlineInsertLink} from 'react-icons/md';
import {BsFillBookmarkHeartFill} from 'react-icons/bs';
import MarqueePresenter from '../Marquee/MarqueePresenter';

const CardDevTypeIcon = styled.div`
  position: absolute;
  left: 270px;
  top: 45px;

  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%);

  border: 0;
  border-radius: 100%;
`;
const CardPointColor = styled.div`
  height: 100%;
  width: 10px;

  border: 0;
  border-radius: 10px 0 0 10px;
`;
const CardWraper = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  height: 30%;
  &:nth-child(4n + 1) ${CardPointColor},&:nth-child(4n + 1) ${CardDevTypeIcon} {
    background-color: #c8372d;
  }
  &:nth-child(4n + 2) ${CardPointColor},&:nth-child(4n + 2) ${CardDevTypeIcon} {
    background-color: #d1941a;
  }
  &:nth-child(4n + 3) ${CardPointColor},&:nth-child(4n + 3) ${CardDevTypeIcon} {
    background-color: #76a9ff;
  }
  &:nth-child(4n + 4) ${CardPointColor},&:nth-child(4n + 4) ${CardDevTypeIcon} {
    background-color: #f178b6;
  }
`;
const CardTitle = styled(MarqueePresenter)`
  position: absolute;
  left: 30px;
  top: 30px;
`;

const CardDate = styled(MarqueePresenter)`
  position: absolute;
  left: 30px;
  top: 55px;
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

  /* z-index:1; */

  color: ${props => props.theme.Colors.btColorGray};
  background-color: ${props => props.theme.Colors.btColorBlue};
  &:hover {
    background-color: ${props => lighten(0.1, props.theme.Colors.btColorBlue)};
    color: ${props => lighten(0.1, props.theme.Colors.btColorGray)};
  }
`;

const CardLinkIcon = styled(MdOutlineInsertLink)`
  font-size: 1rem;
  color: ${props => props.theme.Colors.btColorGray};
`;

const CardFollowButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;

  position: absolute;
  left: 270px;
  top: 95px;
  transform: translate(-50%, -50%);
`;
const CardFollowIcon = styled(BsFillBookmarkHeartFill)`
  cursor: pointer;
  color: ${props => lighten(0.1, props.theme.Colors.btColorGray)};
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
    color: ${props => lighten(0.1, props.theme.Colors.btColorBlue)};
  }
`;

function CardPresenter({
  DevEventTitle,
  DevEventDate,
  DevEventType,
  DevEventUrl,
  // eslint-disable-next-line react/prop-types
  DevFllowButtonEvent,
}) {
  return (
    <>
      <CardWraper>
        <CardPointColor />
        <CardTitle Contents={DevEventTitle} />
        <CardDate Contents={DevEventDate} />
        <CardLinkButton onClick={() => window.open(DevEventUrl)}>
          <CardLinkIcon />
          &nbsp; Link
        </CardLinkButton>
        <CardFollowButton onClick={DevFllowButtonEvent}>
          <CardFollowIcon />
        </CardFollowButton>
        <CardDevTypeIcon />
      </CardWraper>
    </>
  );
}
CardPresenter.propTypes = {
  DevEventTitle: PropTypes.string.isRequired,
  DevEventDate: PropTypes.string.isRequired,
  DevEventType: PropTypes.arrayOf(PropTypes.string).isRequired,
  DevEventUrl: PropTypes.string.isRequired,
};

export default CardPresenter;
