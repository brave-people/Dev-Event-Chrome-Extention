import React, {useEffect} from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import ContentsPresenter from './Components/ContetnsPresenter/ContetnsPresenter';
import HeaderPresenter from './Components/HeaderPresenter';

const Container = styled.div`
  width: 300px;
  height: 500px;
  margin: 0;
  padding: 0;
  background-color: #282a36;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  overflow: auto;
`;

const Popup = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <HeaderPresenter />
        <ContentsPresenter />
      </Container>
    </>
  );
};

export default Popup;
