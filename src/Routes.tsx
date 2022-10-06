import { Routes as WapperRoute, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage'
import LandingPage from './pages/LandingPage';
import { SignUpPage } from './pages/SignUpPage';
import TourPage from './pages/TourPage'



export default function Routes(): JSX.Element  {
    return (
        <BrowserRouter>
            <WapperRoute>
                <Route path="/" element={<LoginPage />} />
                <Route path="/LandingPage" element={<LandingPage />} />
                <Route path="/view" element={<DashboardPage />} />
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/tour" element={<TourPage/>}/>
            </WapperRoute>
        </BrowserRouter>
        
    );
    
}

