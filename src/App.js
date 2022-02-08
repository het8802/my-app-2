
import Navbar, {categories} from './components/Navbar';
import NewsPallete from './components/NewsPallete';
import LoadingBar from 'react-top-loading-bar'

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
const [progress, setProgress] = useState(10);

  return (
    <>
      <Router>
        <Navbar />

        <LoadingBar
        color='#f11946'
        progress={progress}
      />

        <Routes>
        <Route exact key='home' path={`/`} element={<NewsPallete key='general' setProgress={setProgress} category='general'/>}></Route>
          {categories.map((element) => {
            return <Route exact key={element} path={`/${element}`} element={<NewsPallete setProgress={setProgress} key={element} category={element}/>}></Route>
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
