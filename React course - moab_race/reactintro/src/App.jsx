import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <>
      <MyComponent />
      <span style={{ color: "red" }}>Hi, this is Claire.</span>
      <MyComponent />
      <span className="greentext">This is also Claire.</span>

      <MyComponent />
      <MyComponent />
      <MyComponent />
    </>
  );
}

export default App;
