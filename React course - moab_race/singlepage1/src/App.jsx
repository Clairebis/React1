import "./App.css";
import Columns from "./components/Columns";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Home />
      <Greeting name="Natalia" mystyle="red" />
      <Greeting name="Rasmus" mystyle="green" />
      <Greeting name="Claire" mystyle="blue" />
      <Header />
      <Columns />
      <Footer />
    </>
  );
}

export default App;
