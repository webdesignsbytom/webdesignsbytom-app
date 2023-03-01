import { Routes, Route } from 'react-router-dom' 
// Pages
import HeroPage from './pages/hero/HeroPage';
import PortfolioHome from './pages/portfolio/PortfolioHome';
import SalesHome from './pages/sales/SalesHome';
import AdminPanel from './pages/admin/AdminPanel';
import DeveloperPanel from './pages/dev/DeveloperPanel';
import Login from './users/Login';
import Register from './users/Register';
import ResetPassword from './pages/auth/ResetPassword';
import UserAgreement from './pages/auth/UserAgreement';
import Account from './pages/account/Account';
import Verify from './users/Verify';
import EnterNewPassword from './pages/auth/EnterNewPassword';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' index element={<HeroPage />} />
      <Route path='/portfolio' element={<PortfolioHome />} />
      <Route path='/developer' element={<SalesHome />} />

      {/* Secure routes */}
      <Route path='/admin' element={<AdminPanel />} />
      <Route path='/development' element={<DeveloperPanel />} />

      {/* User Routes */}
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/reset-lost-password' element={<ResetPassword />} />
      <Route path='/account' element={<Account />} />

      <Route path='users/verify/:userId/:uniqueString' element={<Verify />} />
      <Route path='users/reset-lost-password/:userId/:uniqueString' element={<EnterNewPassword />} />

      {/* Util Routes */}
      <Route path='/terms-and-conditions' element={<UserAgreement />} />

    </Routes>
    </>
  );
}

export default App;
