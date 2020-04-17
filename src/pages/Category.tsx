import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";

interface CategoryParams {
  name: string;
}

function Category() {
  let { name } = useParams();
  let match = useRouteMatch("/category/:name");

  React.useEffect(() => {
    console.log("match--name-", match, match?.params);
    // 不设置any类型使用params中键提示Property 'name' does not exist on type '{}'.  TS2339
    let params: CategoryParams | any = match?.params;
    console.log("--->", params.name);
  }, [match]);

  return <div>Category {name}</div>;
}

export { Category };
