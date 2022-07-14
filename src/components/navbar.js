import {LogoutIcon} from "@heroicons/react/outline"
import { useNavigate } from "react-router";


const Navbar = () => {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("dev");
        navigate("/" , {replace: true});
    }
  return (
    <>
        <div className="navbar">
            <div></div>
            <div className="title">
                DEVELOPMENT VIEW
            </div>
            <div className="logout" onClick={() => handleLogout()}>
                <LogoutIcon />
            </div>
        </div>
    </>
  )
}

export default Navbar