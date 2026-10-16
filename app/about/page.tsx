
import Link from "next/link";

export default function AboutPage() {
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
            <Link href="/shop" className="icon-link">Shop</Link>
            <Link href="/cart" className="icon-link">My Bag</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="page-hero">
          <p className="eyebrow">OUR STORY</p>
          <h1>Some feelings deserve more than words.</h1>
          <p>
            They deserve a thoughtful gift, a beautiful unboxing,
            and a moment someone remembers long after the day is over.
          </p>
        </section>

        <section className="section">
          <div className="container">
            <div className="hero">
              <div className="hero-image">
                <img
                  src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1200&q=85"
                  alt="Beautifully wrapped gifts ready to be shared"
                />
              </div>

              <div className="content-page">
                <p className="eyebrow">THE HAMPERS HEAVEN PROMISE</p>
                <h2>Made for moments that matter.</h2>
                <p>
                  At Hampers Heaven, we believe gifting is about more
                  than what is inside a box. It is about the smile
                  when someone opens it, the surprise they did not
                  expect, and the feeling of being remembered.
                </p>
                <p>
                  Our vision is to make thoughtful gifting feel
                  effortless, personal and beautiful. Whether it is
                  a birthday, an anniversary, a celebration or a
                  simple reminder that you care, we want every gift
                  to feel special.
                </p>
                <Link href="/shop" className="button">
                  Find Your Perfect Gift
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--cream)" }}>
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">WHAT WE BELIEVE IN</p>
              <h2>The little things make it meaningful.</h2>
            </div>

            <div className="benefits">
              <article>
                <h3>Thoughtful by design</h3>
                <p>
                  Every hamper should feel considered, from the
                  combination of gifts to the finishing touches.
                </p>
              </article>

              <article>
                <h3>Beautiful presentation</h3>
                <p>
                  Because the excitement starts before the box is
                  even opened.
                </p>
              </article>

              <article>
                <h3>Made for every occasion</h3>
                <p>
                  From grand celebrations to small everyday
                  gestures, there is always a reason to make someone
                  feel appreciated.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container section-heading">
            <p className="eyebrow">LET'S MAKE SOMEONE SMILE</p>
            <h2>Your next thoughtful gift starts here.</h2>
            <p>
              Explore our collection and find something that says
              what words sometimes cannot.
            </p>
            <Link href="/shop" className="button">
              Explore the Collection
            </Link>
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
