import { Routes as WapperRoute, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage/index';
import DashboardPage from './pages/DashboardPage'


export default function Routes(): JSX.Element  {
    return (
        <BrowserRouter>
            <WapperRoute>
                <Route path="/" element={<LoginPage />} />
                <Route path="/view" element={<DashboardPage />} />
            </WapperRoute>
        </BrowserRouter>
        
    );
    
}

