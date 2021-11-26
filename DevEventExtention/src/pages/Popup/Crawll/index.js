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
            const DevEventType = element.text.split(': ')[0];
            const DevEventValue = element.text.split(': ')[1];
            DevEvent[DevEventType] = DevEventValue;
          });
          DevEventsArray.push(DevEvent);
        }
      });
    });
    const today = new Date();
    const localDevEventData = {
      WriteDate: today.toLocaleDateString(),
      Contents: DevEventsArray,
    };
    localStorage.setItem('CrwallData', JSON.stringify(localDevEventData));
    return DevEventsArray;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export default Crawll;
