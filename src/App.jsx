import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/welcome';
import NavBar from './components/nav';
import Login from './components/login';
import Register from './components/register';
import Cuisine from './components/cuisine';
import Tracker from './components/tracker';
import MealDetails from './components/MealDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cuisine" element={<Cuisine />} />
          <Route path="/mealdetails" element={<MealDetails />} />
          <Route path="/tracker" element={<Tracker />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
