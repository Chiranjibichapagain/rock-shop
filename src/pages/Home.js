import React from "react";
import {useHistory} from 'react-router-dom'

import './home.scss'
const Home = () => {
  const history= useHistory()
  return (
    <>
      <main>
        <h1 className="h1">Welcome to Rock Shop!</h1>
        <button onClick={()=> history.push('/products')} id="btn">View Rocks</button>
      </main>
    </>
  );
};

export default Home;
