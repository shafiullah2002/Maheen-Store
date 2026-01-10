import React from "react";
import Product from "../Product/Product";
import banner from "../../assets/ProductsImages/homebanner.jpg";
import product1 from "../../assets/ProductsImages/product1.jpg";
import product2 from "../../assets/ProductsImages/product2.jpg";
import product3 from "../../assets/ProductsImages/product3.webp";
import product4 from "../../assets/ProductsImages/product4.jpg";
import product5 from "../../assets/ProductsImages/product5.webp";
import product6 from "../../assets/ProductsImages/product6.jpg";
import Mobile1 from "../../assets/ProductsImages/Mobile.webp";
import Mobile2 from "../../assets/ProductsImages/Mobile2.webp";
import Mobile3 from "../../assets/ProductsImages/Mobile3.webp";
import Watch1 from "../../assets/Watches/Watch1.webp";
import Watch2 from "../../assets/Watches/Watch2.webp";
import Watch3 from "../../assets/Watches/Watch3.webp";
import Laptop from "../../assets/Laptops/Laptop.webp";
import laptop1 from "../../assets/Laptops/Laptop1.webp";

function Home() {
  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Banner */}
      <img src={banner} alt="Banner" className="w-full mb-8" />

      <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
        ✨ Best Seller ✨
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Product
          id="12"
          title="Gaming Laptop"
          price={1409.99}
          rating={5}
          image={laptop1}
        />
        <Product
          id="2"
          title="Xbox Series X Controller"
          price={49.99}
          rating={3}
          image={product2}
        />
        <Product
          id="13"
          title="Dell Inspiron 15 Business Laptop"
          price={299.99}
          rating={4}
          image={Laptop}
        />
        <Product
          id="4"
          title="Samsung 49-Inch Gaming Monitor"
          price={26.99}
          rating={5}
          image={product3}
        />
        <Product
          id="5"
          title="Samsung Galaxy S25 FE"
          price={209.99}
          rating={3}
          image={Mobile1}
        />
        <Product
          id="6"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)"
          price={99.99}
          rating={2}
          image={product1}
        />
      </div>
      <div>
        <h2 className="text-3xl font-extrabold text-center mt-8 mb-6 text-gray-800">
        ✨ New Arrival ✨
      </h2>
      </div>
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Product
          id="1"
          title="Kenwood Stand Mixer"
          price={29.99}
          rating={4}
          image={product6}
        />
        <Product
          id="2"
          title="Xbox Series X Controller"
          price={49.99}
          rating={3}
          image={product2}
        />
        <Product
          id="3"
          title="Amazon Echo (4th Gen)"
          price={299.99}
          rating={4}
          image={product4}
        />
        <Product
          id="4"
          title="Samsung 49-Inch Gaming Monitor"
          price={26.99}
          rating={5}
          image={product3}
        />
        <Product
          id="5"
          title="PlayStation 5 DualSense Wireless Controller"
          price={209.99}
          rating={3}
          image={product5}
        />
        <Product
          id="6"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)"
          price={99.99}
          rating={2}
          image={product1}
        />
      </div>

      <div>
        <h2 className="text-3xl font-extrabold text-center mt-8 mb-6 text-gray-800">
        ✨ Smart Phone & Smart Watch✨
      </h2>
      </div>
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Product
          id="7"
          title="Samsung Galaxy S25 FE"
          price={3029.99}
          rating={5}
          image={Mobile1}
        />
        <Product
          id="8"
          title="Samsung Galaxy S25 Ultra"
          price={1149.99}
          rating={3}
          image={Mobile2}
        />
        <Product
          id="9"
          title="Unlocked Phones R24 Ultra"
          price={1099.99}
          rating={4}
          image={Mobile3}
        />
        <Product
          id="10"
          title="Smart Watch for Men"
          price={26.99}
          rating={5}
          image={Watch1}
        />
        <Product
          id="11"
          title="Amazfit Bip 6 Smart Watch"
          price={209.99}
          rating={4}
          image={Watch2}
        />
        <Product
          id="12"
          title="Smart Watch with Alexa Built-in"
          price={99.99}
          rating={3}
          image={Watch3}
        />
      </div>
    </div>
  );
}

export default Home;
