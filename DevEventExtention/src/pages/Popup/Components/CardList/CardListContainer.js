/* eslint-disable no-console */
import React, {useState, useEffect} from 'react';
import CardListPresenter from './CardListPresenter';
import Crawll from '../../Crawll';

const url = 'https://github.com/brave-people/Dev-Event';
function CardListContainer() {
  const [DevEvents, setDevEvents] = useState([{}]);
  useEffect(() => {
    const localCrwallData = JSON.parse(localStorage.getItem('CrwallData'));
    if (localCrwallData !== null) {
      console.log('=====not Crawll========');
      console.log(localCrwallData);
      setDevEvents(localCrwallData);
    } else {
      Crawll(url).then(e => {
        console.log('=====Crawll========');
        console.log(localCrwallData);
        setDevEvents(e);
      });
    }
  }, []);
  return (
    <>
      <CardListPresenter DevEvents={DevEvents} />
    </>
  );
}

export default CardListContainer;
