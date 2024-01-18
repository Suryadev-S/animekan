import { useLocation } from "react-router-dom";

const Profile = () => {
    const location = useLocation();
    const { anime } = location.state;
    return (
        <>
            <main>
                <section>
                    <div className="info">
                        <div className="card">
                            <img src={anime.images.webp.image_url} alt={anime.title_english} />
                            <div className="card-content">
                                <h1 className="card-title">{anime.title_english || anime.title}</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className="section-heading">{anime.title_english}</h1>
                            <table className="table">
                                <tr>
                                    <td>episodes</td>
                                    <td>{anime.episodes}</td>
                                </tr>
                                <tr>
                                    <td>status</td>
                                    <td>{anime.status}</td>
                                </tr>
                                <tr>
                                    <td>duration</td>
                                    <td>{anime.duration}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h1 className="section-heading">Synopsis</h1>
                        <section className="synopsis">
                            {anime.synopsis}
                        </section>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Profile;