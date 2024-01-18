import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import searchFunc from "../searchFunc";
import { FaArrowRight } from "react-icons/fa";
import contextUrl from "../contextUrl";
import urls from '../urls.json';

const Home = () => {
    const [dataArray, setDataArray] = useState([]);
    const { setUrl } = useContext(contextUrl);
    useEffect(() => {        
        async function populate() {
            for (const url of urls.home) {
                const data = await searchFunc(url);
                setDataArray(prevDataArray => [...prevDataArray, data.data]);
            }
        }
        populate();        
    }, [])
    return (
        <>
            <main>                
                <h1 className="seaction-heading">Seasonal Anime</h1>
                <section>
                    <div className="carousel">
                        { dataArray[0] && dataArray[0].map((item, index) => {
                            return (
                                <div className="card" key={index}>
                                    <Link to={'/profile'} state={{anime: item}}>
                                        <img src={item.images.webp.image_url} alt={item.title_english} className="poster" />
                                        <div className="card-content">
                                            <h1 className="card-title">{item.title_english}</h1>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                        <div>
                            <div className="action-button" onClick={() => {
                                setUrl('https://api.jikan.moe/v4/seasons/now?page=1')
                            }}>
                                <Link to={'/search'}>
                                    <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <h1 className="seaction-heading">top anime</h1>
                <section>
                    <div className="carousel">
                        { dataArray[1] && dataArray[1].map((item, index) => {
                            return (
                                <div className="card" key={index}>
                                    <Link to={'/profile'} state={{anime: item}}>
                                        <img src={item.images.webp.image_url} alt={item.title_english} className="poster" />
                                        <div className="card-content">
                                            <h1 className="card-title">{item.title_english}</h1>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                        <div>
                            <div className="action-button" onClick={() => {
                                setUrl("https://api.jikan.moe/v4/top/anime?page=1")
                            }}>
                                <Link to={'/search'}>
                                    <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <h1 className="seaction-heading">Schedules</h1>
                <section>
                    <div className="carousel">
                        { dataArray[2] && dataArray[2].map((item, index) => {
                            return (
                                <div className="card" key={index}>
                                    <Link  to={'/profile'} state={{anime: item}}>
                                        <img src={item.images.webp.image_url} alt={item.title_english} className="poster" />
                                        <div className="card-content">
                                            <h1 className="card-title">{item.title_english}</h1>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                        <div>
                            <div className="action-button" onClick={() => {
                                setUrl('https://api.jikan.moe/v4/schedules')
                            }}>
                                <Link to={'/search'}>
                                    <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;