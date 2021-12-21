import React from "react";
import {Routes} from "react-router";
import {Route} from "react-router";

import Main from "./component/Main";
import Counter from "./component/counter/Counter";

function App() {
  return (
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/counter' element={<Counter/>}/>
      </Routes>
  );
}

export default App;
