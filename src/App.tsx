import "./App.css";
import Form from "./Components/Form";

function App() {
  return (
    <div className="myPage">
      <div className="App">
        <Form />
      </div>
      <div className="watermark">
        Made by{" "}
        <a title="hashim" href="https://endearing-fox-66407c.netlify.app/">
         {" "}Mohammed Hashim
        </a>
      </div>
    </div>
  );
}

export default App;
