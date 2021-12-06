import axios from 'axios';
import JSSoup from 'jssoup';

const Crawll = async url => {
  try {
    const getHtml = await axios.get(url);
    const getSoup = new JSSoup(getHtml.data);
    const soupH2s = getSoup.findAll('h2');
    const soupH2sIds = [];
    const DevEventsArray = [];
    soupH2s.forEach(h2 => {
      if (h2.text.includes('년')) {
        soupH2sIds.push(h2.find('a').attrs.id);
      }
    });
    soupH2sIds.forEach(H2Id => {
      const backWord = getHtml.data.split(H2Id)[1];
      const temp = new JSSoup(backWord);
      const items = temp.find('ul').findAll('li');
      items.forEach(item => {
        if (item.find('ul') !== undefined) {
          const DevEvent = {};
          DevEvent.title = item.find('a').text;
          DevEvent.url = item.find('a').attrs.href;
          item.findAll('li').forEach(element => {
            let DevEventType = element.text.split(': ')[0];
            if (
              DevEventType === '일시' ||
              DevEventType === '모집' ||
              DevEventType === '신청' ||
              DevEventType === '접수'
            ) {
              DevEventType = 'DevEventDate';
            }
            const DevEventValue = element.text.split(': ')[1];
            DevEvent[DevEventType] = DevEventValue;
          });
          DevEventsArray.push(DevEvent);
        }
      });
    });

    // const dateSimple = [];

    DevEventsArray.forEach(DevEvent => {
      // 날짜 시작과 끝(월 일만)
      const temp = DevEvent.DevEventDate.replace(/(\s*)/g, '');
      DevEvent.DevEventDateSimple = temp.match(/[0-9]+\.[0-9]+/g).join('~');
      if (!DevEvent.DevEventDate.includes('~'))
        DevEvent.DevEventDateSimple = `${DevEvent.DevEventDate}~${DevEvent.DevEventDate}`;

      // 분류 배열화
      const DevEventTypeArray = [];
      DevEvent.분류.split(', ').forEach(DevEventType => {
        DevEventTypeArray.push(DevEventType);
      });
      DevEvent.분류 = DevEventTypeArray;
    });

    const today = new Date();
    const localDevEventData = {
      WriteDate: today.toLocaleDateString(),
      Contents: DevEventsArray,
      // DataSimple: dateSimple,
    };
    localStorage.setItem('CrwallData', JSON.stringify(localDevEventData));
    return localDevEventData;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export default Crawll;
