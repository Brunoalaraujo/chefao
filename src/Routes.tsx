import { Routes as WapperRoute, Route, BrowserRouter } from 'react-router-dom';
import Feed from './pages/Feed'
import LandingPage from './pages/LandingPage';
import LandingPageFinal from './pages/LandingPageFinal';
import TourPage from './pages/TourPage'
import { SignUpPage1 } from './pages/SignUpStep1';
import { SignUpPage2 } from './pages/SignUpStep2';



export default function Routes(): JSX.Element {
    return (
        <BrowserRouter>
            <WapperRoute>
                <Route path="/" element={<Feed />} />
                <Route path="/LandingPage" element={<LandingPage />} />
                <Route path="/LandingPage/2" element={<LandingPageFinal />} />
                <Route path="/signup1" element={<SignUpPage1 />} />
                <Route path="/signup2" element={<SignUpPage2 />} />
                
                <Route path="/tour" element={<TourPage />} />
            </WapperRoute>
        </BrowserRouter>
    );
}
