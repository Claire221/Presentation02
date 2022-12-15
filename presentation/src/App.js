
import './App.css';

import Flask from "./pages/Flask"
import Jinja from "./pages/Jinja"
import Django from "./pages/Django"

function App() {
  return (
    <div className="App">
      <Flask/>
      <Jinja/>
      <Django/>
    </div>
  );
}

export default App;
