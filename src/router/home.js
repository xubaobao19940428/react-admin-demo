// import AsyncComponent from "@/components/asyncComponent";

// const Layout = AsyncComponent(() => import("@/pages/layout"));
import Layout from "@/pages/layout";

import Dashboard from "@/pages/homeModule";
/**
 * @AsyncComponent 懒加载组件
 * @exact 绝对匹配，这个在里面父组件一定不要加上,不然后面的子路由根本就匹配不到
 * @path 路径
 * @component 组件名称
 */
const Home = [
  {
    path: "/",
    component: Layout,
    meta: { title: "数据中心" },
    children: [
      {
        path: "/dashboard",
        component: Dashboard,
        meta: { title: "数据概览" },
        exact: true,
      },
    ],
  },
];

export default Home;
