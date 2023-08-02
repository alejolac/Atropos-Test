import "./App.css";
import "atropos/css";
import Atropos from "atropos/react";

import Berserk from "./assets/berserk.jpg";

function App() {
  return (
    <div id="app">
      <Atropos
        activeOffset={40}
        shadowScale={1.05}
      >
        <img src={Berserk} data-atropos-offset="-2" className="img1" />
      </Atropos>
    </div>
  )
}

export default App;
