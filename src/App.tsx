import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/signup" Component={Signup} />
        <Route path="/login" Component={Login} />
      </Routes>
        

  </Router>
  );
}

export default App;
