const NewsletterForm = () => {
    return (
        <div className="mt-5 p-0 m-0">
            <div className="row w-100 bg-dark m-0 text-white ">
                <div className="newsletter-container">
                    <h1>Newsletter</h1>
                    <span>Subscribe to receive news on our latest product and promos!</span>
                    <form className="newsletter-form mt-2">
                    <input placeholder="email"></input>
                    <button className="newsletter-btn">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewsletterForm