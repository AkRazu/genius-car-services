import { Route, Routes } from "react-router-dom"
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Checkout from "./Pages/Checkout/Checkout/Checkout";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home/>
          </RequireAuth>
        }></Route>
        <Route path='/home' element={
          <RequireAuth>
            <Home/>
          </RequireAuth>
        }></Route>
        <Route path="/service/:serviceId" element={<ServiceDetails/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
