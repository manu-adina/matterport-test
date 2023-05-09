import React from 'react';
import Matterport from './matterport';
import "./index.css"
import { useQuery } from 'react-query';
import { getMatterportAuth } from './helper';


function App() {
  const { data: authToken, isSuccess } = useQuery("mp-auth", getMatterportAuth);

  return (
    <div className="App">
      { isSuccess && <Matterport auth={authToken}/> }
    </div>
  );
}

export default App;
