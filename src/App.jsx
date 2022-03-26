import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import styled from "styled-components";
import Signin from "./pages/auth/Signin";
import SignUp from "./pages/auth/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cont>
        <Routes className="pages">
          <Route path="/" exact element={<Home />} />
          <Route path="/sign-in" exact element={<Signin />} />
          <Route path="/sign-up" exact element={<SignUp />} />
        </Routes>
      </Cont>
      {/* <Footer /> */}
    </div>
  );
}

const Cont = styled.div`
  padding-top: 15vh;
`;

export default App;
