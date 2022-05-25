import Home from './page/Home';
import Students from './page/Students';
import Contact from './page/Contact';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/students' element={<Students />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
