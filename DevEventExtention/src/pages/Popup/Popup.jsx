import React from 'react';
import styled from 'styled-components';
import Header from './Components/Header';
import CardList from './Components/CardList';

const Container = styled.div`
  width: 300px;
  height: 500px;
  margin: 0;
  padding: 0;

  background-color: ${props => props.theme.Colors.bgColorBlack};
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  overflow: auto;
`;

const Popup = () => {
  return (
    <Container>
      <Header />
      <CardList />
    </Container>
  );
};

export default Popup;
