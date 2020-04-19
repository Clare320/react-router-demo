import React from "react";
import { useHistory, Redirect, Link } from "react-router-dom";

function Home() {
  const titles = [
    "First",
    "Second",
    "Third",
    "Four",
    "Five",
    "About",
    "Category",
  ];

  let history = useHistory();

  React.useEffect(() => {
    console.log("history-->", history);
  }, [history]);

  const handleClick = (index: number) => {
    console.log(index);
    let route;
    if (index === 6) {
      route = "/category/meitong";
    } else {
      route = "/" + titles[index].toLowerCase();
    }
    history.push(route);
  };

  return (
    <div>
      <div>首页</div>
      {titles.map((item, index) => (
        <button key={item + index} onClick={() => handleClick(index)}>
          {item}
        </button>
      ))}
      <div>
        <Link to="/four">Four</Link>
        {/* <Redirect to="/five" push /> */}
      </div>

    </div>
  );
}

export { Home };
