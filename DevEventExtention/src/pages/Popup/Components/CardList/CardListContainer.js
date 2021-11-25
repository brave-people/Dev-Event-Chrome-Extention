/* eslint-disable no-console */
import React, {useState, useEffect} from 'react';
import CardListPresenter from './CardListPresenter';
import Crawll from '../../Crawll';

const url = 'https://github.com/brave-people/Dev-Event';
function CardListContainer() {
  const [DevEvents, setDevEvents] = useState([{}]);
  useEffect(() => {
    Crawll(url).then(e => {
      setDevEvents(e);
    });
  }, []);
  return (
    <>
      <CardListPresenter DevEvents={DevEvents} />
    </>
  );
}

export default CardListContainer;
