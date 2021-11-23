import React, {useEffect, useState} from 'react';
import axios from 'axios';
import JSSoup from 'jssoup';
import './Newtab.css';
import './Newtab.scss';

const Newtab = () => {
  const [result, setresult] = useState([]);
  useEffect(() => {
    axios
      .get('https://github.com/brave-people/Dev-Event')
      .then(Response => {
        const soup = new JSSoup(Response.data);
        const h2s = soup.findAll('h2');
        const ids = [];
        h2s.forEach(h2 => {
          if (h2.text.includes('년')) {
            ids.push(h2.find('a').attrs.id);
          }
        });

        const datas = [];
        ids.forEach(id => {
          const backWord = Response.data.split(id)[1];
          const temp = new JSSoup(backWord);
          const items = temp.find('ul').findAll('li');
          items.forEach(item => {
            if (item.find('ul') !== undefined) {
              const data = {};
              data.title = item.find('a').text;
              data.url = item.find('a').attrs.href;
              item.findAll('li').forEach(element => {
                const type = element.text.split(': ')[0];
                const value = element.text.split(': ')[1];
                data[type] = value;
              });
              datas.push(data);
            }
          });
        });
        console.log(datas);
      })
      .catch(Error => {
        console.log(Error);
      });
  }, []);
  return <div className="App">{result}</div>;
};

export default Newtab;
