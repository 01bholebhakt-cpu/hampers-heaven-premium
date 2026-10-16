
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const products = [
  {
    id: "rose-gold",
    name: "The Rose Gold Hamper",
    price: 2499,
    category: "Premium Hampers",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=85",
    description: "An elegant hamper for meaningful celebrations.",
    badge: "BESTSELLER",
  },
  {
    id: "sweet-moments",
    name: "Sweet Moments Box",
    price: 1499,
    category: "Chocolate Gifts",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=85",
    description: "A sweet surprise for someone special.",
    badge: "POPULAR",
  },
  {
    id: "celebration",
    name: "The Celebration Hamper",
    price: 2999,
    category: "Celebration Gifts",
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=800&q=85",
    description: "Make their special day unforgettable.",
    badge: "",
  },
  {
    id: "little-love",
    name: "A Little Love Box",
    price: 999,
    category: "Thoughtful Gifts",
    image:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800&q=85",
    description: "A little gift with a lot of heart.",
    badge: "UNDER ₹1,000",
  },
  {
    id: "golden-glow",
    name: "Golden Glow Hamper",
    price: 1999,
    category: "Premium Hampers",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=85",
    description: "A polished gift for a memorable moment.",
    badge: "",
  },
  {
    id: "just-because",
    name: "Just Because Box",
    price: 1299,
    category: "Thoughtful Gifts",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=85",
    description: "No occasion needed to make someone smile.",
    badge: "",
  },
  {
    id: "choco-love",
    name: "Chocolate Love Hamper",
    price: 1799,
    category: "Chocolate Gifts",
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=800&q=85",
    description: "A chocolate-inspired gift for sweet occasions.",
    badge: "",
  },
  {
    id: "signature",
    name: "The Signature Collection",
    price: 3499,
    category: "Luxury Gifts",
    image:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800&q=85",
    description: "A statement gift for your most special occasions.",
    badge: "LUXURY PICK",
  },
];

type Product = (typeof products)[number];

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  description?: string;
};

const categories = [
  "All Gifts",
  "Premium Hampers",
  "Chocolate Gifts",
  "Celebration Gifts",
  "Thoughtful Gifts",
  "Luxury Gifts",
];

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Gifts");
  const [sort, setSort] = useState("featured");
  const [message, setMessage] = useState("");

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        category === "All Gifts" || product.category === category;

      const matchesSearch =
        `${product.name} ${product.category}`
          .toLowerCase()
          .includes(search.toLowerCase().trim());

      return matchesCategory && matchesSearch;
    });

    if (sort === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sort === "name") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [search, category, sort]);

  function addToBag(product: Product) {
    try {
      const saved = localStorage.getItem("hampers-heaven-cart");
      const cart: CartItem[] = saved ? JSON.parse(saved) : [];
      const existing = cart.find((item) => item.id === product.id);

      const updated = existing
        ? cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [
            ...cart,
            {
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              description: product.description,
              quantity: 1,
            },
          ];

      localStorage.setItem("hampers-heaven-cart", JSON.stringify(updated));
      setMessage(`${product.name} added to your bag.`);
    } catch {
      setMessage("Unable to update your bag. Please try again.");
    }
  }

  function addToWishlist(product: Product) {
    try {
      const saved = localStorage.getItem("hampers-heaven-wishlist");
      const wishlist: Product[] = saved ? JSON.parse(saved) : [];

      if (wishlist.some((item) => item.id === product.id)) {
        setMessage("This hamper is already in your wishlist.");
        return;
      }

      localStorage.setItem(
        "hampers-heaven-wishlist",
        JSON.stringify([...wishlist, product])
      );
      setMessage(`${product.name} saved to your wishlist.`);
    } catch {
      setMessage("Unable to update your wishlist. Please try again.");
    }
  }

  return (
    <>
      <div className="announcement">
        Thoughtful gifting, beautifully delivered
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand">
            <span className="brand-icon">H</span>
            <span>
              <span className="brand-name">Hampers Heaven</span>
              <span className="brand-tagline">GIFTS THAT FEEL LIKE LOVE</span>
            </span>
          </Link>

          <nav className="header-actions">
            <Link href="/about" className="icon-link">Our Story</Link>
            <Link href="/wishlist" className="icon-link">Wishlist ♡</Link>
            <Link href="/cart" className="icon-link">My Bag</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="page-hero">
          <p className="eyebrow">THE GIFT EDIT</p>
          <h1>Find their kind of lovely.</h1>
          <p>
            Thoughtfully selected gifts for birthdays, celebrations,
            anniversaries and all the little moments in between.
          </p>
        </section>

        <section className="section">
          <div className="container">
            <div className="form-card">
              <div className="form-group">
                <label htmlFor="product-search">Find a gift</label>
                <input
                  id="product-search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search hampers and gifts..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="product-category">Shop by category</label>
                <select
                  id="product-category"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="product-sort">Sort products</label>
                <select
                  id="product-sort"
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>

            <div className="section-heading">
              <p className="eyebrow">CURATED WITH LOVE</p>
              <h2>Gifts worth giving</h2>
              <p>{filteredProducts.length} gifts to explore</p>
            </div>

            {message && (
              <div className="notice" role="status" aria-live="polite">
                {message}
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="empty-state">
                <h2>No gifts found</h2>
                <p>Try another search or choose a different category.</p>
                <button
                  className="button"
                  onClick={() => {
                    setSearch("");
                    setCategory("All Gifts");
                  }}
                  type="button"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <article className="product-card" key={product.id}>
                    <Link
                      href={`/product/${product.id}`}
                      className="product-image"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      {product.badge && (
                        <span className="product-badge">{product.badge}</span>
                      )}
                    </Link>

                    <div className="product-info">
                      <p className="eyebrow">{product.category}</p>
                      <h3>
                        <Link href={`/product/${product.id}`}>
                          {product.name}
                        </Link>
                      </h3>
                      <p className="product-price">
                        ₹{product.price.toLocaleString("en-IN")}
                      </p>

                      <div className="product-actions">
                        <button
                          className="button"
                          type="button"
                          onClick={() => addToBag(product)}
                        >
                          Add to Bag
                        </button>
                        <button
                          className="button button-outline"
                          type="button"
                          aria-label={`Add ${product.name} to wishlist`}
                          onClick={() => addToWishlist(product)}
                        >
                          ♡
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Hampers Heaven</span>
          <Link href="/contact">Contact Us</Link>
        </div>
      </footer>
    </>
  );
}
