

import React from 'react'
import Inputs from './components/input'
import Contents from './components/content'
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/effect';
import UsersList from './components/uneffect';
import Users from './components/axios';

const App = () => {
  return (
    <div >
       <Inputs/>
       <Contents/>
       <Title/>
       <UsersList/>
       <Users/>
    </div>
  )
}

export default App;