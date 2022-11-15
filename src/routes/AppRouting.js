
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Intro from "../pages/intro";
import Login from "../pages/login";
import NotFound from "../pages/notFound";
import Pay from "../pages/pay";
import Test from "../pages/test";
import Validation from "../pages/validation";

const AppRouting = () => {

    return (
        <Routes>

            <Route path={"/validation-software"} element={<Home />} />
            <Route path={"/validation-software/cedula=:id&numeroDeMulta=:fine"} element={<Pay />} />
            <Route path={"/validation-software/login"} element={<Login />} />
            <Route path={"/validation-software/validation"} element={<Validation />} />
            <Route path={"/validation-software/curso/introduccion"} element={<Intro />} />
            <Route path={"/validation-software/curso/test"} element={<Test />} />

            <Route path={"*"} element={<NotFound />} />

        </Routes>
    );
}


export default AppRouting;