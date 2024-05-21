import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Navbar from "./Components/Navbar.jsx";
import Play from "./Pages/Play.jsx";
import { GlobalContextProvider } from "./context/index.jsx";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/rules" element={<Create />} />
          <Route path="/play" element={<Play />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
