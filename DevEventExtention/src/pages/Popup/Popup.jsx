import React, {useEffect} from 'react';
import styled from 'styled-components';
import HeaderPresenter from './Components/HeaderPresenter';
import ContentsPresenter from './Components/ContetnsPresenter/ContetnsPresenter';

const Container = styled.div`
  width: 300px;
  height: 500px;
  margin: 0;
  padding: 0;

  //background-color: ${props => props.theme.Colors.bgColorBlack};
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  overflow: auto;
`;

const Popup = props => {
  return (
    <Container>
      <HeaderPresenter />
      {/* <ContentsPresenter /> */}
    </Container>
  );
};

export default Popup;
