import React, {useEffect, useState} from 'react';
import './App.scss';
import Nav from './pagecomponents/Nav';
import Aside from './pagecomponents/Aside';
import Main from './pagecomponents/Main';
import Footer from './pagecomponents/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import {api} from './config.js';

function App(props) {
  const [appClass, setAppClass] = useState('App hidden');
  const [bio, setBio] = useState(false);
  const [categories, setCategories] = useState(false);

  useEffect(() => {
      axios.get(api + '/categories').then((res) => {
          console.log(res);
          setAppClass('App');
          setCategories(res.data);
      });
      axios.get(api + '/bio').then(res => {
          console.log(res);
          setBio(res.data);
      });
  }, [appClass]);

  return (
      <Router>
          <div className={appClass}>
              <Nav categories={categories} />
              <Aside bio={bio} />
              <Main categories={categories} />
              <Footer />
          </div>
      </Router>

  );
}

export default App;
