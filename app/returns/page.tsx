
import Link from "next/link";

export default function ReturnsPage() {
  return (
    <>
      <div className="announcement">
        We're here to make gifting right
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
            <Link href="/contact" className="icon-link">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="content-page container">
        <div className="page-hero">
          <p className="eyebrow">OUR CUSTOMER CARE</p>
          <h1>Returns &amp; Refunds</h1>
          <p>
            If something isn't right with your gift, please get in
            touch so we can review your concern.
          </p>
        </div>

        <section className="form-card">
          <p className="muted">Last updated: October 2026</p>

          <h2>1. Before placing an order</h2>
          <p>
            Please confirm the hamper contents, personalisation,
            delivery address, delivery charges and final price with
            us before confirming your order.
          </p>

          <h2>2. Cancellation requests</h2>
          <p>
            If you need to cancel an order, contact us as soon as
            possible. Whether cancellation is possible may depend
            on whether the order has already been prepared,
            personalised or dispatched. We will explain the
            applicable options before proceeding.
          </p>

          <h2>3. Damaged or incorrect items</h2>
          <p>
            If your hamper arrives damaged or contains an incorrect
            item, contact us promptly. Please share your order
            details and clear photographs of the packaging and
            product so we can review the issue.
          </p>

          <h2>4. Returns and replacements</h2>
          <p>
            Because gift hampers may contain perishable or
            personalised items, return eligibility can depend on
            the type and condition of the product. Contact us
            before sending anything back. We will communicate
            the available resolution based on the circumstances
            and applicable law.
          </p>

          <h2>5. Refunds</h2>
          <p>
            If a refund is approved, we will confirm the amount
            and expected processing method with you. Processing
            times may depend on the payment method and relevant
            service provider.
          </p>

          <h2>6. Non-returnable items</h2>
          <p>
            Personalised, perishable or specially prepared items
            may have limited return options, except where a
            remedy is required under applicable law.
          </p>

          <h2>7. How to request help</h2>
          <p>
            Contact us with your name, order details and a
            description of the issue. Please do not include
            passwords, OTPs or complete payment card details
            in your message.
          </p>

          <a
            href="https://wa.me/919122930001?text=Hello%20Hampers%20Heaven%2C%20I%20need%20help%20with%20an%20order."
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us on WhatsApp →
          </a>

          <p className="muted">
            Our final policies should reflect the actual services
            offered by the business and applicable consumer law.
          </p>
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
