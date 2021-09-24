// import React from "react";
// import "./App.css";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Navbar from "./components/Navbar/Navbar";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Navbar />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
//import Reports from "./pages/Reports";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/reports" component={Reports} /> */}
          <Route path="/about" component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
