import { productList } from "../allProducts";
import NewsletterForm from "../components/NewsletterForm";
import ProductDetails from "../components/ProductDetails";
import SplashContainer from "../components/SplashContainer";

import demonSlayerPromo from "../assets/demonslayerhomepage.jpg";
import jujutsuPromo from "../assets/jujutsuhomepage.jpg";


const HomePage = () => {
    const newestProducts = productList.filter(product => product.category === "Complete Figure");
    const featuredProducts = productList.filter(product => product.id < 9);
    
    return (
        <main>
            <SplashContainer/>

            <div className="container mt-5" id="featured">
                <div className="row">
                    <h1>Featured Products</h1>
                </div>
                <div className="row featured-products">
                    {featuredProducts && featuredProducts.map(product => (
                        <ProductDetails product={product}/>
                    ))}
                </div>
            </div>

            <div className="container mt-5">
                <div className="row d-flex flex-column-reverse flex-md-row">
                    <div className="col-12 col-md-6 promo-left">
                        <h2>Demon Slayer Figures</h2>
                        <h3>- 鬼滅の刃 -</h3>
                        <span>View our hottest products featuring characters from the latest movie!</span>
                        <div className="promo-btn">Shop Now</div>
                    </div>
                    <div className="col-12 col-md-6 promo-right">
                        <img src={demonSlayerPromo} alt=""/>
                    </div>
                </div>
            </div>

            <div className="container mt-5" id="new-products">
                <div className="row">
                    <h1>Newest Releases</h1>
                </div>
                <div className="row featured-products">
                    {newestProducts && newestProducts.map(product => (
                        <ProductDetails product={product}/>
                    ))}
                </div>
            </div>

            <div className="container mt-5">
                <div className="row d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6 promo-left">
                        <img src={jujutsuPromo} alt=""/>
                    </div>
                    <div className="col-12 col-md-6 promo-right">
                        <h2>Jujutsu Kaisen Figures</h2>
                        <h3>- 呪術廻戦 -</h3>
                        <span>View our hottest products featuring characters from the latest movie!</span>
                        <div className="promo-btn">Shop Now</div>
                    </div>
                </div>
            </div>

            <NewsletterForm/>
                       
        </main>
        
        
    )
}

export default HomePage;