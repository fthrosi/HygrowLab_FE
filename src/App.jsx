import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Beranda from './components/beranda';
import LandingLayout from './layouts/Landing';
import TentangKami from './components/tentangKami';
import Faqs from './components/faqs';
import Login from './layouts/Login';
import Register from './layouts/Register';
import DashboardLayout from './layouts/Dashboard';
import DashboardHome from './components/dashboard';
import Tanaman from './components/tanaman';
import Nutrisi from './components/nutrisi';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LandingPageOrDashboard />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<LandingLayout />}>
            <Route path="/beranda" element={<Beranda />} />
            <Route path="/tentangkami" element={<TentangKami />} />
            <Route path="/faqs" element={<Faqs />} />
          </Route>
          {/* <Route path="/dashboard" element={<PrivateRoute />}> */}
            <Route element={<DashboardLayout />}>
              <Route path="home" element={<DashboardHome />} />
              {/* <Route path="profile" element={<DashboardProfile />} /> */}
              <Route path="tanaman" element={<Tanaman />} />
              <Route path="nutrisi" element={<Nutrisi />} />
            </Route>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

const LandingPageOrDashboard = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? (
    <Navigate to="/dashboard/home" />
  ) : (
    <Navigate to="/beranda" />
  );
};

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default App;
