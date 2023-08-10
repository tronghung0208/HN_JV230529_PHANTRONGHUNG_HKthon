import React, { useState } from "react";
import ProductItem from "./ProductItem";
import CartTable from "./CartTable";

function Home() {
  const [products, setProduct] = useState([
    {
      id: 1,
      title: "Cola",
      quantity: 1,
      price: 6,
      image:
        "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg",
    },

    {
      quantity: 1,
      id: 3,
      title: "Sprite",
      price: 5,
      image: "https://images.ofix.com/product-image/s99509_2.jpg",
    },
    {
      quantity: 1,
      id: 4,
      title: "Ayran",
      price: 3,
      image:
        "https://konyamevlana.com/florya/wp-content/uploads/2020/12/sutas-ayran-285ml.jpg",
    },
    {
      quantity: 1,
      id: 5,
      title: "Salgam",
      price: 4,
      image: "http://esenlik.com.tr//images/prod/5704.jpg",
    },
    {
      quantity: 1,
      id: 6,
      title: "Cay",
      price: 3,
      image:
        "https://evidea.akinoncdn.com/products/2021/08/05/62421/e5bda9ce-91bf-453a-96e1-acea983efb2a.jpg",
    },
    {
      quantity: 1,
      id: 7,
      title: "Kahve",
      price: 10,
      image:
        "https://media.istockphoto.com/photos/turkish-coffee-foamy-picture-id510413268?k=20&m=510413268&s=612x612&w=0&h=llBhDOUbNHaQXc-ch7UQ_OIWkmJAJUzaf6oZavKUrmQ=",
    },
    {
      quantity: 1,
      id: 8,
      title: "Soda",
      price: 4,
      image: "http://esenlik.com.tr//images/prod/2928.jpg",
    },
    {
      quantity: 1,
      id: 9,
      title: "Bisiklet",
      price: 1000,
      image:
        "https://productimages.hepsiburada.net/s/37/375/10567819821106.jpg",
    },
    {
      quantity: 1,
      id: 11,
      title: "Bugatti Chiron",
      price: 2500000,
      image:
        "https://productimages.hepsiburada.net/s/34/375/10460429320242.jpg",
    },
    {
      quantity: 1,
      id: 12,
      title: "Iskender",
      price: 50,
      image:
        "https://img3.aksam.com.tr/imgsdisk/2020/10/31/t25_en-kolay-iskender-sosu-ta-744.jpg",
    },
    {
      quantity: 1,
      id: 13,
      title: "Lahmacun",
      price: 12,
      image:
        "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg",
    },
    {
      quantity: 1,
      id: 14,
      title: "Malikane",
      price: 2500000000,
      image:
        "https://foto.haberler.com/haber/2020/12/07/israil-de-4-odali-malikane-250-milyon-dolarda-13784975_amp.jpg",
    },
    {
      quantity: 1,
      id: 15,
      title: "Helicopter",
      price: 28750000,
      image:
        "https://image.elitema.com.tr/db_images/224/4/11/arimg1138-8---bell-429-exter%C4%B1or.jpg",
    },
    {
      quantity: 1,
      id: 16,
      title: "Luxury Yatch",
      price: 17500000,
      image: "https://d.neoldu.com/news/57966.jpg",
    },
    {
      quantity: 1,
      id: 17,
      title: "Limosine",
      price: 1000000,
      image:
        "https://img.paratic.com/dosya/2015/03/dunyanin-en-pahali-limuzinleri-1024x683.jpg",
    },
    {
      quantity: 1,
      id: 18,
      title: "Ada",
      price: 125000000,
      image: "https://icdn.ensonhaber.com/resimler/galeri/1_11195.jpg",
    },
    {
      quantity: 1,
      id: 22,
      title: "Stadium",
      price: 2500000,
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2020/06/01/thumbs_b_c_dc24a18cc233bd960f410911f5d39bf2.jpg",
    },
    {
      quantity: 1,
      id: 23,
      title: "Bitcoin",
      price: 60000,
      image:
        "https://www.cumhuriyet.com.tr/Archive/2021/9/27/1872247/kapak_141123.jpg",
    },
  ]);

  const [cartProduct, setCartProduct] = useState([]);
  const addToCart = (product) => {
    const existingProduct = cartProduct.find((item) => item.id === product.id);
    console.log(existingProduct);
    if (existingProduct) {
      existingProduct.quantity += 1;
      setCartProduct([...cartProduct]);
    } else {
      setCartProduct([...cartProduct, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantityProduct = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      const editQuantity = cartProduct.map((event) =>
        event.id === productId ? { ...event, quantity: newQuantity } : event
      );
      setCartProduct(editQuantity);
    }
  };

  const handleDelete = (selectProduct) => {
    const productNotDelete = cartProduct.filter(
      (item) => item.studentId !== selectProduct.studentId
    );
    setCartProduct(productNotDelete);
  };

  return (
    <div>
      {/* START HEADER */}
      <header className="header">
        <div className="container">
          <div className="header-menu">
            <div className="header-menu-1">
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Privacy Pollcy</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">Terms Of Use</a>
                </li>
              </ul>
            </div>
            <div className="header-menu-2">
              <ul>
                <li>
                  <i className="fa-brands fa-facebook" />
                </li>
                <li>
                  <i className="fa-brands fa-twitter" />
                </li>
                <li>
                  <i className="fa-brands fa-pinterest" />
                </li>
                <li>
                  <i className="fa-brands fa-instagram" />
                </li>
                <li>
                  <i className="fa-brands fa-youtube" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* END HEADER */}

      {/* START MAIN */}
      <main className="main">
        <section className="box-1">
          <div className="container">
            <nav className="nav-menu">
              <p>ACADEMY_SHOP</p>
              <ul className="menu-product">
                <li>
                  <a href="">HOME</a>
                </li>
                <li>
                  <a href="">ABOUT</a>
                </li>
                <li>
                  <a href="">PAGES</a>
                </li>
                <li>
                  <a href="">BLOG</a>
                </li>
                <li>
                  <a href="">CONTACT</a>
                </li>
              </ul>
              <ul className="menu-icon">
                <li>
                  <i className="fa-solid fa-user" />
                </li>
                <li>
                  <i className="fa-solid fa-magnifying-glass" />
                </li>
                <li>
                  <i className="fa-solid fa-cart-shopping" />
                </li>
              </ul>
            </nav>
          </div>
        </section>

        {/* START PRODUCT ITEM */}
        <ProductItem
          products={products}
          addToCart={addToCart}
          updateQuantityProduct={updateQuantityProduct}
          cartProduct={cartProduct}
        />
        {/* END PRODUCT ITEM */}
      </main>
      {/* END MAIN */}

      {/* START TABLE CART */}

      <CartTable
        handleDelete={handleDelete}
        cartProduct={cartProduct}
        updateQuantityProduct={updateQuantityProduct}
      />
      {/* END TABLE CART */}
      <footer className="footer">
        <div className="container">
          <div className="footer-menu">
            <div className="footer-menu-1">
              <div className="menu-first">
                <div>
                  <span>TECH</span>LIGHT
                </div>
                <ul>
                  <li>
                    Technology is constantly evolving, shaping the way we live,
                    work, and interact with the word around us.
                  </li>
                  <li>Advanced Hackathon 01</li>
                </ul>
              </div>
            </div>
            <div className="footer-menu-1">
              <div className="footer-menu-1-center">
                <p>MORE FROM US</p>
                <ul>
                  <li>Iphone</li>
                  <li>MacBook</li>
                  <li>Best Laptop</li>
                  <li>Laptop Coupons</li>
                </ul>
              </div>
            </div>
            <div className="footer-menu-1">
              <div className="footer-menu-1-center">
                <p>ABOUT US</p>
                <ul>
                  <li>Advertise</li>
                  <li>More About Us</li>
                  <li>Newsletter</li>
                  <li>Licensing</li>
                </ul>
              </div>
            </div>
            <div className="footer-menu-1">
              <div className="menu-last">
                <p>POLICIES</p>
                <ul>
                  <li>Privacy Policy</li>
                  <li>Terms of Use</li>
                  <li>Cookies</li>
                  <li>Copyright</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
