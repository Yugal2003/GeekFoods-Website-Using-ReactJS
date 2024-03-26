import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Sections/Home';
import Quote from './Sections/Quote'
import Food from './Sections/Food';
import Resturants from './Sections/Resturants'
import Layout from './Sections/Layout';
import Contact from './Sections/Contact';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Layout/>}>
            <Route path='' element={<Home />}/> 
            <Route path='/Home' element={<Home />}/>
            <Route path='/Quote' element={<Quote />}/>
            <Route path='/Resturants' element={<Resturants/>}/>
            <Route path='/Foods' element={<Food />}/>
            <Route path='/Contact' element={<Contact/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
