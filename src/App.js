import React, {useEffect, useState} from 'react';
import './App.scss';
import Nav from './pagecomponents/Nav';
import Aside from './pagecomponents/Aside';
import Main from './pagecomponents/Main';
import Footer from './pagecomponents/Footer';
import $ from 'jquery';

function App() {
  const [appClass, setAppClass] = useState('App hidden');

  useEffect(() => {
      $.get('/categories', {}, (res) => {
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
