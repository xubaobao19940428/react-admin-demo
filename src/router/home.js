
import Dashboard from "@/pages/homeModule";
import AsyncComponent from "@/components/asyncComponent";

const Layout = AsyncComponent(() => import("@/pages/layout"));
// import Layout from "@/pages/layout";



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
      },
    ],
  },
];

export default Home;
