
import Link from "next/link";

export default function ContactPage() {
  const whatsappMessage = encodeURIComponent(
    "Hello Hampers Heaven! I would like to enquire about your gift hampers."
  );

  return (
    <>
      <div className="announcement">
        A little love goes a long way
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
            <Link href="/shop" className="icon-link">Shop</Link>
            <Link href="/cart" className="icon-link">My Bag</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="page-hero">
          <p className="eyebrow">WE'RE HERE FOR YOU</p>
          <h1>Let's make gifting special.</h1>
          <p>
            Need help choosing a hamper, have a question about an
            order, or planning a special surprise? We'd love to hear
            from you.
          </p>
        </section>

        <section className="section">
          <div className="container">
            <div className="cart-layout">
              <div className="form-card">
                <p className="eyebrow">GET IN TOUCH</p>
                <h2>How can we help?</h2>
                <p>
                  The quickest way to reach us is through WhatsApp.
                  Send us your question and our team can help you
                  with your enquiry.
                </p>

                <a
                  className="button"
                  href={`https://wa.me/919122930001?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with us on WhatsApp →
                </a>

                <p className="muted">
                  WhatsApp: +91 91229 30001
                </p>

                <div className="notice">
                  <strong>Order enquiry?</strong>
                  <p>
                    Please share your order details when contacting
                    us so we can assist you more easily.
                  </p>
                </div>
              </div>

              <div className="cart-summary">
                <p className="eyebrow">A LITTLE HELP</p>
                <h2>Frequently asked questions</h2>

                <div className="section">
                  <h3>Can I choose a gift for a specific occasion?</h3>
                  <p>
                    Yes. Browse our collection or message us to
                    discuss your gifting requirements.
                  </p>
                </div>

                <div className="section">
                  <h3>How do I confirm an order?</h3>
                  <p>
                    Send your order enquiry through WhatsApp. We'll
                    confirm availability, delivery charges and the
                    final amount with you.
                  </p>
                </div>

                <div className="section">
                  <h3>Can I include a personal message?</h3>
                  <p>
                    Tell us your requirements when placing your
                    enquiry and we'll discuss the available options.
                  </p>
                </div>

                <Link href="/shop" className="button button-outline">
                  Explore Gift Hampers
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Hampers Heaven</span>
          <Link href="/">Home</Link>
        </div>
      </footer>
    </>
  );
}
