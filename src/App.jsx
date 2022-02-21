import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cont>
        <Routes className="pages">
          <Route path="/" exact element={<Home />} />
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
