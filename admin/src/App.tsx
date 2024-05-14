import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/common/header.css';
import './styles/common/common.css';

// Import your lazy-loaded components
const Header = lazy(() => import('./common/header'));
const MasterPage = lazy(() => import('./common/master-page'));

const App: React.FC = () => {
  return (
    <div className='car-rent-body-main-container'>
      <Suspense fallback={<div className="loading-container"><div className="loader"></div></div>}>
        <Header />
        <MasterPage />
      </Suspense>
    </div>
  );
}

export default App;
