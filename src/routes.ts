import { First } from "./pages/First";
import { Second } from "./pages/Second";
import { Third } from "./pages/Third";
import { Four } from "./pages/Four";
import { Five } from "./pages/Five";
import { About } from "./pages/About";
import { Category } from "./pages/Category";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

const routes = [
  {
    path: "/first",
    exact: true,
    strict: true,
    component: First,
    role: ["admin", "user"],
  },
  {
    path: "/second",
    exact: true,
    strict: true,
    component: Second,
    role: ["admin", "user"],
  },
  {
    path: "/third",
    exact: true,
    strict: true,
    component: Third,
    role: ["admin", "user"],
  },
  {
    path: "/four",
    exact: true,
    strict: true,
    component: Four,
    role: ["admin", "user"],
  },
  {
    path: "/five",
    exact: true,
    strict: true,
    component: Five,
    role: ["admin", "user"],
  },
  {
    path: "/about",
    exact: true,
    strict: true,
    component: About,
    role: ["admin", "user", "visitor"],
  },
  {
    path: "/category/:name",
    exact: true,
    strict: true,
    component: Category,
    role: ["admin"],
  },
  {
    path: "/login",
    exact: true,
    strict: true,
    component: Login,
    role: ["visitor"],
  },
  {
    path: "/",
    exact: true,
    strict: true,
    component: Home,
    role: ["admin", "user", "visitor"],
  },
];

export { routes };
