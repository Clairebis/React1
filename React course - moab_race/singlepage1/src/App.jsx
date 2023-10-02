import "./App.css";
import Columns from "./components/Columns";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Home from "./components/Home";
import Reactstate from "./components/Reactstate";

function App() {
  return (
    <>
      Claire
      <Home />
      <Greeting name="Natalia" mystyle="red" />
      <Greeting name="Rasmus" mystyle="green" />
      <Greeting name="Claire" mystyle="blue" />
      <Reactstate />
      <Header />
      <Columns />
      <Footer />
    </>
  );
}

export default App;
