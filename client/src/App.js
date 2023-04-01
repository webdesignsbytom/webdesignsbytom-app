import { Routes, Route } from 'react-router-dom';
// Context
import { useContext, useEffect } from 'react';
// Pages
import PortfolioHome from './pages/portfolio/PortfolioHome';
import SalesHome from './pages/sales/SalesHome';
import AdminPanel from './pages/admin/AdminPanel';
import DeveloperPanel from './pages/dev/DeveloperPanel';
import Login from './users/login/Login';
import Register from './users/register/Register';
import ResetPassword from './pages/auth/ResetPassword';
import UserAgreement from './pages/auth/UserAgreement';
import Account from './pages/account/Account';
import Verify from './pages/account/Verify';
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
} from './users/utils/AuthenticateUser';
// Components
import ConfirmPolicies from './components/popups/ConfirmPolicies';
// Context
import { UserContext } from './context/UserContext';
import ProjectContainer from './pages/project/ProjectContainer';
import PortfolioItem from './pages/portfolio/PortfolioItem';
import MessageOpen from './components/messages/MessageOpen';
import SendNewMessage from './pages/messages/SendNewMessage';
import NewProject from './pages/project/NewProject';
import UpdatePassword from './pages/account/UpdatePassword';
import IndexPage from './pages/heros/IndexPage';
// Analytics
import ReactGA from 'react-ga';

// const TRACKING_ID = ;

function App() {
  const { toggleCookiePolicy } = useContext(UserContext);
  ReactGA.initialize('G-B2XXL65L29');
  ReactGA.pageview('/');
  ReactGA.pageview('/contact');
  ReactGA.pageview('/design');

  return (
    <>
      <Routes>
        <Route path='/' index element={<IndexPage />} />
        <Route path='/portfolio' element={<PortfolioHome />} />
        <Route path='/store' element={<SalesHome />} />
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

        <Route path='/portfolio-item/:itemName' element={<PortfolioItem />} />
        <Route path='users/verify/:userId/:uniqueString' element={<Verify />} />
        <Route
          path='users/:userId/update-password'
          element={<UpdatePassword />}
        />
        <Route
          path='users/reset-lost-password/:userId/:uniqueString'
          element={<EnterNewPassword />}
        />
        {/* Messages */}
        <Route
          path='user/:userId/messages/:messageId'
          element={<MessageOpen />}
        />
        <Route path='user/messages/create-new' element={<SendNewMessage />} />

        {/* Projects */}
        <Route
          path='user/:userId/projects/:projectId'
          element={<ProjectContainer />}
        />
        <Route path='new-project' element={<NewProject />} />

        {/* Util Routes */}
        <Route path='/user-cookie-policy' element={<UserAgreement />} />
        <Route path='/terms-and-conditions' element={<UserAgreement />} />
        <Route path='/test' element={<TestPage />} />
        <Route path='*' element={<Error404 />} />
      </Routes>

      {!toggleCookiePolicy && <ConfirmPolicies />}
    </>
  );
}

export default App;
