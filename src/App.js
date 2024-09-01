import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import SimpleCounter from './components/SimpleCounter';

function App() {
  return (
    <>
      <Header/>
      <div>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/simple_counter" element={<SimpleCounter/>}/>
          </Routes>
      </div>
    </>
  );
}

export default App;
