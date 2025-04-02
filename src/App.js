

// import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Inputs from './components/input'
// // import Contents from './components/content'
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import Title from './components/effect';
// // import UsersList from './components/uneffect';
// // import Users from './components/axios';
// import Home from './pages/Home';
// import List from './pages/list';

// const App = () => {
//   return (
//     <div >
//       <BrowserRouter>
      
//         <Routes>
//           <Route path="" element={<Home/>}/>
//           <Route path="/list" element={<List/>}/>
//          </Routes>
//       </BrowserRouter>
     
//        {/* <Inputs/>
//        <Contents/>
//        <Title/>
//        <UsersList/>
//        <Users/> */}
//     </div>
//   )
// }

// export default App;

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Sign';
import Dashboard from './pages/Dashboard';
import Logout from './pages/logout';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setUser(true);
  }, []);

  return (
    <Router> {/* Ensure <Router> wraps everything */}
      <div>
        {user && <Logout setUser={setUser} />}
        <Routes>
          <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
