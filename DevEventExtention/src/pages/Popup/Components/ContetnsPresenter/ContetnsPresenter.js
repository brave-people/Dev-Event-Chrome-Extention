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
        <CardPresenter color="icColorRed" />
        <CardPresenter color="icColorOrange" />
        <CardPresenter color="icColorBlue" />
        <CardPresenter color="icColorPink" />
        <CardPresenter color="icColorRed" />
        <CardPresenter color="icColorOrange" />
        <CardPresenter color="icColorBlue" />
        <CardPresenter color="icColorPink" />
        <CardPresenter color="icColorRed" />
        <CardPresenter color="icColorOrange" />
        <CardPresenter color="icColorBlue" />
        <CardPresenter color="icColorPink" />
      </ContentsWrapper>
    </>
  );
}

export default ContentsPresenter;
