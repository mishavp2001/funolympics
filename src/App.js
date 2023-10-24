import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';

import NavigationBar from './Components/Common/NavigationBar';
import FooterBar from './Components/Common/FooterBar ';
import HomePage from './Components/Home/HomePage';
import LoginPage from './Components/Auth/LoginPage';
import RegisterPage from './Components/Auth/RegisterPage';

function App() {
  return (
    <div className="App">
     <NavigationBar />
     <Routes>
      <Route path='*' element = {<HomePage/>} />
      <Route path='/' exact={true} element = {<HomePage/>} />
      <Route path='/login' element = {<LoginPage/>} />
      <Route path='/register' element = {<RegisterPage/>} />
     </Routes>
     <FooterBar />
    </div>
  );
}

export default App;
