import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import styled from "styled-components";
import Signin from "./pages/auth/Signin";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cont>
        <Routes className="pages">
          <Route path="/" exact element={<Home />} />
          <Route path="/sign-in" exact element={<Signin />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
        </Routes>
      </Cont>

      <Footer />
    </div>
  );
}

const Cont = styled.div`
  padding-top: 15vh;
`;

export default App;
