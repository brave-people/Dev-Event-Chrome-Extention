import React from 'react';
import styled from 'styled-components';

const ContentsPresenter = styled.div`
  flex: 1;
  overflow: auto;
`;

const CardWraper = styled.div`
  width: 100%;
  height: 30%;
  border: 1px solid white;
`;

function CardPresenter() {
  return (
    <>
      <ContentsPresenter>
        <CardWraper />
        <CardWraper />
        <CardWraper />
        <CardWraper />
        <CardWraper />
      </ContentsPresenter>
    </>
  );
}

export default CardPresenter;
