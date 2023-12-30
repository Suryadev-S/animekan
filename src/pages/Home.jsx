import bg from '../assets/anime_wall2.jpg'
import { useEffect, useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Context } from '../Context'
import axios from 'axios'

const Home = () => {
    const [query, setQuery] = useState('');
    const [seasons, setSeasons] = useState([]); //array of arrays
    const [loading, setLoading] = useState(true);
    const { setUrl } = useContext(Context);
    const navigate = useNavigate();

    async function getResult() {
        const currentSeasonsArray = await axios.get('https://api.jikan.moe/v4/seasons/now?limit=5');
        // console.log(currentSeasonsArray.data);        
        setSeasons([...currentSeasonsArray.data.data]);
        setTimeout(() => { setLoading((prev) => !prev) }, 3000);
    }
    useEffect(() => {
        getResult();
    }, [])

    return (
        <>
            <header>
                <img src={bg} className="img-fluid d-sm-block d-md-none" alt="picture" />
                <div className="md_img d-none d-md-block">
                    <img src={bg} className="img-fluid" alt="picture" />
                </div>
                {/* mobile */}
                <div className="input-group input-group-sm search_box m-auto w-75 d-md-none d-sm-block">
                    <input type="text" className="form-control" placeholder="Search" aria-label="Search"
                        aria-describedby="button-addon2" value={query} onChange={(e) => { setQuery(e.target.value) }} />
                    <button className="btn btn-primary" type="button" id="button-addon2" onClick={() => {
                        setUrl(`https://api.jikan.moe/v4/anime?q=${query}&`)
                        navigate('/search');
                    }}>Search</button>
                </div>
                {/* lap */}
                <div className="input-group search_box m-auto w-50 d-none d-md-flex">
                    <input type="text" className="form-control" placeholder="Search" aria-label="Search"
                        aria-describedby="button-addon2" value={query} onChange={(e) => { setQuery(e.target.value) }} />
                    <button className="btn btn-primary" type="button" id="button-addon2" onClick={() => {
                        setUrl(`https://api.jikan.moe/v4/anime?q=${query}&`)
                        navigate('/search');
                    }}>Search</button>
                </div>
            </header>
            <main className='py-4 bg-white'>
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
                    <h2>Ongoing Seasons</h2>
                    {loading && <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>}
                    {!loading &&
                        <div className="row row-cols-2 row-cols-md-5 g-4">
                            {seasons.map((show, i) => {
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
                            <div className="col">
                                <button className='btn btn-primary' onClick={() => {
                                    setUrl('https://api.jikan.moe/v4/seasons/now?')
                                    navigate('/search');
                                }}>
                                    see more
                                </button>
                            </div>
                        </div>}
                </div>
            </main>
        </>
    );
}

export default Home;