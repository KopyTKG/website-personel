import Layout from "../layout/main.layout";
import Parallax from "../middleware/parallax.controler";

export default () => {
    return(
        <> 
        <Parallax >
            <Layout />
        </Parallax>
        </>
    );
}