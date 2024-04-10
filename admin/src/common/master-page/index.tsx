import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import '../../styles/common/master-page.css';

// Import your lazy-loaded components
const Sidebar = lazy(() => import('../../components/sidebar'));
const CarList = lazy(() => import('../../pages/masters/car-list'));

const App: React.FC = () => {
    return (
        <div className="wrapper"> 
            <Sidebar />
            <CarList />
        </div>
    );
}

export default App;
