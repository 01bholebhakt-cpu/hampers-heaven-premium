
import Link from "next/link";

export default function TermsPage() {
  return (
    <>
      <div className="announcement">
        Thoughtful gifts, a delightful experience
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
          <p className="eyebrow">THE IMPORTANT DETAILS</p>
          <h1>Terms &amp; Conditions</h1>
          <p>
            Please read these terms before submitting an order enquiry
            through Hampers Heaven.
          </p>
        </div>

        <section className="form-card">
          <p className="muted">Last updated: October 2026</p>

          <h2>1. About this website</h2>
          <p>
            Hampers Heaven showcases gift hampers and gifting ideas.
            By using this website, you agree to use it lawfully and
            respectfully.
          </p>

          <h2>2. Product information</h2>
          <p>
            We aim to display products, descriptions, photographs and
            prices accurately. Actual packaging, colours or product
            contents may vary. Product availability and final pricing
            must be confirmed with us.
          </p>

          <h2>3. Order enquiries</h2>
          <p>
            Submitting an enquiry through WhatsApp does not automatically
            confirm an order. An order becomes confirmed only after we
            communicate acceptance and agree on the applicable details.
          </p>

          <h2>4. Prices and payment</h2>
          <p>
            Prices displayed on the website may not include delivery
            charges. The final amount, payment method and any applicable
            charges will be communicated before an order is confirmed.
            Do not make payments until the details have been verified.
          </p>

          <h2>5. Delivery</h2>
          <p>
            Delivery availability, estimated timelines and charges depend
            on the destination and product availability. Any timeline
            communicated is an estimate unless expressly confirmed
            otherwise.
          </p>

          <h2>6. Cancellations, returns and damaged products</h2>
          <p>
            Cancellation, replacement, refund and return requests should
            be raised through our contact page. The applicable resolution
            will depend on the confirmed order terms and applicable law.
            Nothing in these terms removes any rights you have under
            applicable consumer protection laws.
          </p>

          <h2>7. Website content</h2>
          <p>
            Website text, design and branding may not be copied or reused
            for commercial purposes without appropriate permission,
            except where permitted by law.
          </p>

          <h2>8. Third-party services</h2>
          <p>
            Links to services such as WhatsApp are provided for
            communication. Those services operate under their own terms
            and policies.
          </p>

          <h2>9. Changes to these terms</h2>
          <p>
            We may update these terms as our website and services evolve.
            Updated terms will be published on this page with a revised
            date.
          </p>

          <h2>10. Contact</h2>
          <p>
            For questions about these terms, please contact us through
            our contact page before placing an order.
          </p>

          <Link href="/contact" className="button">
            Contact Us
          </Link>
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
