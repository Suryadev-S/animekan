import Pagination from "../components/Pagination";
import searchFunc from "../searchFunc";
import { useEffect, useState } from "react";
import contextUrl from "../contextUrl";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Searched = () => {
    const { url } = useContext(contextUrl);
    const [dataObject, setDataObject] = useState({
        dataArray: [],
        pagination: '' 
    });
    useEffect(() => {
        async function populate() {
            const response = await searchFunc(url);
            setDataObject({
                ...dataObject,
                dataArray: [...response.data],
                pagination: response.pagination.last_visible_page
            });
        }
        populate();
    }, [url]);

    const pages = Array.from({ length: dataObject.pagination }, (_, i) => i + 1);
    return (
        <>
            <main>
                <section className="result-grid">
                    {dataObject.dataArray && dataObject.dataArray.map((item, index) => {
                        return (
                            <div className="card" key={index}>
                                <Link to={'/profile'} state={{anime: item}}>
                                    <img src={item.images.webp.image_url} alt={item.title} className="poster" />
                                    <div className="card-content">
                                        <h1 className="card-title">{item.title}</h1>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </section>
                <Pagination pages={pages} />
            </main>
        </>
    );
}

export default Searched;