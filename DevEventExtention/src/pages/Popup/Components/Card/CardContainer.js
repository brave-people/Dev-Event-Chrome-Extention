/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import CardPresenter from './CardPresenter';

function CardContainer({index, DevEvent}) {
  const [state, setstate] = useState({
    key: 0,
    DevEventTitle: '',
    DevEventDate: '',
    DevEventUrl: '',
  });
  const {key, DevEventTitle, DevEventDate, DevEventUrl} = state;
  useEffect(() => {
    setstate({
      key: index,
      DevEventTitle: DevEvent.title || '없음',
      DevEventDate: DevEvent.일시 || DevEvent.모집 || DevEvent.신청 || '없음',
      DevEventUrl: DevEvent.url || '없음',
    });
  }, []);

  return (
    <CardPresenter
      key={key}
      DevEventTitle={DevEventTitle}
      DevEventDate={DevEventDate}
      DevEventUrl={DevEventUrl}
      DevEventType={'컨퍼런스'}
    />
  );
}

export default CardContainer;
