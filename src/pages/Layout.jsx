import { useState, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { Context } from "../Context";

const Layout = () => {
    const [query, setQuery] = useState('');
    const { setUrl } = useContext(Context);
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand text-white">
                        Navbar
                    </Link>
                    {/* mobile */}
                    <form className="d-flex d-sm-block d-md-none" role="search" onSubmit={(e) => {
                        e.preventDefault()
                        setUrl(`https://api.jikan.moe/v4/anime?q=${query}&`)
                        navigate('/search');
                    }}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={query} onChange={(e) => { setQuery(e.target.value) }} />
                        <button className="btn btn-outline-success btn-sm" type="submit">Search</button>
                    </form>
                    {/* lap */}
                    <form className="d-none d-md-flex" role="search" onSubmit={(e) => {
                        e.preventDefault();
                        setUrl(`https://api.jikan.moe/v4/anime?q=${query}&`)
                        navigate('/search');
                    }}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={query} onChange={(e) => { setQuery(e.target.value) }} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;