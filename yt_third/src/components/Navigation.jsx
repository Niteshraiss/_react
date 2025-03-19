import { Link } from "react-router-dom";
export default function Navigation() {
    return (
        <>
            <ul className='navbar'>
                <li>
                    <Link to="/index" className='navbar-items'>Home</Link>
                </li>
                <li>
                    <Link to="/products" className='navbar-items'>Products</Link>
                </li>
                <li>
                    <Link to="/profile" className='navbar-items'>Profile</Link>
                </li>
            </ul>
        </>
    )
}