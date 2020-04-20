import React, { FormEvent } from "react";
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

  const handleSelectChange = (e: FormEvent) => {
    const select = e.target as HTMLSelectElement;
    const value = select.value;
    // 处理cookie

    document.cookie = "role=" + value;
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
        <Link to='/four'>Four</Link>
        {/* <Redirect to="/five" push /> */}
      </div>
      <div>
        <p>改变角色</p>
        <select
          name='改变角色'
          id='role'
          onChange={handleSelectChange}
          defaultValue='visitor'
        >
          <option value='admin'>admin</option>
          <option value='user'>user</option>
          <option value='visitor'>visitor</option>
        </select>
      </div>
    </div>
  );
}

export { Home };
