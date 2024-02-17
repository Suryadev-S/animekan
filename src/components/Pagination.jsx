import searchFunc from "../searchFunc";
import { NavLink } from "react-router-dom";
import contextUrl from "../contextUrl";
import { useContext } from "react";

const Pagination = ({ pages }) => {
    const { url, setUrl } = useContext(contextUrl);
    const handleSearchPage = (page) => {
        const prevUrl = url;
        const newUrl = prevUrl.replace(prevUrl.slice(prevUrl.search('page=')), `page=${page}`);
        setUrl(newUrl);
    }
    return (
        <>
            <nav className="pagination-bar">
                {pages.map((page) => (
                    <NavLink
                        to={`/search/${page}`}
                        key={page}
                        onClick={() => handleSearchPage(page)}
                        className={({ isActive }) => isActive ? "active" : ""}>
                        {page}
                    </NavLink>
                ))}
            </nav>
        </>
    );
}

export default Pagination;