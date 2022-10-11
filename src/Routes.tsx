import { Routes as WapperRoute, Route, BrowserRouter } from 'react-router-dom';
import LoginForm  from './pages/LoginPage';
import Feed from './pages/Feed'
import LandingPage from './pages/LandingPage';
import LandingPageFinal from './pages/LandingPageFinal';
import TourPage from './pages/TourPage'

import { SignUpPage } from './pages/SignUpPage';



export default function Routes(): JSX.Element {
    return (
        <BrowserRouter>
            <WapperRoute>
                <Route path="/" element={<LoginForm />} />
                <Route path="/Feed" element={<Feed />} />
                <Route path="/LandingPage" element={<LandingPage />} />
                <Route path="/LandingPage/2" element={<LandingPageFinal />} />
                <Route path="/signup" element={<SignUpPage />} />
               
                
                <Route path="/tour" element={<TourPage />} />
            </WapperRoute>
        </BrowserRouter>
    );
}
