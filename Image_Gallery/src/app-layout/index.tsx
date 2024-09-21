import { Outlet } from "react-router-dom";
import Navbar from "../pages/navbar";

const AppLayout=()=>{
return(
    <div>

<Navbar/>
<Outlet/>
    </div>
);
}
export default AppLayout;
