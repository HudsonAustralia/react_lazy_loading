import { useState } from 'react';
import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';

function App() {
  const [portal,setPortal] = useState('Statics');

  const onClickHandler =(item)=>{
    setPortal(item.heading)
  }

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar onClick ={onClickHandler}/>
        <MainDash portal={portal} />
      </div>
    </div>
  );
}

export default App;
