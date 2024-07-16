import React from 'react'
import JustForYouSection from '@/components/MarketPlace/justForYouSection'
import OurProductsSection from '@/components/MarketPlace/productsSection'
import ProductPage from '@/components/MarketPlace/sellingAsBusiness'
import ReadyToShipProducts from '@/components/MarketPlace/readyToShipProducts'
import CustomizableProduct from '@/components/MarketPlace/customizableProducts'
import ProductGrid from '@/components/MarketPlace/productGrid'
import Footer from '@/components/MarketPlace/footer';
import CommonNavBar from '@/components/CommonNavBar'

const page = () => {
    return (
        <div>
            <CommonNavBar />
            <JustForYouSection />
            <OurProductsSection />
            <ProductPage />
            <ProductGrid />
            <Footer />
        </div>
    )
}

export default page
