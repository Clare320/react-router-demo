路由深度定制

路由配置组织方式

权限点（角色）控制

## 组件

### 路由

路由应用的核心就是路由，确保把 router 渲染在根节点，通常最高级的`<App />`标签放在 router 里面。

```react
ReactDom.render(
	<BrowserRouter>
		<App />
	</ BrowserRouter>,
	document.getElementById("root");
);
```

#### BrowserRouter

- 使用格式化的 URL 路径
- 需要服务器正确地配置

支持属性：

```
basename: string
getUserConfirmation: func
forceRefresh: bool // 设置为true，全页面刷新
keyLength: number
children: node // 单节点
```

#### HashRouter

- 把当前位置存储在 URL 的哈希部分
- Hash 不提交到服务器，所以服务器不需要特殊的服务配置

支持属性：

```react
basename: string
getUserConfirm: func
hashType: string // slash（default）, noslash hashbang
children: node // 单节点
```

> 区别就在于两者存储 url 和与服务器交互的方式不同

### 路由匹配器

#### Switch

#### Route

注意项：

1. `Route`标签路径明确的放在前面
2. `<Route path>`匹配一个 url 的开头，而不是整个字符串
3. 合理使用 exact 参数
4. `useRouteMatch`去获取

### 导航 路由切换器

#### Link

### NavLink

可使用`activeClassName`属性来标记高亮状态

### Redirect

重定向，强制导航

## 服务端渲染

使用`StaticRouter`代替`BrowserRouter`

## 代码分割

`webpack`, `@babel/plugin-syntax-dynamic-import`,`loadable-component`

## Scroll Restoration

滚动复原

#Philosophy

### Static Routing

在渲染组件之前先把路由配置好

### Dynamic Routing

不需要`Switch`只用`Route`来实现？把`Route`作为组件去加载渲染

### Nested Routes

嵌套路由

### Responsive Routes

## Redux Integration

ecosystem

## Hook

### useHistory

获取`history`实例，用来导航。具体可[查看](https://github.com/ReactTraining/history/tree/master/docs)。

```react
let history = useHistory();
```

```react
history.push(path, [state]); //push页面
history.replace(path, [state]);
history.go(n);
history.goBack(); // 等价于history.go(-1);
history.goForward(); // 等价于history.go(1);
history.canGo(n);//仅在createMemoryHistory
```

使用`push`或`replace`时既可以传 path 和可选的 state，也可以传一个 location-like 对象 `{ pathname, search, hash, state }`。

> Location 状态仅支持`createBrowserHistory`和`createMemoryHistory`

### useLocation

返回代表当前 url 的`location`对象。URL 一旦变化就会返回一个新的 location 对象。

```react
{
	pathname: "",
	search: "",
	hash: "",
	state: "",
  key: "",
}
```

### useParams

获取 url 的参数

### useRouteMatch

匹配 url

## 路由组织方式

### 集中配置

```react
const routes = [
  {
    path: "/",
    component: Root,
    loadData: () => getSomeData()
  }
  // etc.
];
import { routes } from "./routes.js";

function App() {
  return (
    <Switch>
      {routes.map(route => (
        <Route {...route} />
      ))}
    </Switch>
  );
}
```

### 使用 react-router-config

[react-router-config](https://github.com/reacttraining/react-router/tree/master/packages/react-router-config)
