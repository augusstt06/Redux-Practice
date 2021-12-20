import React from "react";
import {Routes} from "react-router";
import {Route} from "react-router";

import Home from "./Home";
import ShopContainer from "./components/Shop/ShopContainer"
import TodoContainer from "./components/Todo/TodoContainer";

function App() {
  return (
      <Routes>
          <Route path = '/'     element = {<Home/>}/>
          <Route path ='/shop'  element = {<ShopContainer/>}/>
          <Route path = '/todo' element = {<TodoContainer/>}/>
      </Routes>
  );
}

export default App;
