import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import Cardapio from "./components/pages/Cardapio";
import Header from "./components/layout/Header";

function App() {
  

  return (

    <Router>
      <Header />
      

      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/Cardapio" element={<Cardapio />}  />
        
      </Routes>
    </Router>

    
  )
}

export default App
