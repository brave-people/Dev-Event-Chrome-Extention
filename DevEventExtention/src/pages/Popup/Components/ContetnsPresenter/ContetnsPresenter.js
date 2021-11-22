import React from 'react';
import styled from 'styled-components';
import CardPresenter from './CardPresenter';

const ContentsWrapper = styled.div`
  flex: 1;
  overflow: auto;
`;

function ContentsPresenter() {
  return (
    <>
      <ContentsWrapper>
        <CardPresenter />
        <CardPresenter />
        <CardPresenter />
        <CardPresenter />
      </ContentsWrapper>
    </>
  );
}

export default ContentsPresenter;
