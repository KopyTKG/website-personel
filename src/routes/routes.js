import Layout from "../layout/main.layout";
import ParallaxController from "../middleware/parallax.controler";

export default () => {
    return(
        <> 
        <ParallaxController >
            <Layout />
        </ParallaxController>
        </>
    );
}