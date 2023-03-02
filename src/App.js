import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Header from './Shared/Header/Header';
import Services from './Pages/Services/ServicesPage';
import Pricing from './Pages/Pricing/Pricing';
import Contact from './Pages/Contact/Contact';
import Footer from './Shared/Footer/Footer';
import Login from './Shared/Login/Login';
import SignUp from './Shared/SignUp/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import SingleServicePage from './Elements/ServiceElements/SingleServicePage';

function App() {
  return (
    <div className='main'>
      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route
          path="/home"
          element={<Navigate to="/" replace />}
        />
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/Services' element={<Services></Services>}></Route>
        <Route path='/Services/:serviceId' element={<SingleServicePage></SingleServicePage>}></Route>
        <Route path='/pricing' element={<Pricing></Pricing>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
