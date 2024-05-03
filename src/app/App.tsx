import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import {Provider} from "react-redux";
import store from "./store/store"
import {Icons} from "../shared/components/Icons/Icons";
import {capitalizeFirstLetter} from "../shared/utils";
import BlogCard from "../components/Pages/components/BlogCard/BlogCard";
import {ROUTES} from "./router/router";
import CheckboxBlock from "../shared/components/forms/Form/Checkbox/CheckboxBlock";
import Checkbox from "../shared/components/forms/Form/Checkbox/components/Checkbox";
import Label from "../shared/components/forms/Form/Label/Label";
import Container from "../shared/components/Container/Container";
import Button from "../shared/components/buttons/GreenButton/Button";
//React lazy-loading
const Home = React.lazy(() => import("../components/Pages/components/Home/Home"))
const Details = React.lazy(() => import("../components/Pages/components/Details/Details"))
const Favorites = React.lazy(() => import("../components/Pages/components/Favorites/Favorites"))
const About = React.lazy(() => import("../components/Pages/components/About/About"))
const FAQ = React.lazy(() => import("../components/Pages/components/Faq/Faq"))
const Catalog = React.lazy(() => import("../components/Pages/components/Catalog/Catalog"))
const Blog = React.lazy(() => import("../components/Pages/components/Blog/Blog"))
const Login = React.lazy(() => import("../components/Pages/components/Authorization/components/Login/Login"))
const Register = React.lazy(() => import("../components/Pages/components/Authorization/components/Register/Register"))
const ForgotPass = React.lazy(() => import("../components/Pages/components/Authorization/components/ForgotPass/ForgotPass"))
const PrivacyPolicy = React.lazy(() => import("../components/Pages/components/PrivacyPolicy/PrivacyPolicy"))
const Terms = React.lazy(() => import("../components/Pages/components/Terms/Terms"))
function App() {
    const location = useLocation();
    const title = capitalizeFirstLetter(location.pathname.replace("/", ""))
    React.useEffect(() => {
        document.title = location.pathname === "/" ? document.title : title
    }, [location.pathname])
  return (
      <Provider store={store}>
          <React.Suspense fallback={<Icons.loader/>}>
              <Container classnames={"eeee"}>
                  <Button theme={"white"} size={"big"}>Get a quote</Button>
              </Container>
              {/*<Routes>*/}
              {/*    <Route element={</>} path={ROUTES.layout}>*/}
              {/*        /!*<Route element={<Home/>} path={ROUTES.layout}/>*!/*/}
              {/*        /!*<Route element={<Details/>} path={"/details/:id"}/>*!/*/}
              {/*        /!*<Route element={<Favorites/>} path={"/favorites"}/>*!/*/}
              {/*        <Route element={<About/>} path={ROUTES.about}/>*/}
              {/*        <Route element={<FAQ/>} path={"/faq"}/>*/}
              {/*        /!*<Route element={<Catalog/>} path={"/catalog"}/>*!/*/}
              {/*        <Route element={<Blog/>} path={ROUTES.blog}/>*/}
              {/*        <Route element={<BlogCard/>} path={ROUTES.blogCard(null)}/>*/}
              {/*        /!*<Route element={<Login/>} path={"/login"}/>*!/*/}
              {/*        /!*<Route element={<Register/>} path={"/register"}/>*!/*/}
              {/*        /!*<Route element={<ForgotPass/>} path={"/forgot"}/>*!/*/}
              {/*        <Route element={<PrivacyPolicy/>} path={ROUTES.privacy}/>*/}
              {/*        <Route element={<Terms/>} path={ROUTES.terms}/>*/}
              {/*    </Route>*/}
              {/*</Routes>*/}
          </React.Suspense>
      </Provider>
  );
}

export default App;

