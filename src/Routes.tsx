import { Routes as WapperRoute, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage/index';
import DashboardPage from './pages/DashboardPage'
import { LandingPage } from './components/LandingPage';
import { SignUpPage1 } from './pages/SignUpStep1';
import { SignUpPage2 } from './pages/SignUpStep2';



export default function Routes(): JSX.Element  {
    return (
        <BrowserRouter>
            <WapperRoute>
                <Route path="/" element={<LoginPage />} />
                <Route path="/view" element={<DashboardPage />} />
                <Route path="/signup1" element={<SignUpPage1/>}/>
                <Route path="/signup2" element={<SignUpPage2/>}/>
                <Route path="/LandingPage" element={<LandingPage />} />

            </WapperRoute>
        </BrowserRouter>
        
    );
    
}

