# admin

> A Vue.js project

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

### 路由设计

- 在 `App.vue` 文件中设置主路由出口（顶级路由）
- 在 Home 路由中设置子路由，在 Home 组件中设置路由出口
- 注意：因为 Login 组件 会展示全部页面，而在 Home 组件中侧边栏和头部组件都是需要展示的，所以在主要内容区域设置其他路由来切换就好

### 登录页面

- 在登录页面发起 Ajax 请求，进行前后台交互，但是在交互的时候，会出现跨域问题

  + 跨域：webpack 中的配置支持代理跨域，在配置文件中配置就可以支持跨域

- 表单提交的数据格式：

  ```
  application/x-www-form-urlencoded  // key=value&key=value 的格式
  application/json   // json 格式
  multipart/form-data  
  ```

  - 使用 `axios` 发起 `ajax` 请求的时候，会默认使用 `application/json` 的格式，但是在后台数据接口要求接受的数据是 `formData` ,所以在 `axios` 中有专门的表单数据设置