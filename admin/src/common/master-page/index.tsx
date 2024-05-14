import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import '../../styles/common/master-page.css';

// Import your lazy-loaded components
const Sidebar = lazy(() => import('../../components/sidebar'));
const CarMaster = lazy(() => import('../../pages/masters/car-list'));
const WorkingStep = lazy(() => import('../../pages/masters/working-step'));
const DownloadMaster = lazy(() => import('../../pages/masters/downloadmaster'));
const CompanyLogoMaster = lazy(() => import('../../pages/masters/companylogomaster'));
const TestimonialMaster = lazy(() => import('../../pages/masters/testimonialmaster'));
const WhyChooseUsMaster = lazy(() => import('../../pages/masters/whychooseusmaster'));
const DownloadLinkMaster = lazy(() => import('../../pages/masters/downloadlinkmaster'));

const App: React.FC = () => {
    return (
        <div className="wrapper">
            <Router>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<CarMaster />} />
                    <Route path="/carmaster" element={<CarMaster />} />
                    <Route path="/workingstep" element={<WorkingStep />} />
                    <Route path="/downloadmaster" element={<DownloadMaster />} />
                    <Route path="/companylogomaster" element={<CompanyLogoMaster />} />
                    <Route path="/testimonialmaster" element={<TestimonialMaster />} />
                    <Route path="/whychooseusmaster" element={<WhyChooseUsMaster />} />
                    <Route path="/downloadlinkmaster" element={<DownloadLinkMaster />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
