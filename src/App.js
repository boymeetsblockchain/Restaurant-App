
import{Routes, Route} from 'react-router-dom'
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import HomePage from './pages/HomePage';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Favorite from './pages/Favorite';
import PrivateRoute from './components/PrivateRoute';

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/profile' element={<PrivateRoute />} >
           <Route path='/profile' element={<Profile/>} />
          </Route>
        <Route path='/settings' element={<Settings />} />
        <Route path='/favorite' element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
