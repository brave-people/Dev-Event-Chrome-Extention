import React, {useEffect, useState} from 'react';
import axios from 'axios';
import JSSoup from 'jssoup';
import './Newtab.css';
import './Newtab.scss';

const Newtab = () => {
  const [result, setresult] = useState('');
  useEffect(() => {
    axios
      .get('https://github.com/brave-people/Dev-Event')
      .then(Response => {
        const soup = new JSSoup(Response.data);
        console.log(soup.getText());
        // setresult(soup.getText());
      })
      .catch(Error => {
        console.log(Error);
      });
  }, []);
  return <div className="App"></div>;
};

export default Newtab;
