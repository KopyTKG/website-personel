import React,{Suspense} from "react";
import { NotificationContainer } from "react-notifications";
import { BrowserRouter, Navigate, Route, Routes, useParams,  } from "react-router-dom";
import Navbar from "../components/navbar";
import Fallback from "../components/fallback";

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
                        <Layout/>
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
    const DevView = React.lazy(() => import("../views/devmode.view"))

    return(
        <>
            {localStorage.getItem("dev") === "true" && any === "dev"?
            <>
                <Navbar/>
                <Routes>
                        <Route path="/" element={
                            <Suspense fallback={<Fallback />}>
                                <DevView />
                            </Suspense>
                        } />
                        <Route path=":any/*" element={<Navigate to="/dev" replace={true}/>}/>
                </Routes>
            </>
            :
            <Navigate to="/" replace={true}/>
            }
        </>
    );
}