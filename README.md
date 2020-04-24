[toc]

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

#### MemoryRouter

#### NativeRouter

#### StaticRouter



### 路由匹配器

#### Switch



#### Route

渲染组件的属性有三种：

* `component: Component` 这种方式route会重新创建一个组件使用，当使用内联函数时每次渲染都会重新创建
* `render: func` 使用内联函数时渲染不会重新创建，可以使用`Route`的所有属性
* `children: func` 可以使用`Route`所有属性，工作原理跟render方式一样，无论是否匹配都会被调用

`render`和`children`这两种方式都可以获取`route props`来作为组件属性。`route props`包括`match`,`location`,`history`

> 优先级：children>component>render

**疑问点：render跟children有啥区别？**

```
path: string | string[]
exact: bool
strict: bool
location: object
sensitive: bool
```





当地址跟`Route`路径匹配时才去渲染UI，否则渲染函数返回null。`Rotue`总时严格地渲染，即使渲染null。

注意项：

1. `Route`标签路径明确的放在前面
2. `<Route path>`匹配一个 url 的开头，而不是整个字符串
3. 合理使用 exact 参数
4. `useRouteMatch`去获取

### 导航 路由切换器

#### Link

用来声明导航。

支持属性：

1. `to: string`：跳转的连接位置，由pathname,search,hash properties拼接
2. `to: object`: `{pathname, serach, hash, state}`
3. `to: function`: `to={location => (object/string)}`
4. `replace: bool`:  设为true，替换导航栈中当前入口，而不是新增一个
5. `innerRef: function | RefObject`

> React Router 5.1及以后有效

#### NavLink

相比较`Link`，可以给组件添加样式属性。

除`Link`支持属性外，还有

1. `activeClassName: string`

2. `activeStyle: object`

3. `exact: bool` 为true时，只有完全匹配style才会应用到。

4. `strict: bool`, 为true时，匹配验证的时候右侧斜杠会被考虑进去。

5. `isActive: func` 验证匹配时做更多的逻辑

6. `location: object` 默认和当前url来比较，也可设置这个属性来指定新的判断url

7. `aria-current` **不明白**

   `page, step, location, date, time, true`

#### Redirect

重定向，强制导航, 导航到一个新地址，并且在导航栈中覆盖当前地址。

支持的属性：

1. `to: string`
2. `to: object`
3. `push: bool` 为true时重定向将推出一个新入口，代替替换当前地址
4. `exact: bool`
5. `strict: bool` 等价于`Route`的strict
6. `sensitive: bool` 等价于 `Route`的`sensitive`

### location

```react
{ pathname, search, hash, state }
```

### match

### matchPath

### withRouter 



## 服务端渲染

使用`StaticRouter`代替`BrowserRouter`

## 代码分割

`webpack`, `@babel/plugin-syntax-dynamic-import`,`loadable-component`

## Scroll Restoration

滚动复原

## Philosophy

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

## 使用

1. 页面可以使用`Link`，也可以使用`useHistory`来导航

## 权限管理方案

1. 有些页面需要权限才可进入，无权限的跳转到指定页面
2. 有些模块有些权限显示，有些不显示
3. 角色更新后权限更新

#### 方案一

1. 给每一条路由添加权限标识

   ```react
   authority: ['admin', 'user']
   ```

   

2. 集中配置路由

3. 自定义组件 封装Route，内部做角色验证

4. 权限验证类似antd design pro处理

   ```react
   import { default as RenderAuthorize } from '@/components/Authorized';
   import { getAuthority } from './authority';
   
   let Authorized = RenderAuthorize(getAuthority()); // eslint-disable-line
   
   // Reload the rights component
   const reloadAuthorized = () => {
     Authorized = RenderAuthorize(getAuthority());
   };
   
   export { reloadAuthorized };
   export default Authorized;
   ```

   

## Q&A

1. 每次切换路由时整个root节点都会重渲染

   因为`BrowserRouter`把`forceRefresh`设置为true，每次切换都会强制刷新

## kede-template

### 结果

### 方案，问题

1. 路由是怎么匹配组件的

   目前方案中在`generateRotue()`中直接返回`Route`，在`render()`方法中判断是否要登录和权限问题，遇到需要登录和权限不够返回的是`<Redirect />`，其它返回组件。

   这里在`generateRoute()`直接处理是否登录，权限验证逻辑，`Route`的render()直接返回对应组件，会不会更好

2. 面包屑如何更好跟路由绑定

   读取配置路由数组，根据指定规则过滤出来菜单路由数组，每一项都设置name和path，包括子路由数组中元素

## 盲点

### Mock

https://github.com/nuysoft/Mock/wiki



