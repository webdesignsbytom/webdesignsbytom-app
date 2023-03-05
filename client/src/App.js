import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
// Pages
import HeroPage from './pages/hero/HeroPage';
import PortfolioHome from './pages/portfolio/PortfolioHome';
import SalesHome from './pages/sales/SalesHome';
import AdminPanel from './pages/admin/AdminPanel';
import DeveloperPanel from './pages/dev/DeveloperPanel';
import Login from './users/login/Login';
import Register from './users/register/Register';
import ResetPassword from './pages/auth/ResetPassword';
import UserAgreement from './pages/auth/UserAgreement';
import Account from './pages/account/Account';
import Verify from './pages/account/Verify'
import EnterNewPassword from './pages/auth/EnterNewPassword';
import Design from './pages/design/Design';
import TestPage from './pages/test/TestPage';
import Contact from './pages/contact/Contact';
import Error404 from './pages/error/Error404';
// Utils
import {
  AuthenticateUser,
  AuthenticateAdmin,
  AuthenticateDeveloper,
} from './utils/AuthenticateUser';
// Components
import ConfirmPolicies from './components/popups/ConfirmPolicies';
// Context
import { UserContext } from './context/UserContext';

function App() {

  const { toggleCookiePolicy } = useContext(UserContext)
  return (
    <>
      <Routes>
        <Route path='/' index element={<HeroPage />} />
        <Route path='/portfolio' element={<PortfolioHome />} />
        <Route path='/developer' element={<SalesHome />} />
        <Route path='/contact' element={<Contact />} />

        {/* Secure routes */}
        <Route
          path='/admin'
          element={
            <AuthenticateAdmin>
              <AdminPanel />
            </AuthenticateAdmin>
          }
        />
        <Route
          path='/development'
          element={
            <AuthenticateDeveloper>
              <DeveloperPanel />
            </AuthenticateDeveloper>
          }
        />

        {/* User Routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset-lost-password' element={<ResetPassword />} />

        <Route
          path='/account'
          element={
            <AuthenticateUser>
              <Account />
            </AuthenticateUser>
          }
        />
        <Route path='/design' element={<Design />} />

        <Route path='users/verify/:userId/:uniqueString' element={<Verify />} />
        <Route
          path='users/reset-lost-password/:userId/:uniqueString'
          element={<EnterNewPassword />}
        />

        {/* Util Routes */}
        <Route path='/terms-and-conditions' element={<UserAgreement />} />
        <Route path='/test' element={<TestPage />} />
        <Route path='*' element={<Error404 />} />
      </Routes>

      {!toggleCookiePolicy && <ConfirmPolicies />}
    </>
  );
}

export default App;
