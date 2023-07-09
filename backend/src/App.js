import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
import AnggotaIndex from './Anggota/Index';
import AnggotaInsert from './Anggota/Insert';
import AnggotaDetail from './Anggota/Detail';
import EmployeeIndex from './Employee/Index';
import EmployeeInsert from './Employee/Insert';
import EmployeeDetail from './Employee/Detail';

import GroupEmployeeIndex from './GroupEmployee/Index';

import PengaturanIndex from './Pengaturan/Index';
import Login from './Login';
import LayoutAfterLogin from './LayoutAfterLogin';
import Home from './Home';

function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<LayoutAfterLogin />}>
              <Route path="/" element={<Home />} />
              <Route path="/anggota" element={<AnggotaIndex />} />
              <Route path="/dashboard" element={<EmployeeIndex />} />
              <Route path="/employee" element={<EmployeeIndex />} />
              <Route path="/employee/insert" element={<EmployeeInsert />} />
              <Route path="/employee/detail/:id" element={<EmployeeDetail />} />

              <Route path="/group-employee" element={<GroupEmployeeIndex />} />

              <Route path="/anggota/insert" element={<AnggotaInsert />} />
              <Route path="/anggota/detail/:id" element={<AnggotaDetail />} />
              <Route path="/pengaturan" element={<PengaturanIndex/>} />
            </Route>
            <Route path="/login" element={<Login/>} />
        </Routes>
            
        </Router>
  );
}

export default App;
