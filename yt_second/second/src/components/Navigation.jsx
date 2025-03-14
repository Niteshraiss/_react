import { Link } from "react-router-dom";
export default function Navigation() {
    return (
        <>
            <ul className='navbar'>
                <li>
                    <Link to="/home" className='navbar-items'>Home</Link>
                </li>
                <li>
                    <Link to="/products" className='navbar-items'>Products</Link>
                </li>
            </ul>
        </>
    )
}