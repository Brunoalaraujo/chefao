import { BrowserRouter, Routes as Wapper, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/Index'


export default function Routes() {
    return (
        <BrowserRouter>
            <Wapper>
                <Route path="/" element={<LoginPage />} />
            </Wapper>
        </BrowserRouter>
        
    );
}