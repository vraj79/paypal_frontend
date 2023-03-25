import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Homepage } from './components/Homepage';
import Dashboard from './components/Dashboard';
import SingleTask from './components/SingleTask';
import AddTask from './components/AddTask';
import Navbar from './components/Navbar';

const MainRoutes=()=>{
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={
        <>
        <Navbar/>
      <Dashboard/>
      </>
      }/>
      <Route path="/task/:id" element={<SingleTask/>}/>
      <Route path="/task/add" element={<AddTask/>}/>
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
