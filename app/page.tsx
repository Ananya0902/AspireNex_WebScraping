
import Searchbar from "@/components/Searchbar"
import Image from "next/image"
import { getAllProducts } from "@/lib/actions/index"
import ProductCard from "@/components/ProductCard"

const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center"> 
            
            <h1 className="head-text">
            Web Scraping Website Using Amazon Data
            </h1>

            <p className="mt-6">
            Develop a web scraping website that dynamically extracts and displays comprehensive product information from Amazon, including titles, prices, availability, images, and descriptions.
            </p>

            <Searchbar />
          </div>

          
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          trending items are here

          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home