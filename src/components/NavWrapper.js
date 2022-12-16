import React,{Suspense} from 'react';
import {Outlet,Link } from 'react-router-dom'


function NavWrapper(props) {
  return (
    <div>
      <ul>
        <li>
         <Link to="/">Home</Link>
        </li>
        <li>
         <Link to="/about">About</Link>
        </li>
        <li>
         <Link to="/store">Store</Link>
        </li>
      </ul>
      <Suspense fallback={<h1>loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default NavWrapper;