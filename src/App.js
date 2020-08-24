import React, {useEffect, useState} from 'react';
import './App.scss';
import Nav from './pagecomponents/Nav';
import Aside from './pagecomponents/Aside';
import Main from './pagecomponents/Main';
import Footer from './pagecomponents/Footer';
import $ from 'jquery';
import axios from 'axios';

function App() {
  const [appClass, setAppClass] = useState('App hidden');

  useEffect(() => {
      axios.get('https://rjs.photonbeam.ch/bio').then((res) => {
          console.log(res);
          setAppClass('App');
      });
  });

  return (
    <div className={appClass}>
      <Nav />
      <Aside />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
