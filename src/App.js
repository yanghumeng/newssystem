import React from 'react'
import { Button } from 'antd'
import {Outlet} from 'react-router-dom'
function App() {
  return (
    <div>
      <Button type="primary">primary</Button>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
