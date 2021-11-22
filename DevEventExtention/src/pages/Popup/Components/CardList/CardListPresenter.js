import React from 'react';
import styled from 'styled-components';
import CardPresenter from './CardPresenter';

const CardListWrapper = styled.div`
  flex: 1;
  overflow: auto;
`;

function CardListPresenter() {
  const TempTitle = ' If Kakao ';
  const TempDate = ' 11:16(화) ~ 11:18(목) ';
  const TempType = ' 컨퍼런스 ';
  return (
    <>
      <CardListWrapper>
        <CardPresenter
          DevTitle={TempTitle}
          DevDate={TempDate}
          DevEventType={TempType}
          color="icColorRed"
        />
        <CardPresenter
          DevTitle={TempTitle}
          DevDate={TempDate}
          DevEventType={TempType}
          color="icColorOrange"
        />
        <CardPresenter
          DevTitle={TempTitle}
          DevDate={TempDate}
          DevEventType={TempType}
          color="icColorBlue"
        />
        <CardPresenter
          DevTitle={TempTitle}
          DevDate={TempDate}
          DevEventType={TempType}
          color="icColorPink"
        />
        <CardPresenter
          DevTitle={TempTitle}
          DevDate={TempDate}
          DevEventType={TempType}
          color="icColorRed"
        />
        <CardPresenter
          DevTitle={TempTitle}
          DevDate={TempDate}
          DevEventType={TempType}
          color="icColorOrange"
        />
        <CardPresenter
          DevTitle={TempTitle}
          DevDate={TempDate}
          DevEventType={TempType}
          color="icColorBlue"
        />
        <CardPresenter
          DevTitle={TempTitle}
          DevDate={TempDate}
          DevEventType={TempType}
          color="icColorPink"
        />
      </CardListWrapper>
    </>
  );
}

export default CardListPresenter;
