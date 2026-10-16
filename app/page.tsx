
"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  {
    name: "Birthday Gifts",
    description: "Make their day unforgettable",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=700&q=85",
    href: "/shop",
  },
  {
    name: "Anniversary",
    description: "For your favourite love story",
    image:
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=700&q=85",
    href: "/shop",
  },
  {
    name: "Chocolate Hampers",
    description: "A little box of happiness",
    image:
      "https://images.unsplash.com/photo-1548907040-4d42cfc2b6b2?auto=format&fit=crop&w=700&q=85",
    href: "/shop",
  },
  {
    name: "Just Because",
    description: "Surprise them for no reason",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=85",
    href: "/shop",
  },
];

const products = [
  {
    id: "rose-gold",
    name: "The Rose Gold Hamper",
    description: "A thoughtful collection wrapped in elegance.",
    price: 1499,
    oldPrice: 1999,
    badge: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "sweet-moments",
    name: "Sweet Moments Box",
    description: "Little treats for someone truly special.",
    price: 999,
    oldPrice: 1299,
    badge: "LOVED",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "celebration",
    name: "The Celebration Edit",
    description: "A beautiful surprise for big moments.",
    price: 1899,
    oldPrice: 2499,
    badge: "SPECIAL",
    image:
      "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "little-love",
    name: "A Little Love Box",
    description: "Small details. Big feelings.",
    price: 799,
    oldPrice: 999,
    badge: "GIFT PICK",
    image:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=700&q=85",
  },
];

const benefits = [
  {
    icon: "♡",
    title: "Made with Love",
    text: "Thoughtful gifting, beautifully curated.",
  },
  {
    icon: "✧",
    title: "Premium Presentation",
    text: "Every detail designed to delight.",
  },
  {
    icon: "♧",
    title: "Easy Ordering",
    text: "Get help choosing your perfect gift.",
  },
  {
    icon: "✉",
    title: "Personal Touch",
    text: "Make every surprise feel like yours.",
  },
];

const whatsapp =
  "https://wa.me/919122930001?text=" +
  encodeURIComponent(
    "Hi Hampers Heaven! I would like to know more about your gift hampers."
  );

type Product = (typeof products)[number];

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
};

