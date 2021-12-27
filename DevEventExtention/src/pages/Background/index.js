chrome.alarms.onAlarm.addListener(alarm => {
  if (alarm.name === 'testAlarm') {
    chrome.notifications.create('', {
      title: 'test',
      message: 'test',
      iconUrl:
        'https://w.namu.la/s/40de86374ddd74756b31d4694a7434ee9398baa51fa5ae72d28f2eeeafdadf0c475c55c58e29a684920e0d6a42602b339f8aaf6d19764b04405a0f8bee7f598d2922db9475579419aac4635d0a71fdb8a4b2343cb550e6ed93e13c1a05cede75',
      type: 'basic',
    });
  }
});
