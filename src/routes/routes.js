import React,{Suspense} from "react";
import { NotificationContainer } from "react-notifications";
import { BrowserRouter, Navigate, Route, Routes, useParams,  } from "react-router-dom";
import Navbar from "../components/navbar";
import ParallaxController from "../middleware/parallax.controler";
import Fallback from "../components/fallback";
import DevView from "../views/devmode.view";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const Layout = React.lazy(() => import("../layout/main.layout"))
    return(
        <> 
        <BrowserRouter>
            <NotificationContainer />
            <Routes>
                <Route path="/" element={
                    <Suspense fallback={<Fallback />}>
                        <ParallaxController >
                                <Layout/>
                        </ParallaxController>
                    </Suspense>
                }>
                </Route>
                <Route path=":any/*" element={<Redirect />}/>
            </Routes>
        </BrowserRouter>
        </>
    );
}


const Redirect = () => {
    let {any} = useParams();
    return(
        <>
            {localStorage.getItem("dev") === "true" && any === "dev"?
            <>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<DevView />} >
                    </Route>
                    <Route path=":any/*" element={<Navigate to="/dev" replace={true}/>}/>
                </Routes>
            </>
            :
            <Navigate to="/" replace={true}/>
            }
        </>
    );
}