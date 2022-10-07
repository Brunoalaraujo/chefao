import { Routes as WapperRoute, Route, BrowserRouter } from 'react-router-dom';
import Feed from './pages/Feed'
import LandingPage from './pages/LandingPage';
import LandingPageFinal from './pages/LandingPageFinal';
import { SignUpPage } from './pages/SignUpPage';
import TourPage from './pages/TourPage'



export default function Routes(): JSX.Element  {
    return (
        <BrowserRouter>
            <WapperRoute>
                <Route path="/" element={<Feed />} />
                <Route path="/LandingPage" element={<LandingPage />} />
                <Route path="/LandingPageFinal" element={<LandingPageFinal />} />
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/tour" element={<TourPage/>}/>
            </WapperRoute>
        </BrowserRouter>
        
    );
    
}

