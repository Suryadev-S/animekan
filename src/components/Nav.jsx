import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import contextUrl from "../contextUrl";

const Nav = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const { setUrl } = useContext(contextUrl);
    const handleSearch = (e) => {
        e.preventDefault();
        setUrl(`https://api.jikan.moe/v4/anime?q=${query}&page=1`);
        navigate('/search');
    }
    const toggleSidebar = () => {
        setOpen(!open);
    }
    return (
        <>
            <nav className="nav">
                <div className="nav-text"><Link to={'/'}>Sanime</Link></div>
                <div className="nav-logo" onClick={toggleSidebar}><FaBars /></div>
                <form onSubmit={handleSearch}>
                    <input
                        type="search"
                        placeholder="anime"
                        className="input-bar"                        
                        onChange={(e) => { setQuery(e.target.value) }} />
                    <button className="btn" type="submit"> search </button>
                </form>
            </nav>
            <div className={`side-bar ${open ? "open" : 'close'}`}>
                <div className="nav-close" onClick={toggleSidebar}><MdClose /></div>
                <div className="nav-links">
                    <div><a tabIndex="1"><FaHouse /></a></div>
                    <div><a tabIndex="2"><FaUser /></a></div>
                    <div><a tabIndex="3"><FaMagnifyingGlass /></a></div>
                </div>
            </div>
        </>
    );
}

export default Nav;