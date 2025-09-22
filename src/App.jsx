import './App.css'
import Home from './Pages/Home'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { setUser, clearSUser } from './Redux/UserSlice'
import { useDispatch } from 'react-redux'
import About from './Pages/About'
import Trending from './Pages/Trending'
import Contact from './Pages/Contact'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Routes , Route } from 'react-router-dom'
import LoginPage from './Authentication/LoginPage'
import Signup from './Authentication/Signup'
import Navbar from './Compnents/Navbar'
import SearchPage from "./Pages/SearchPage";
import CartProduct from './Compnents/CartProduct'
import { useEffect } from 'react'
import CheckOut from './Pages/CheckOut'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(setUser({ uid: currentUser.uid, email: currentUser.email }));
      } else {
        dispatch(clearSUser());
      }
    });
    return () => unSubscribe();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Trending' element={<Trending/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/login' element={<LoginPage onClose={() => {}} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/cart' element={<CartProduct/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
      </Routes>

      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
