import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import err from './pages/err/err';
import Layout from "./pages/layout/Layout"
import FormLogin from './pages/lgin/lgin';
import Main from "./pages/main/main"
import NewBadge from "./pages/NewBadge/NewBadge"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/new" component={NewBadge}></Route>
          <Route exact path="/newone" component={FormLogin}></Route>
          <Route exact path="/error" component={err}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
