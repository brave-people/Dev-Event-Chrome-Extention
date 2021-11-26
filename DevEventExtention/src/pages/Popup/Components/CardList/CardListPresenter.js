/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardContainer from '../Card/CardContainer';

const CardListWrapper = styled.div`
  flex: 1;
  overflow: auto;
`;

function CardListPresenter({DevEvents}) {
  return (
    <>
      <CardListWrapper>
        {DevEvents.map((DevEvent, index) => {
          if (index !== 0)
            return <CardContainer key={index} DevEvent={DevEvent} />;
        })}
      </CardListWrapper>
    </>
  );
}
CardListPresenter.propTypes = {
  DevEvents: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardListPresenter;
