import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Temp from "./Pages/Temp";
import { MyProvider } from "./api/NameContext.jsx";
import Navbar from "./Components/Navbar.jsx";

function App() {
  return (
    <MyProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/temp" element={<Temp />} />
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;
