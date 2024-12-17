import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom';
import AuthProvider, { useAuth } from './context/AuthContext'; // Correct import
import Beranda from './components/beranda';
import LandingLayout from './layouts/Landing';
import TentangKami from './components/tentangKami';
import Faqs from './components/faqs';
import Login from './layouts/Login';
import Register from './layouts/Register';
import DashboardLayout from './layouts/Dashboard';
import DashboardHome from './components/Dasboard';
import Tanaman from './components/tanaman';
import Nutrisi from './components/nutrisi';
import DetailTanaman from './components/detailTanaman';
import { Toaster } from 'sonner';
import './App.css';
import Profile from './components/profile';
import 'react-calendar/dist/Calendar.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster richColors position="top-center" />
        <Routes>
          <Route path="/" element={<LandingPageOrDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<LandingLayout />}>
            <Route path="/beranda" element={<Beranda />} />
            <Route path="/tentangkami" element={<TentangKami />} />
            <Route path="/faqs" element={<Faqs />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/home" element={<DashboardHome />} />
              <Route path="/tanaman" element={<Tanaman />} />
              <Route path="/nutrisi" element={<Nutrisi />} />
              <Route path="/detailtanaman/:id" element={<DetailTanaman />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

const LandingPageOrDashboard = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/beranda" />;
};

const PrivateRoute = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default App;
