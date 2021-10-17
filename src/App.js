import "./App.css";
import Home from "./component/homepage/Home";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faSearch,
  faChevronCircleRight,
  faMapMarkerAlt,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faChevronCircleRight, faMapMarkerAlt, faAngleRight);
function App() {
  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
