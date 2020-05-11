import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/Books";

function App() {
  return (
    <>
      <Router>
        <div>
          <Route exact path="/" component={Books} />
        </div>
      </Router>
    </>
  );
}

export default App;

// {
/* <Router>
<Nav />
<Books />
<Switch>
  <Route exact path="/" component={Books} />
  <Route exact path="/books" component={Books} />
  <Route path="*" component={NoMatch} />
  <Route exact path="/books:id" component={Detail} />
</Switch>
</Router> */
// }
