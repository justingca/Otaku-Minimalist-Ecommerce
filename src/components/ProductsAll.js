import { productList } from "../allProducts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import ProductDetails from "./ProductDetails"
import { useState } from "react"

const ProductsAll = () => {
    const [filteredProducts, setFilteredProducts] = useState(null);

    const handleSearch = (searchFilter) => {
        setFilteredProducts(
            productList.filter(product => 
                Object.values(product).some(val => 
                    String(val).toLowerCase().includes(searchFilter)    
                )    
            )
        )
    }

    const handleCategorySearch = (categ) => {
        setFilteredProducts(
            productList.filter(product => (
                product.category.includes(categ)
            ))
        )
    }

    return (
        <main>
            <div className="d-flex align-items-center justify-content-center">
                <h1>All Products</h1>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="products-search-options d-flex flex-column flex-md-row align-items-center justify-content-center gap-5">
                        <form>
                            <span className="products-search-label"><FontAwesomeIcon icon={faMagnifyingGlass}/></span>
                            <input type="text" 
                                className="products-search" 
                                placeholder="Search"
                                onChange={(ev) => handleSearch(ev.target.value)}    
                            />
                        </form>
                        <div className="products-categ-filter" onClick={(ev) => setFilteredProducts(null)}>
                            All
                        </div>
                        <div className="products-categ-filter" onClick={(ev) => handleCategorySearch("Nendroid Doll")}>
                            Nendroid Dolls
                        </div>
                        <div className="products-categ-filter" onClick={(ev) => handleCategorySearch("Posable Figure")}>
                            Posable Figures
                        </div>
                        <div className="products-categ-filter" onClick={(ev) => handleCategorySearch("Complete Figure")}>
                            Complete Figures
                        </div>
                    </div>
                </div>
            </div>

            {!filteredProducts && (
            <div className="container mt-5 mb-5">
                <div className="row featured-products">
                    {productList && productList.map(product => (
                        <ProductDetails product={product}/>
                    ))}
                </div>
            </div>
            )}
            
            <div className="container mt-5 mb-5">
                <div className="row featured-products">
                    {filteredProducts && filteredProducts.map(product => (
                        <ProductDetails product={product}/>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default ProductsAll