import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../../components/Layout/MainLayout";
import React from "react";

const Home = React.lazy(() => import("../../components/Pages/components/Home/Home"))
const Blog = React.lazy(() => import("../../components/Pages/components/Blog/Blog"))
const BlogCard = React.lazy(() => import("../../components/Pages/components/BlogCard/BlogCard"))

export const ROUTES = {
    layout: "/",
    blog: "/blog",
    blogCard: ((id: null | number)  => (id ? `/blog/${id}` : "/blog/:blogCardId")),
    privacy: "/privacy",
    terms: "/terms",
    about: "/about",
    faq: "/faq"
}
// export const router = createBrowserRouter([
//     {
//         path: ROUTES.layout,
//         element: <MainLayout/>,
//         children: [
//             {
//                 index: true,
//                 element: <Home/>
//             },
//             {
//                 path: ROUTES.blog,
//                 element: <Blog/>
//             },
//             {
//                 path: ROUTES.blogCard(null),
//                 element: <BlogCard/>
//             }
//
//         ]
//
//     }
// ])
