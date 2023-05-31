
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import Navbar from './componets/Navbar';
import { VStack } from '@chakra-ui/react';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <div>
      <Home />
      <VStack style={{ marginTop: "33rem" }}>
        <hr />
        <Experience />
      </VStack>
    </div>
      </Router>
    </div>
  );
}

export default App;
