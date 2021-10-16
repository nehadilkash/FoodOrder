import "./App.css";
import Home from "./component/homepage/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(faCheckSquare, faCoffee);
function App() {
  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
