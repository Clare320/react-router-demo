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
  const cookies = cookieStr.split(";");
  let cookie = null;
  cookies.some((item) => {
    if (item.includes("role")) {
      cookie = item.trim().replace("role=", "");
      return true;
    }
    return false;
  });
  console.log("cookieStr--->", cookieStr, cookie);

  if (cookie === null) {
    return <Route path={props.path} render={() => <Component />} />;
  }
  console.log("role--->", props.role, cookie);

  if (!props.role.includes(String(cookie))) {
    if (cookie === "visitor") {
      // 登录
      return <Redirect to='/login' push />;
    } else if (cookie === "user") {
      //权限提示页
    }
    return null;
  }
  return <Route path={props.path} render={() => <Component />} />;
};

export { RoleRoute };
