import React,{Suspense} from "react";
import { BrowserRouter, Navigate, Route, Routes,  } from "react-router-dom";
import Fallback from "../components/fallback";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const Layout = React.lazy(() => import("../layout/main.layout"))
    return(
        <> 
        <BrowserRouter>
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


/**
 * Generates a function comment for the given function body in a markdown code block with the correct language syntax.
 *
 * @return {JSX.Element} - The code block with the function comment.
 */
function Redirect() {
    return(<Navigate to="/" replace={true}/>);
}