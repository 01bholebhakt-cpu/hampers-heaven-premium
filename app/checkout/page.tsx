
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

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("hampers-heaven-cart");
      if (saved) setCart(JSON.parse(saved));
    } catch {
      setCart([]);
    }
    setLoaded(true);
  }, []);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function placeOrder(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty. Please add a hamper first.");
      return;
    }

    const orderLines = cart
      .map(
        (item) =>
          `• ${item.name} x ${item.quantity} = ₹${(
            item.price * item.quantity
          ).toLocaleString("en-IN")}`
      )
      .join("\n");

    const message = `Hello Hampers Heaven! I'd like to place an order.

CUSTOMER DETAILS
Name: ${name}
Phone: ${phone}
Address: ${address}
City: ${city}
PIN Code: ${pincode}
${notes ? `Gift notes: ${notes}\n` : ""}
ORDER DETAILS
${orderLines}

Subtotal: ₹${subtotal.toLocaleString("en-IN")}

Please confirm product availability, delivery charges and the final amount.`;

    const whatsappUrl = `https://wa.me/919122930001?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  if (!loaded) {
    return (
      <main className="content-page container">
        <p>Preparing your checkout...</p>
      </main>
    );
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
            <Link href="/shop" className="icon-link">
              Continue shopping
            </Link>
            <Link href="/cart" className="icon-link">
              My bag
            </Link>
          </nav>
        </div>
      </header>

      <main className="content-page container">
        <div className="page-hero">
          <p className="eyebrow">ALMOST YOURS</p>
          <h1>Checkout</h1>
          <p>Share your details and confirm your order with us on WhatsApp.</p>
        </div>

        {cart.length === 0 ? (
          <div className="empty-state">
            <h2>Your bag is waiting for something special</h2>
            <p>Add a beautiful hamper before proceeding to checkout.</p>
            <Link href="/shop" className="button">
              Explore Hampers
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <section className="form-card">
              <h2>Delivery details</h2>
              <p className="muted">
                Enter your details so we can help arrange your delivery.
              </p>

              <form onSubmit={placeOrder}>
                <div className="form-group">
                  <label htmlFor="name">Full name *</label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Mobile number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    pattern="[0-9+\-\s()]{10,16}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your contact number"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Full delivery address *</label>
                  <textarea
                    id="address"
                    name="address"
                    autoComplete="street-address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="House number, street, area"
                    rows={3}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="city">City / Town *</label>
                  <input
                    id="city"
                    name="city"
                    autoComplete="address-level2"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Your city"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="pincode">PIN code *</label>
                  <input
                    id="pincode"
                    name="pincode"
                    autoComplete="postal-code"
                    inputMode="numeric"
                    pattern="[0-9]{6}"
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="6-digit PIN code"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="notes">
                    Gift message or special request (optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add a personal message or delivery request"
                    rows={3}
                  />
                </div>

                <button type="submit" className="button">
                  Confirm on WhatsApp →
                </button>

                <p className="muted">
                  This sends your order request to WhatsApp. Your order is not
                  confirmed until our team responds.
                </p>
              </form>
            </section>

            <aside className="cart-summary">
              <h2>Your order</h2>

              {cart.map((item) => (
                <div className="summary-row" key={item.id}>
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>
                    ₹
                    {(item.price * item.quantity).toLocaleString("en-IN")}
                  </span>
                </div>
              ))}

              <div className="summary-row summary-total">
                <strong>Subtotal</strong>
                <strong>₹{subtotal.toLocaleString("en-IN")}</strong>
              </div>

              <p className="muted">
                Delivery charges and final pricing will be confirmed on
                WhatsApp.
              </p>

              <Link href="/cart" className="button button-outline">
                Edit my bag
              </Link>
            </aside>
          </div>
        )}
      </main>

      <footer className="site-footer">
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Hampers Heaven</span>
          <Link href="/">Back to home</Link>
        </div>
      </footer>
    </>
  );
}
