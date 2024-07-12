import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import Contact from './Components/Contact';
import Office from './Components/Office';
import About from './Components/About';
import Front from './Components/Front';
import Home from './Components/Home';
import Bhopal_1 from './Components/Bhopal_1';
import Bhopal_2 from './Components/Bhopal_2';
import Bhopal_3 from './Components/Bhopal_3';
import Bhopal_4 from './Components/Bhopal_4';
import Bhopal_5 from './Components/Bhopal_5';
import Error from './Components/Error';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Front/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/offices' element={<Office/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/bhopal_1' element={<Bhopal_1/>}></Route>
      <Route path='/bhopal_2' element={<Bhopal_2/>}></Route>
      <Route path='/bhopal_3' element={<Bhopal_3/>}></Route>
      <Route path='/bhopal_4' element={<Bhopal_4/>}></Route>
      <Route path='/bhopal_5' element={<Bhopal_5/>}></Route>
      <Route path='/error' element={<Error/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
