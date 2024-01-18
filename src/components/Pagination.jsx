import searchFunc from "../searchFunc";
import { Link } from "react-router-dom";
import contextUrl from "../contextUrl";
import { useContext } from "react";

const Pagination = ({ pages }) => {
    const {url, setUrl} = useContext(contextUrl);
    const handleSearchPage = (page) => {
        const prevUrl = url;
        const newUrl = prevUrl.replace(prevUrl.slice(prevUrl.search('page=')),`page=${page}`);
        setUrl(newUrl);
    }
    return (
        <>
             <nav className="pagination-bar">
                {pages.map((page) => (
                    <Link
                        to={'/search'}
                        key={page}
                        onClick={()=> handleSearchPage(page)}>{page}</Link>
                ))}
            </nav>
        </>
    );
}

export default Pagination;