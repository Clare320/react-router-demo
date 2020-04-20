import React from "react";
import { Route, Redirect } from "react-router-dom";

interface Role {
  path: string;
  component: Function;
  role: [string];
}

const RoleRoute = (props: Role) => {
  const Component = props.component;
  const cookieStr = document.cookie;
  const roleCookie = cookieStr.split(";")[1];
  const cookie = roleCookie.trim().replace("role=", "");

  if (!props.role.includes(String(cookie))) {
    if (cookie === "visitor") {
      console.log("---> redirect login");

      // 登录
      return <Redirect to='/login' />;
    } else if (cookie === "user") {
      //权限提示页
    }
    console.log("---null render");

    return null;
  }
  return <Route path={props.path} render={() => <Component />} />;
};

export { RoleRoute };
