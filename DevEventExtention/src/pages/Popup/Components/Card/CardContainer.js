/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
// import {MdChromeReaderMode} from 'react-icons/md';
import CardPresenter from './CardPresenter';

function CardContainer({keyIndex, DevEvent}) {
  const [state, setstate] = useState({
    key: 0,
    DevEventTitle: '',
    DevEventDate: '',
    DevEventUrl: '',
    DevEventDateSimple: '',
    DevEventType: [],
  });
  const [devFollow, setdevFollow] = useState(false);
  const {key, DevEventTitle, DevEventDate, DevEventUrl, DevEventType} = state;
  useEffect(() => {
    setstate({
      key: keyIndex,
      DevEventTitle: DevEvent.title || '없음',
      DevEventDateSimple: DevEvent.DevEventDateSimple || '없음',
      DevEventDate: DevEvent.DevEventDate || '없음',
      DevEventUrl: DevEvent.url || '없음',
      DevEventType: DevEvent.분류 || '없음',
    });
  }, []);
  const followBtnEvent = () => {
    if (devFollow === false) {
      setdevFollow(true);
      chrome.notifications.create('', {
        title: 'Just wanted to notify you',
        message: 'How great it is!',
        iconUrl:
          'https://w.namu.la/s/40de86374ddd74756b31d4694a7434ee9398baa51fa5ae72d28f2eeeafdadf0c475c55c58e29a684920e0d6a42602b339f8aaf6d19764b04405a0f8bee7f598d2922db9475579419aac4635d0a71fdb8a4b2343cb550e6ed93e13c1a05cede75',
        type: 'basic',
      });
    } else {
      setdevFollow(false);
      chrome.alarms.create();
    }
  };

  return (
    <CardPresenter
      key={key}
      DevEventTitle={DevEventTitle}
      DevEventDate={DevEventDate}
      DevEventUrl={DevEventUrl}
      DevEventType={DevEventType}
      DevFllowButtonEvent={followBtnEvent}
    />
  );
}

export default CardContainer;
