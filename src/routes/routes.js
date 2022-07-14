import { NotificationContainer } from "react-notifications";
import { BrowserRouter, Navigate, Route, Routes, useParams,  } from "react-router-dom";
import Navbar from "../components/navbar";
import Layout from "../layout/main.layout";
import ParallaxController from "../middleware/parallax.controler";
import DevView from "../views/devmode.view";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return(
        <> 
        <BrowserRouter>
            <NotificationContainer />
            <Routes>
                <Route path="/" element={
                <ParallaxController >
                    <Layout/>
                </ParallaxController>
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