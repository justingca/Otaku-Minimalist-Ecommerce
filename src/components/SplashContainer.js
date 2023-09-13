import maiSplashImage from "../assets/mai.jpg";
import zeroTwoSplashImage from "../assets/zerotwo.jpg";
import narutoSplashImage from "../assets/naruto.jpg";
import ichigoSplashImage from "../assets/ichigo.jpg";
import { Link } from "react-router-dom";

const SplashContainer = () => {
    return (
        <div className="container splash-container d-flex justify-content-center" id="home">
            <div className="row d-flex">
                <div className="col-6 col-md-6 p-0 overlay-container">
                    <Link to="/products/all"><div className="splash-overlay"></div></Link>
                    <img className="bunny-splash" src={maiSplashImage} alt=""/>
                    <div className="splash-text">Your Favorite Anime Characters</div>
                </div>
                <div className="col-6 col-md-3 p-0 overlay-container">
                    <a href="#featured"><div className="splash-overlay"></div></a>
                    <img className="zero-splash" src={zeroTwoSplashImage} alt=""/>
                    <div className="splash-text">Featured Products</div>
                </div>
                <div className="col-12 col-md-3 d-flex flex-row flex-md-column p-0">
                    <div className="overlay-container">
                    <a href="#new-products"><div className="splash-overlay"></div></a>
                        <img className="naruto-splash" src={narutoSplashImage} alt=""/>
                        <div className="splash-text">New Arrivals</div>
                    </div>
                    <div className="overlay-container">
                    <div className="splash-overlay"></div>
                        <img className="bleach-splash" src={ichigoSplashImage} alt=""/>
                        <div className="splash-text">Pre-Orders</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SplashContainer
