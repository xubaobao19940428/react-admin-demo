// import AsyncComponent from "@/components/asyncComponent";
// const Layout = AsyncComponent(() => import("@/pages/layout"));
import Layout from "@/pages/layout";

import OrderList from "@/pages/orderModule";
/**
 * @AsyncComponent 懒加载组件
 * @exact 绝对匹配，这个在里面父组件一定不要加上,不然后面的子路由根本就匹配不到
 * @path 路径
 * @component 组件名称
 */
const Order = [
  {
    path: "/order",
    component: Layout,
    meta: { title: "订单管理" },
    children: [
      {
        path: "/orderList",
        component: OrderList,
        meta: { title: "订单列表" },
      },
    ],
  },
];

export default Order;
