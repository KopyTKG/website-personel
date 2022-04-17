import Layout from "../layout/main.layout";
import ParallaxController from "../middleware/parallax.controler";

export default (props) => {
    return(
        <> 
        <ParallaxController >
            <Layout settings={props.settings}/>
        </ParallaxController>
        </>
    );
}