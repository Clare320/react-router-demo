import React from "react";
import { useHistory } from "react-router-dom";

function First() {
  const history = useHistory();

  const handleLogout = () => {
    document.cookie = "role=visitor";

    history.replace("/");
  };
  return (
    <div>
      <div>First</div>
      <button onClick={handleLogout}>退出</button>
    </div>
  );
}

export { First };
