import "./App.css";
import Array from "./components/Array/Array";
import Form from "./components/Form/Form";
import Counter from "./components/Counter/Counter";
import Quiz from "./components/Quiz/Quiz";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <Counter />
        <Quiz />
      </header>
    </div>
  );
}

export default App;
