import './App.css';
import Home from './Home';
import WorkShops from './Pages/WorkShops';
import Activities from './Pages/Activities';
import Menu from './components/Menu.js';
import RegisterForm from './components/RegisterForm';
import SubmitForm from './components/SubmitForm';
import FormPart6 from './components/FormPart6';
import Testing from './components/Testing'; 
import Testing2 from './components/Testing@';
import Login from './components/Login';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { useState ,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import Dashboard from './components/Dashboard';
import Final_screen from './components/Final_screen';
import Aboutuhsr from './components/Aboutuhsr';
import SubmitForm2 from './components/SubmitForm2';
function App() {
  useEffect(()=>{
    
  })
  const [loggedin,setLogin]=useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [childData,setChildData]=useState("");


  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };
  function handleChildData(data){
    setChildData(data);
    setMenuOpen(childData);
    console.log(isMenuOpen)
  }
  return (
    <div>
      <BrowserRouter>
        <Menu isOpen={isMenuOpen} sendChildData={handleChildData}/>
        <Button
          color="secondary"
          variant='contained'
          sx={{
            borderRadius: '500px',
            height: '10vw',
            width: '10vw',
            padding: "5%",
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 100
          }}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <CloseIcon/> :<MenuIcon /> }
        </Button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workshops" element={<WorkShops />} />
          <Route path="/activity" element={<Activities />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/billing" element={<FormPart6 />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/xxx" element={<Testing2 />} />
          <Route path="/screenshot" element={<SubmitForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard"element={<Dashboard/>}/>
          <Route path="/confirmation"element={<Final_screen/>}/>
          <Route path="/aboutuhsr"element={<Aboutuhsr/>}/>
          <Route path="/submit2"element={<SubmitForm2/>}/>
        </Routes>
      </BrowserRouter>
      <script>
    AOS.init();
  </script>
    </div>
    
  );
}

export default App;
