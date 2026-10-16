
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const STORAGE_KEY = "hampers-heaven-cart";

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
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

  function updateQuantity(id: string, quantity: number) {
    setItems((current) =>
      current
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(id: string) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const message = [
    "Hi Hampers Heaven! I'd like to enquire about these gifts:",
    "",
    ...items.map(
      (item) =>
        `${item.name} x ${item.quantity} = ₹${(
          item.price * item.quantity
        ).toLocaleString("en-IN")}`
    ),
    "",
    `Estimated subtotal: ₹${subtotal.toLocaleString("en-IN")}`,
    "",
    "Please confirm availability, delivery charges and final total.",
  ].join("\n");

  const whatsappUrl =
    "https://wa.me/919122930001?text=" + encodeURIComponent(message);

  if (!ready) {
    return (
      <main className="empty-state">
        <p>Loading your cart...</p>
      </main>
    );
  }

  return (
    <main>
      <div className="announcement">
        YOUR LITTLE BOX OF HAPPINESS ♡
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
            <Link href="/wishlist" className="icon-link" aria-label="Wishlist">
              ♡
            </Link>
            <Link href="/cart" className="icon-link" aria-label="Cart">
              ♧
            </Link>
          </div>
        </div>
      </header>

      <section className="page-hero">
        <span className="eyebrow">A LITTLE SOMETHING FOR SOMEONE</span>
        <h1>Your Gift <em>Bag.</em></h1>
        <p>Every thoughtful surprise starts somewhere.</p>
      </section>

      <section className="section">
        <div className="container">
          {items.length === 0 ? (
            <div className="empty-state">
              <div style={{ fontSize: 52, color: "#c78391" }}>♡</div>
              <h2>Your cart is waiting for a little love.</h2>
              <p>
                You haven't added any gifts yet. Explore the collection and
                find something special.
              </p>
              <Link href="/shop" className="button">
                EXPLORE GIFTS ↗
              </Link>
            </div>
          ) : (
            <div className="cart-layout">
              <div>
                <p style={{ color: "#8b777b", fontSize: 13 }}>
                  {items.reduce((sum, item) => sum + item.quantity, 0)} item(s)
                  in your gift bag
                </p>

                {items.map((item) => (
                  <article className="cart-item" key={item.id}>
                    <Link href={`/product/${item.id}`}>
                      <img src={item.image} alt={item.name} />
                    </Link>

                    <div>
                      <Link href={`/product/${item.id}`}>
                        <h3 style={{ margin: "0 0 8px", fontSize: 19 }}>
                          {item.name}
                        </h3>
                      </Link>
                      <p style={{ color: "#713b4a", fontWeight: 700 }}>
                        ₹{item.price.toLocaleString("en-IN")}
                      </p>

                      <div className="quantity-control">
                        <button
                          type="button"
                          aria-label={`Decrease ${item.name} quantity`}
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          aria-label={`Increase ${item.name} quantity`}
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        style={{
                          display: "block",
                          marginTop: 12,
                          padding: 0,
                          border: 0,
                          background: "transparent",
                          color: "#8b777b",
                          fontSize: 11,
                          textDecoration: "underline",
                        }}
                      >
                        Remove
                      </button>
                    </div>

                    <strong>
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </strong>
                  </article>
                ))}

                <div style={{ marginTop: 25 }}>
                  <Link href="/shop" className="button button-outline">
                    ← CONTINUE SHOPPING
                  </Link>
                </div>
              </div>

              <aside className="cart-summary">
                <h2>Order Summary</h2>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString("en-IN")}</span>
                </div>

                <div className="summary-row">
                  <span>Delivery</span>
                  <span>Confirm on enquiry</span>
                </div>

                <div className="summary-row summary-total">
                  <span>Estimated total</span>
                  <span>₹{subtotal.toLocaleString("en-IN")}</span>
                </div>

                <p
                  style={{
                    color: "#8b777b",
                    fontSize: 11,
                    lineHeight: 1.8,
                    marginTop: 18,
                  }}
                >
                  Delivery charges and availability will be confirmed before
                  your order is finalised.
                </p>

                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  ENQUIRE ON WHATSAPP ↗
                </Link>

                <button
                  type="button"
                  className="button button-outline"
                  style={{ width: "100%", marginTop: 10 }}
                  onClick={() => {
                    if (
                      window.confirm("Remove all items from your gift bag?")
                    ) {
                      setItems([]);
                    }
                  }}
                >
                  CLEAR GIFT BAG
                </button>
              </aside>
            </div>
          )}
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-bottom">
            <Link href="/">Hampers Heaven ♡</Link>
            <Link href="/shop">Shop gifts</Link>
            <Link href="/contact">Contact us</Link>
            <span>© 2026 Hampers Heaven</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
