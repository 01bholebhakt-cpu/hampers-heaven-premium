
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const products = [
  {
    id: "rose-gold",
    name: "The Rose Gold Hamper",
    category: "Birthday",
    price: 1499,
    oldPrice: 1999,
    badge: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=85",
    description: "A thoughtful collection wrapped in elegance.",
  },
  {
    id: "sweet-moments",
    name: "Sweet Moments Box",
    category: "Chocolate",
    price: 999,
    oldPrice: 1299,
    badge: "LOVED",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=700&q=85",
    description: "Little treats for someone truly special.",
  },
  {
    id: "celebration",
    name: "The Celebration Edit",
    category: "Birthday",
    price: 1899,
    oldPrice: 2499,
    badge: "SPECIAL",
    image:
      "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=700&q=85",
    description: "A beautiful surprise for big moments.",
  },
  {
    id: "little-love",
    name: "A Little Love Box",
    category: "Anniversary",
    price: 799,
    oldPrice: 999,
    badge: "GIFT PICK",
    image:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=700&q=85",
    description: "Small details. Big feelings.",
  },
  {
    id: "golden-glow",
    name: "Golden Glow Hamper",
    category: "Anniversary",
    price: 2199,
    oldPrice: 2699,
    badge: "PREMIUM",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=700&q=85",
    description: "An elevated gift for unforgettable moments.",
  },
  {
    id: "just-because",
    name: "Just Because Box",
    category: "Surprise",
    price: 699,
    oldPrice: 899,
    badge: "THOUGHTFUL",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=85",
    description: "A little surprise for an ordinary day.",
  },
  {
    id: "choco-love",
    name: "Chocolate Love Hamper",
    category: "Chocolate",
    price: 1299,
    oldPrice: 1599,
    badge: "SWEET PICK",
    image:
      "https://images.unsplash.com/photo-1548907040-4d42cfc2b6b2?auto=format&fit=crop&w=700&q=85",
    description: "A delicious way to show you care.",
  },
  {
    id: "signature",
    name: "The Signature Gift Box",
    category: "Premium",
    price: 2499,
    oldPrice: 2999,
    badge: "SIGNATURE",
    image:
      "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=700&q=85",
    description: "Our premium pick for your favourite person.",
  },
];

const categories = [
  "All Gifts",
  "Birthday",
  "Anniversary",
  "Chocolate",
  "Surprise",
  "Premium",
];

const whatsappLink = (name: string, price: number) =>
  "https://wa.me/919122930001?text=" +
  encodeURIComponent(
    `Hi Hampers Heaven! I'm interested in ${name} priced at ₹${price}. Please share more details.`
  );

export default function ShopPage() {
  const [category, setCategory] = useState("All Gifts");
  const [sort, setSort] = useState("featured");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        category === "All Gifts" || product.category === category;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    if (sort === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sort === "name") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [category, sort, search]);

  return (
    <main>
      <div className="announcement">
        A LITTLE LOVE GOES A LONG WAY &nbsp;♡
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
            <Link href="/about">Our Story</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="header-actions">
            <Link className="icon-link" href="/wishlist" aria-label="Wishlist">
              ♡
            </Link>
            <Link className="icon-link" href="/cart" aria-label="Cart">
              ♧
            </Link>
          </div>
        </div>
      </header>

      <section className="page-hero">
        <span className="eyebrow">A THOUGHTFUL LITTLE SOMETHING</span>
        <h1>Find their kind of <em>happy.</em></h1>
        <p>
          Curated gift boxes for birthdays, anniversaries and all the
          moments that deserve a little extra love.
        </p>
      </section>

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 25,
            }}
          >
            <div>
              <span className="eyebrow">THE COLLECTION</span>
              <h2 style={{ margin: "9px 0", fontSize: 28 }}>
                Our Gift Edit
              </h2>
              <p style={{ color: "#8b777b", fontSize: 12, margin: 0 }}>
                {filteredProducts.length} thoughtful gift
                {filteredProducts.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <input
                aria-label="Search gifts"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search gifts..."
                style={{
                  minWidth: 180,
                  padding: "12px 14px",
                  border: "1px solid #eadbd8",
                  background: "#fff",
                  color: "#38242b",
                }}
              />

              <select
                aria-label="Sort products"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                style={{
                  padding: "12px 14px",
                  border: "1px solid #eadbd8",
                  background: "#fff",
                  color: "#38242b",
                }}
              >
                <option value="featured">Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              marginBottom: 35,
            }}
          >
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={
                  category === item ? "button" : "button button-outline"
                }
                style={{ minHeight: 40, padding: "10px 15px" }}
              >
                {item}
              </button>
            ))}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <Link
                    href={`/product/${product.id}`}
                    className="product-image"
                    aria-label={`View ${product.name}`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                    <span className="product-badge">{product.badge}</span>
                  </Link>

                  <div className="product-info">
                    <Link href={`/product/${product.id}`}>
                      <h3>{product.name}</h3>
                    </Link>
                    <p>{product.description}</p>
                    <div className="product-price">
                      ₹{product.price.toLocaleString("en-IN")}
                      <del>
                        ₹{product.oldPrice.toLocaleString("en-IN")}
                      </del>
                    </div>

                    <div className="product-actions">
                      <Link
                        href={`/product/${product.id}`}
                        className="button"
                      >
                        VIEW GIFT ↗
                      </Link>
                      <Link
                        href={whatsappLink(product.name, product.price)}
                        target="_blank"
                        rel="noreferrer"
                        className="button button-outline"
                      >
                        ENQUIRE
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h2>No gifts found just yet.</h2>
              <p>Try another search or browse our full collection.</p>
              <button
                type="button"
                className="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All Gifts");
                }}
              >
                SHOW ALL GIFTS
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="newsletter">
        <span className="eyebrow" style={{ color: "#e9bac5" }}>
          NEED A LITTLE HELP?
        </span>
        <h2>Let's find their perfect gift.</h2>
        <p>Tell us who you're shopping for and we'll help you choose.</p>
        <Link href="/gift-finder" className="button button-outline">
          OPEN GIFT FINDER ↗
        </Link>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-bottom">
            <Link href="/">Hampers Heaven ♡</Link>
            <span>© 2026 Hampers Heaven. All rights reserved.</span>
            <Link href="/contact">Contact us</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
