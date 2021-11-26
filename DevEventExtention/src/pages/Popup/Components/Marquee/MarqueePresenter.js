/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes, css} from 'styled-components';

const MoveEvent = keyframes`
  0% { padding-left:200px; transform: translate(0%);}
  100% {  transform: translate(-220%);}
`;

const Marquee = styled.div`
  width: 200px;
  height: 1rem;
  overflow: hidden;

  font-weight: bold;
  font-size: 1rem;
  color: ${props => props.theme.Colors.btColorGray};
`;

const MarqueeContents = styled.p`
  display: inline-block;
  white-space: nowrap;
  width: 200px;
  height: 1rem;
  ${props => {
    if (props.moveRequire)
      return css`
        &:hover {
          padding-left: 200px;
          animation: ${MoveEvent} linear 3s infinite;
        }
      `;
    return {};
  }}
`;

function MarqueePresenter({Contents, className}) {
  const [moveState, setmoveState] = useState(false);
  useEffect(() => {
    if (Contents.length > 23) {
      setmoveState(true);
    }
  }, []);
  return (
    <Marquee className={className}>
      <MarqueeContents moveRequire={moveState}> {Contents}</MarqueeContents>
    </Marquee>
  );
}
MarqueePresenter.propTypes = {
  Contents: PropTypes.string.isRequired,
  calssName: PropTypes.string,
};

export default MarqueePresenter;
