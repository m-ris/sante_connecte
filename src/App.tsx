import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

import Urgence from './pages/Urgence'



function App() {
  return (
    <div className="App">
      <Router>
         
        <Routes>
          
          <Route path='/' element={ <Urgence />}/>
          <Route path='/pages/sign_up.tsx' element={ <SignUp  />} />
          <Route path='/pages/sign_in.tsx' element={ < SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
