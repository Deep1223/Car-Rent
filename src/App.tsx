import React, { lazy } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import './style/common/_header.css';
import './style/common/_footer.css';
import './style/base/_common.css';

const Header = lazy(() => import('./common/header'));
const Footer = lazy(() => import('./common/footer'));
const CarRent = lazy(() => import('./pages/car-rent'));
const PopularCars = lazy(() => import('./pages/popular-cars'));
const SignIn = lazy(() => import('./pages/sign-in'));
const SignUp = lazy(() => import('./pages/sign-up'));

const App: React.FC = () => {
  return (
    <div className='car-rent-body-main-container'>
    <Router>
      <AppContent />
    </Router>
    </div> 
  );
}

const AppContent: React.FC = () => {
  const location = useLocation();
  const hideHeaderFooterRoutes = ['/signin', '/signup']; // Add routes where you want to hide header and footer

  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      <Routes>
          <Route path="/" element={<CarRent />} />
          <Route path="/carrent" element={<CarRent />} />
          <Route path="/popularcars" element={<PopularCars />} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
      </Routes>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
