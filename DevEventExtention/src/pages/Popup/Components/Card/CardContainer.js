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
      const opt = {
        type: 'list',
        title: 'keep burning',
        message: 'Primary message to display',
      };
      debugger;
      chrome.notifications.create('1', opt, function () {
        console.log('sad');
      });
      // chrome.browserAction.setBadgeText({text: 'ON'});
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
