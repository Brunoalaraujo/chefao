import { Routes as WapperRoute, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage/Index';
import DashboardPage from './pages/DashboardPage'
import { LandingPage } from './components/LandingPage';
import { SignUpPage } from './pages/SignUpPage';



export default function Routes(): JSX.Element  {
    return (
        <BrowserRouter>
            <WapperRoute>
                <Route path="/" element={<LoginPage />} />
                <Route path="/view" element={<DashboardPage />} />
                <Route path="/signup" element={<SignUpPage/>}/>
            </WapperRoute>
        </BrowserRouter>
        
    );
    
}

