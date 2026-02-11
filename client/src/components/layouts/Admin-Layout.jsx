import { Navigate, NavLink, Outlet } from "react-router-dom";
import { FaUser, FaRegListAlt, FaHome} from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { useAuth } from "../../store/auth";

export const AdminLayout = () => {
    const { user, isLoading } = useAuth();
    console.log("Admin Layout", user);  

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (!user.isAdmin) {
        return <Navigate to="/" />;
    }
    


    return (
        <>
            <header>
                <div>
                    <nav>
                        <ul>
                            <li> <NavLink to="/admin/users" > <FaUser /> users</NavLink> </li>
                            <li> <NavLink to="/admin/contacts" ><MdMessage /> contacts</NavLink></li>
                            <li> <NavLink to="/admin/services" ><FaRegListAlt /> services</NavLink></li>
                            <li> <NavLink to="/" ><FaHome /> Home</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    )
}