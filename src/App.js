import Header from "../src/components/Header";
import Home from "../src/components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../src/components/Login";
import Registration from "../src/components/Registration";
const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Registration} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
