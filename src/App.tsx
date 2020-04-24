import React from "react";
import "./App.css";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { routes } from "./routes";
import { RoleRoute } from "./RoleRoute";

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
        {routes.map((item, index) => {
          return (
            <RoleRoute
              key={"route" + index}
              path={item.path}
              role={item.role as [string]}
              component={item.component}
            />
          );
        })}
      </Switch>
    </div>
  );
}

export default App;
