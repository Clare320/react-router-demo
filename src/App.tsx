import React from "react";
import "./App.css";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { First } from "./pages/First";
import { Home } from "./pages/Home";
import { Second } from "./pages/Second";
import { Third } from "./pages/Third";
import { Four } from "./pages/Four";
import { Five } from "./pages/Five";
import { About } from "./pages/About";
import { Category } from "./pages/Category";

function usePageViews() {
  let location = useLocation();

  React.useEffect(() => {
    console.log("pageview--->", location, location.pathname);
  }, [location]);
}

function App() {
  usePageViews();

  return (
    <div className='App'>
      <Switch>
        <Route path='/first' component={First} />
        <Route path='/second' component={Second} />
        <Route path='/third' component={Third} />
        <Route path='/four' component={Four} />
        <Route path='/five' component={Five} />
        <Route path='/about' component={About} />
        <Route path='/category/:name' component={Category} />
        <Redirect exact from="/" to="/home"/>
        <Route exact path='/home' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
