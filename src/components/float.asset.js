import { useNavigate } from "react-router";
import DevModSvg from "./svg/devmod.svg";



const DevMod = () => {
    let navigate = useNavigate();
    let DevMode = 0 
    const handleClick = () => {
        if(DevMode === 10 || localStorage.getItem("dev") === "true") {
            if(localStorage.getItem("dev") === "true") navigate("/dev", {replace: true});
            else {
                alert("DevMode enabled");
                localStorage.setItem("dev", "true")
            }
        } 
        else DevMode++;
    }
  return (
    <>
        <div className="floater" onClick={() => handleClick()}>
            <DevModSvg className="devmode"/>
        </div>
    </>
  )
}

export default DevMod;