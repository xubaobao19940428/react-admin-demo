// import AsyncComponent from "@/components/asyncComponent";

// const Layout = AsyncComponent(() => import("@/pages/layout"));
import Product from "./proudct";
import Order from "./order";
import Home from "./home";
import Login from "@/pages/loginModule";
/**
 * @AsyncComponent 懒加载组件
 * @exact 绝对匹配，这个在里面父组件一定不要加上,不然后面的子路由根本就匹配不到
 * @path 路径
 * @component 组件名称
 */
const Routers = [
  {
    path: "/login",
    component: Login,
    exact: true,
  },
  ...Home,
  ...Product,
  ...Order,
  //   {
  //     path: "/",
  //     component: Layout,
  //         children: [
  //       //   {
  //       //     path: "/",
  //       //     component: AsyncComponent(() => import("@/pages/dashboard")),
  //       //     exact: true,
  //       //   },
  //       //   {
  //       //     path: "/home",
  //       //     component: AsyncComponent(() => import("@/pages/home")),
  //       //   },
  //       //   {
  //       //     path: "/cart",
  //       //     component: AsyncComponent(() => import("@/pages/cart")),
  //       //   },
  //       //   {
  //       //     path: "/my",
  //       //     component: AsyncComponent(() => import("@/pages/self")),
  //       //   },
  //     ],
  //   },
];

export default Routers;
