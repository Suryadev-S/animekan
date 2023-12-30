import { Context } from "../Context";
import { useContext, useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Search = () => {
    const { url } = useContext(Context);
    const [data, setData] = useState([]);
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);

    const getResult = async (page = 1) => {
        const response = await axios.get(url + `page=${page}`);
        setData([...response.data.data]);
        setPages(() => {
            let list = [];
            for (let i = 1; i <= response.data.pagination.last_visible_page; i++) {
                list.push(i);
            }
            return [...list];
        })
        setTimeout(() => { setLoading(false) }, 3000);
    }
    useEffect(() => {
        getResult();
    }, [])
    return (
        <>
            <main className="py-4 bg-white">
                <div className="container">
                    {/* mobile */}
                    <button className="btn btn-outline-primary mb-3 btn-sm d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample">
                        Apply filter
                    </button>
                    {/* lap */}
                    <button className="btn btn-outline-primary mb-3 d-none d-md-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample">
                        Apply filter
                    </button>
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample"
                        aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Select filter</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <form>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Default radio
                                    </label>
                                </div>
                                <button className="btn btn-outline-primary" type="submit">apply</button>
                            </form>
                        </div>
                    </div>
                    {loading && <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>}
                    {!loading && <div className="row row-cols-2 row-cols-md-5 g-4">
                        {data.map((show, i) => {
                            return (
                                <div className="col" key={i}>
                                    <Link to={'/profile'} state={{ show: show }}>
                                        <div className="card">
                                            <img src={show.images.webp.image_url} className="card-img-top" alt={show.title} />
                                            <div className="card-body">
                                                <h5 className="card-title">{show.title_english}</h5>
                                                <p className="card-text">{show.title} | {show.title_japanese}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>}
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center mt-3">
                        {pages.map((item) => {
                            return (
                                <li className="page-item" key={item}><a className="page-link" href="#" onClick={() => {
                                    // e.preventDefault();
                                    getResult(item);
                                }}>{item}</a></li>
                            )
                        })}
                    </ul>
                </nav>
            </main>
        </>
    );
}

export default Search;