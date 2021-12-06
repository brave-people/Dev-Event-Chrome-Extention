/* eslint-disable no-console */
import React, {useState, useEffect} from 'react';
import CardListPresenter from './CardListPresenter';
import Crawll from '../../Crawll';

const url = 'https://github.com/brave-people/Dev-Event';
function CardListContainer() {
  const [DevEvents, setDevEvents] = useState([{}]);
  useEffect(() => {
    const localCrwallData = JSON.parse(localStorage.getItem('CrwallData'));
    // const today = new Date();
    if (
      true
      // localCrwallData === null ||
      // localCrwallData.WriteDate !== today.toLocaleDateString()
    ) {
      Crawll(url).then(e => {
        console.log('=====Crawll========');
        console.log(e.Contents);
        setDevEvents(e.Contents);
      });
    } else {
      console.log('=====not Crawll========');
      console.log(localCrwallData.Contents);
      setDevEvents(localCrwallData.Contents);
    }
  }, []);
  return (
    <>
      <CardListPresenter DevEvents={DevEvents} />
    </>
  );
}

export default CardListContainer;
