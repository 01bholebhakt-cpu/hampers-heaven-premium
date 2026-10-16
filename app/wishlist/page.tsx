
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type WishlistItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
};

const STORAGE_KEY = "hampers-heaven-wishlist";

export default function WishlistPage() {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setItems(JSON.parse(saved));
    } catch {
      setItems([]);
    }

    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, ready]);

  function removeItem(id: string) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  function moveToCart(item: WishlistItem) {
    try {
      const savedCart = localStorage.getItem("hampers-heaven-cart");
      const cart: {
        id: string;
        name: string;
        price: number;
        image: string;
        quantity: number;
      }[] = savedCart ? JSON.parse(savedCart) : [];

      const existing = cart.find((product) => product.id === item.id);

      const updatedCart = existing
        ? cart.map((product) =>
            product.id === item.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          )
        : [...cart, { ...item, quantity: 1 }];

      localStorage.setItem(
        "hampers-heaven-cart",
        JSON.stringify(updatedCart)
      );

      removeItem(item.id);
      window.alert("Gift added to your cart!");
    } catch {
      window.alert("Unable to update your cart. Please try again.");
    }
  }

  if (!ready) {
    return (
      <main className="empty-state">
        <p>Loading your wishlist...</p>
      </main>
    );
  }

  return (
    <main>
      <div className="announcement">
        YOUR FAVOURITES, ALL IN ONE PLACE ♡
      </div>

      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="brand">
            <span className="brand-icon">♡</span>
            <span>
              <span className="brand-name">Hampers Heaven</span>
              <span className="brand-tagline">
                GIFTS THAT FEEL LIKE LOVE
              </span>
            </span>
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop All</Link>
            <Link href="/gift-boxes">Gift Boxes</Link>
            <Link href="/gift-finder">Gift Finder</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="header-actions">
            <Link
              href="/wishlist"
              className="icon-link"
              aria-label="Wishlist"
            >
              ♡
            </Link>
            <Link href="/cart" className="icon-link" aria-label="Cart">
              ♧
            </Link>
          </div>
        </div>
      </header>

      <section className="page-hero">
        <span className="eyebrow">THE GIFTS THAT CAUGHT YOUR EYE</span>
        <h1>Your <em>Wishlist.</em></h1>
        <p>Keep your favourite finds close until you're ready to gift.</p>
      </section>

      <section className="section">
        <div className="container">
          {items.length === 0 ? (
            <div className="empty-state">
              <div style={{ color: "#c78391", fontSize: 52 }}>♡</div>
              <h2>A little space for your favourite things.</h2>
              <p>
                Your wishlist is empty for now. Explore our collection and
                save the gifts that make you smile.
              </p>
              <Link href="/shop" className="button">
                DISCOVER GIFTS ↗
              </Link>
            </div>
          ) : (
            <>
              <div className="section-heading">
                <span className="eyebrow">SAVED WITH LOVE</span>
                <h2>
                  Your favourite <em>finds.</em>
                </h2>
              </div>

              <div className="product-grid">
                {items.map((item) => (
                  <article className="product-card" key={item.id}>
                    <Link
                      href={`/product/${item.id}`}
                      className="product-image"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                      />
                      <span className="product-badge">SAVED ♡</span>
                    </Link>

                    <div className="product-info">
                      <Link href={`/product/${item.id}`}>
                        <h3>{item.name}</h3>
                      </Link>

                      {item.description && <p>{item.description}</p>}

                      <div className="product-price">
                        ₹{item.price.toLocaleString("en-IN")}
                      </div>

                      <div className="product-actions">
                        <button
                          type="button"
                          className="button"
                          onClick={() => moveToCart(item)}
                        >
                          ADD TO CART
                        </button>

                        <button
                          type="button"
                          className="button button-outline"
                          onClick={() => removeItem(item.id)}
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-bottom">
            <Link href="/">Hampers Heaven ♡</Link>
            <Link href="/shop">Shop gifts</Link>
            <Link href="/cart">Your cart</Link>
            <span>© 2026 Hampers Heaven</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
