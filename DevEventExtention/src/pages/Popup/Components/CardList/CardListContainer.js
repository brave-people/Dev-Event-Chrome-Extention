/* eslint-disable no-console */
import React, {useState, useEffect} from 'react';
import CardListPresenter from './CardListPresenter';
import Crawll from '../../Crawll';

const url = 'https://github.com/brave-people/Dev-Event';
function CardListContainer() {
  const [DevEvents, setDevEvents] = useState([{}]);
  useEffect(() => {
    const localCrwallData = JSON.parse(localStorage.getItem('CrwallData'));
    console.log(localCrwallData);
    const today = new Date();
    if (
      localCrwallData === null ||
      localCrwallData.WriteDate !== today.toLocaleDateString()
    ) {
      Crawll(url).then(e => {
        console.log('=====Crawll========');
        console.log(e);
        setDevEvents(e);
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