export default function HomePage() {
  const [message, setMessage] = useState("");

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
      setMessage(`${product.name} added to your bag!`);
    } catch {
      setMessage("Could not update your bag. Please try again.");
    }
  }

  function addToWishlist(product: Product) {
    try {
      const saved = localStorage.getItem("hampers-heaven-wishlist");
      const wishlist: Product[] = saved ? JSON.parse(saved) : [];

      if (wishlist.some((item) => item.id === product.id)) {
        setMessage("This gift is already in your wishlist.");
        return;
      }

      localStorage.setItem(
        "hampers-heaven-wishlist",
        JSON.stringify([...wishlist, product])
      );

      setMessage(`${product.name} saved to your wishlist!`);
    } catch {
      setMessage("Could not update your wishlist. Please try again.");
    }
  }

  return (
    <main>
      <div className="announcement">
        LITTLE THINGS. BIG FEELINGS. &nbsp;♡&nbsp; MAKE EVERY MOMENT SPECIAL
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
            <Link href="/shop">Gift Boxes</Link>
            <Link href="/gift-finder">Gift Finder</Link>
            <Link href="/about">Our Story</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="header-actions">
            <Link
              className="icon-link"
              href="/wishlist"
              aria-label="Wishlist"
              title="Wishlist"
            >
              ♡
            </Link>
            <Link
              className="icon-link"
              href="/cart"
              aria-label="Shopping cart"
              title="Shopping cart"
            >
              ♧
            </Link>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            THOUGHTFULLY CURATED · BEAUTIFULLY GIFTED
          </span>
          <h1>
            Some feelings
            <br />
            are best wrapped
            <br />
            in <em>love.</em>
          </h1>
          <p>
            Discover thoughtful gift hampers made for your favourite people.
            From little surprises to unforgettable celebrations, find a gift
            that says everything your heart wants to.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 25,
            }}
          >
            <Link href="/shop" className="button">
              EXPLORE THE COLLECTION ↗
            </Link>
            <Link href="/gift-finder" className="button button-outline">
              FIND THEIR GIFT
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 30,
              color: "#806c71",
              fontSize: 11,
            }}
          >
            <span style={{ color: "#b87884", fontSize: 20 }}>★★★★★</span>
            Thoughtful gifts for life&apos;s little moments
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1200&q=90"
            alt="Beautifully wrapped gift hamper"
            fetchPriority="high"
          />
          <div className="image-caption">
            A little something,
            <br />
            chosen with love. ♡
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">FIND YOUR KIND OF MAGIC</span>
            <h2>
              A gift for every <em>feeling.</em>
            </h2>
            <p>
              Because every person is different, and every moment deserves
              something special.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <Link
                href={category.href}
                className="category-card"
                key={category.name}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                />
                <div className="category-card-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#f8f0e9" }}>
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">THE CROWD FAVOURITES</span>
            <h2>
              Little boxes, <em>big happiness.</em>
            </h2>
            <p>
              Meet the hampers everyone loves to give — and even more to
              receive.
            </p>
          </div>

          {message && (
            <div className="notice" role="status" aria-live="polite">
              {message}
              {" "}
              <Link href="/cart">View bag</Link>
              {" · "}
              <Link href="/wishlist">View wishlist</Link>
            </div>
          )}

          <div className="product-grid">
            {products.map((product) => (
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
                    <button
                      type="button"
                      className="button"
                      onClick={() => addToBag(product)}
                    >
                      ADD TO BAG +
                    </button>

                    <button
                      type="button"
                      className="button button-outline"
                      onClick={() => addToWishlist(product)}
                      aria-label={`Add ${product.name} to wishlist`}
                      title="Add to wishlist"
                    >
                      ♡
                    </button>
                  </div>

                  <Link
                    href={
                      "https://wa.me/919122930001?text=" +
                      encodeURIComponent(
                        `Hi! I am interested in ${product.name} priced at ₹${product.price}.`
                      )
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                  >
                    ENQUIRE ON WHATSAPP ↗
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/shop" className="button button-outline">
              VIEW ALL GIFTS ↗
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="promo-banner">
            <div>
              <span className="eyebrow">NOT JUST A GIFT. A MEMORY.</span>
              <h2>
                Make them feel
                <br />
                <em>extra special.</em>
              </h2>
              <p>
                A birthday, an anniversary, a thank-you, or simply a reminder
                that someone matters. Find something that feels personal.
              </p>
              <Link href="/gift-finder" className="button">
                FIND THE PERFECT GIFT ↗
              </Link>
            </div>

            <img
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=85"
              alt="Gift wrapped with care"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="benefits">
            {benefits.map((benefit) => (
              <article className="benefit" key={benefit.title}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter">
        <span className="eyebrow" style={{ color: "#e9bac5" }}>
          A LITTLE LOVE IN YOUR INBOX
        </span>
        <h2>Good things are worth sharing.</h2>
        <p>
          Have something special in mind? We&apos;d love to help you find it.
        </p>
        <Link
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="button newsletter-form"
          style={{
            width: "fit-content",
            marginInline: "auto",
            borderColor: "white",
            background: "white",
            color: "#4d2633",
          }}
        >
          CHAT WITH US ON WHATSAPP ↗
        </Link>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link href="/" className="brand">
                <span className="brand-icon">♡</span>
                <span>
                  <span className="brand-name">Hampers Heaven</span>
                  <span className="brand-tagline">
                    GIFTS THAT FEEL LIKE LOVE
                  </span>
                </span>
              </Link>
              <p>
                Thoughtful gifting, beautiful details and little moments that
                stay with you long after the wrapping comes off.
              </p>
              <Link
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                LET&apos;S TALK GIFTS ↗
              </Link>
            </div>

            <div>
              <h3>Explore</h3>
              <div className="footer-links">
                <Link href="/shop">Shop All</Link>
                <Link href="/shop">Gift Boxes</Link>
                <Link href="/gift-finder">Gift Finder</Link>
                <Link href="/reviews">Customer Reviews</Link>
              </div>
            </div>

            <div>
              <h3>We&apos;re Here</h3>
              <div className="footer-links">
                <Link href="/about">Our Story</Link>
                <Link href="/contact">Contact Us</Link>
                <Link href="/faq">FAQs</Link>
                <Link href="/track-order">Track Order</Link>
              </div>
            </div>

            <div>
              <h3>Good to Know</h3>
              <div className="footer-links">
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms &amp; Conditions</Link>
                <Link href="/returns">Returns &amp; Refunds</Link>
                <Link href="/cart">Your Cart</Link>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Hampers Heaven. All rights reserved.</span>
            <span>Made with ♡ for thoughtful gifting.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
