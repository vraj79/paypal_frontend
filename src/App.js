import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Homepage } from './components/Homepage';
import Dashboard from './components/Dashboard';

const MainRoutes=()=>{
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  )
}
function App() {
  return (
    <div className="App">
      <MainRoutes/>
    </div>
  );
}

export default App;
