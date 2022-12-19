import React from "react"

import { client } from "../lib/client"
import { Product, FooterBanner, HeroBanner } from "../components"

const Home = ({ products, banners }) => {
  return (
    <>
      <HeroBanner heroBanner={banners.length && banners[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={banners.length && banners[0]} />
    </>
  )
}

export const getServerSideProps = async () => {
  const prodQuery = '*[_type == "product"]'
  const bannerQuery = '*[_type == "banner"]'

  const products = await client.fetch(prodQuery)
  const banners = await client.fetch(bannerQuery)

  return {
    props: { products, banners },
  }
}

export default Home
