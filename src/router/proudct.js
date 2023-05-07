
import ProductList from "@/pages/productModule";
import ProductDetail from "@/pages/productModule/productDetail";
import AsyncComponent from "@/components/asyncComponent";

const Layout = AsyncComponent(() => import("@/pages/layout"));
// import Layout from "@/pages/layout";



/**
 * @AsyncComponent 懒加载组件
 * @exact 绝对匹配，这个在里面父组件一定不要加上,不然后面的子路由根本就匹配不到
 * @path 路径
 * @component 组件名称
 */
const Product = [
  {
    path: "/product",
    component: Layout,
    meta: { title: "商品中心" },
    children: [
      {
        path: "/product/productList",
        name: "productList",
        component: ProductList,
        meta: { title: "商品列表" },
      },
      {
        path: "/product/productDetail",
        name: "productDetail",
        // hidden: true,
        component: ProductDetail,
        meta: { title: "商品详情页" },
      },
    ],
  },
];

export default Product;
