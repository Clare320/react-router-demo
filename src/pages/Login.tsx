import React from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const handleLogin = () => {
    document.cookie = "role=user";

    history.goBack();
  };

  return (
    <div>
      <button onClick={handleLogin}>登录</button>
    </div>
  );
}

export { Login };
