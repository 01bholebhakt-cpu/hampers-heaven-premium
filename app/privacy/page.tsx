
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <>
      <div className="announcement">
        Your trust matters to us
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
          <p className="eyebrow">YOUR PRIVACY</p>
          <h1>Privacy Policy</h1>
          <p>
            How Hampers Heaven may handle information when you browse
            our website or contact us.
          </p>
        </div>

        <section className="form-card">
          <p className="muted">Last updated: October 2026</p>

          <h2>1. Information you provide</h2>
          <p>
            If you contact us or submit an order enquiry, you may
            choose to provide details such as your name, phone number,
            delivery address and gifting preferences.
          </p>

          <h2>2. How we use information</h2>
          <p>
            Information you provide may be used to respond to enquiries,
            discuss product availability, coordinate requested deliveries
            and provide customer support.
          </p>

          <h2>3. WhatsApp communication</h2>
          <p>
            Our website may link to WhatsApp so you can contact us.
            When you use WhatsApp, your communication is also subject
            to WhatsApp's own terms and privacy policy.
          </p>

          <h2>4. Payments</h2>
          <p>
            This website currently provides an enquiry-based checkout.
            It does not process online payments through this page.
            Confirm payment arrangements directly with us before paying.
          </p>

          <h2>5. Cookies and technical information</h2>
          <p>
            The website may use browser storage for features such as
            your shopping bag or wishlist. Hosting and website services
            may also process technical information needed to operate
            and secure the site.
          </p>

          <h2>6. Sharing and security</h2>
          <p>
            We do not intend to sell your personal information. Details
            may need to be shared with relevant service providers to
            operate the website or fulfil a requested service. No
            online service can guarantee absolute security.
          </p>

          <h2>7. Your choices</h2>
          <p>
            You can choose what information to share when contacting
            us. For a privacy-related request, please reach out through
            our contact page.
          </p>

          <h2>8. Contact us</h2>
          <p>
            For questions about this policy, contact Hampers Heaven
            through WhatsApp or our contact page.
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
