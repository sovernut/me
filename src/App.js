import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import { Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Route path="/metwo">
        <header className="App-header">Hi there</header>
      </Route>
      <Route path="/me">
        <Main />
      </Route>
    </div>
  );
}

export default App;
