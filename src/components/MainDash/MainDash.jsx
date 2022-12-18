import React,{Suspense, useEffect, useState,lazy} from "react";
import "./MainDash.css";

const Cards = lazy(()=>import('../Cards/Cards'))
const Table = lazy(()=>import('../Orders/Orders'))

const MainDash = (props) => {
  const [portal,setPortal] = useState('');
   
  useEffect(()=>{
    setPortal(props.portal)
  },[props.portal])

  return (
    <div className="MainDash">
      <Suspense fallback={<h1>loading...</h1>}>
        {portal==='Statics'?<Cards />:false}
        {portal==='Orders'?<Table />:false}
      </Suspense>
    </div>
  );
};

export default MainDash;
