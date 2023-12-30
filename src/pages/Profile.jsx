import { useLocation } from "react-router-dom";

const Profile = () => {
    const location = useLocation();
    const { show } = location?.state;
    return (
        <>
            <main className="py-4 bg-white">
                <div className="container">
                    <div className="card border-0">
                        <div className="row">
                            {/* text-center to center the image cap for mobile devices */}
                            <div className="col-md-4 text-center">
                                {/* mobile */}
                                <img src={show.images.jpg.large_image_url} className="img-fluid rounded d-sm-block d-md-none w-50" alt={show.title} />
                                {/* lap */}
                                <img src={show.images.jpg.large_image_url} className="img-fluid rounded d-none d-md-block" alt={show.title} />
                            </div>
                            <div className="col-md-4">
                                <div className="card-body">
                                    <h4 className="card-title">Synopsis</h4>
                                    <p className="card-text">{show.synopsis}</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-body">
                                    <h5 className="card-title">{show.title_english}</h5>
                                    <p className="card-text"><small className="text-body-secondary">{show.title_japanese} | {show.title}</small></p>
                                    <p className="card-text"><span className="text-primary">type :</span> {show.type}</p>
                                    <p className="card-text"><span className="text-primary">source :</span> {show.source}</p>
                                    <p className="card-text"><span className="text-primary">episodes :</span> {show.episodes}</p>
                                    <p className="card-text"><span className="text-primary">status :</span> {show.status}</p>
                                    <p className="card-text"><span className="text-primary">aired :</span> {new Date(show.aired.from).toDateString()} - {new Date(show.aired.to).toDateString()}</p>
                                    <p className="card-text"><span className="text-primary">duration :</span> {show.duration}</p>
                                    <p className="card-text"><span className="text-primary">rating :</span> {show.rating}</p>
                                    <p className="card-text"><span className="text-primary">score :</span> {show.score}</p>
                                    <p className="card-text"><span className="text-primary">rank :</span> {show.rank}</p>
                                    <p className="card-text"><span className="text-primary">popularity :</span> {show.popularity}</p>
                                    <p className="card-text">
                                        <iframe src={show.trailer.embed_url} title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Profile;