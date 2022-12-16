import React,{useState,Suspense} from 'react';

const Home = () => {
  const [isAdmin,setAdmin]=useState(false);

  return (
    <div>
      Home
      <Suspense fallback={<h1>loading...</h1>}>

      </Suspense>
    </div>
  );
};

export default Home;