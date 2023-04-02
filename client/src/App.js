import { Routes, Route } from 'react-router-dom';
// Context
import { useContext } from 'react';
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
import Tavyepoxy from './pages/portfolio/items/Tavyepoxy';
import MessageOpen from './components/messages/MessageOpen';
import SendNewMessage from './pages/messages/SendNewMessage';
import NewProject from './pages/project/NewProject';
import UpdatePassword from './pages/account/UpdatePassword';
import IndexPage from './pages/heros/IndexPage';
// Analytics
import ReactGA from 'react-ga';
import MatchedBetting from './pages/portfolio/items/MatchedBetting';
import BioClicker from './pages/portfolio/items/BioClicker';
import Myecoapp from './pages/portfolio/items/Myecoapp';
import LuxuryCasino from './pages/portfolio/items/LuxuryCasino';

// const TRACKING_ID = ;

function App() {
  const { toggleCookiePolicy } = useContext(UserContext);

  ReactGA.initialize('G-B2XXL65L29');
  ReactGA.pageview('/');
  ReactGA.pageview('/contact');
  ReactGA.pageview('/design');
  ReactGA.pageview('/portfolio');
  ReactGA.pageview('/login');
  ReactGA.pageview('/logout');
  ReactGA.pageview('/store');
  ReactGA.pageview('/new-project');

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

        {/* User data */}
        <Route path='users/verify/:userId/:uniqueString' element={<Verify />} />
        <Route
          path='users/:userId/update-password'
          element={<UpdatePassword />}
        />
        <Route
          path='users/reset-lost-password/:userId/:uniqueString'
          element={<EnterNewPassword />}
        />

        {/* Protfolio Items */}
        <Route path='/portfolio-item/tavyepoxy' element={<Tavyepoxy />} />
        <Route
          path='/portfolio-item/matched-betting'
          element={<MatchedBetting />}
        />
        <Route path='/portfolio-item/bio-clicker' element={<BioClicker />} />
        <Route path='/portfolio-item/myecoapp' element={<Myecoapp />} />
        <Route
          path='/portfolio-item/luxury-casino'
          element={<LuxuryCasino />}
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
