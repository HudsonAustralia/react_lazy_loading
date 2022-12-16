import NavWrapper from './components/NavWrapper';
import './App.css';
// import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {lazy} from 'react'

const Home = lazy(()=>import('./components/Home'));
const Store = lazy(()=>import('./components/Store'));
const About = lazy(()=>import('./components/About'));

function App() {

  return (
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<NavWrapper/>}>
        <Route index  element={<Home/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/about' element={<About/>} />
      </Route>
   </Routes>    
   </BrowserRouter>
  );
}

export default App;
