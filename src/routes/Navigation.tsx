import { BrowserRouter, Navigate, Routes, Route, NavLink} from "react-router-dom"
import logo from "../logo.svg";

export default function Navigation() {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="Logo" />
                    <ul>
                        <li>
                            <NavLink to="/home" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={ ({isActive}) => isActive ? 'nav-active' : '' }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Users</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="about" element={<h1>About page</h1>} />
                    <Route path="users" element={<h1>User page</h1>} />
                    <Route path="home" element={<h1>Homepage</h1>}/>
                    <Route path="/*" element={<Navigate to="/home" replace />}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
