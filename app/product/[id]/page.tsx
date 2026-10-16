
import Link from "next/link";
import { notFound } from "next/navigation";

const products = [
  {
    id: "rose-gold",
    name: "The Rose Gold Hamper",
    category: "Birthday Gifts",
    price: 1499,
    oldPrice: 1999,
    badge: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1100&q=90",
    description:
      "A thoughtful collection wrapped in elegance. A beautiful choice for birthdays, celebrations and the people who make life special.",
    contents: [
      "Beautifully presented gift box",
      "Curated gifting selection",
      "Decorative gift wrapping",
      "Personal message on request",
    ],
  },
  {
    id: "sweet-moments",
    name: "Sweet Moments Box",
    category: "Chocolate Gifts",
    price: 999,
    oldPrice: 1299,
    badge: "LOVED",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1100&q=90",
    description:
      "A charming gift box for someone truly special. A sweet way to celebrate birthdays, say thank you or make an ordinary day memorable.",
    contents: [
      "Premium-style gift presentation",
      "Curated sweet gifting selection",
      "Decorative wrapping",
      "Personal message on request",
    ],
  },
  {
    id: "celebration",
    name: "The Celebration Edit",
    category: "Celebration Gifts",
    price: 1899,
    oldPrice: 2499,
    badge: "SPECIAL",
    image:
      "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=1100&q=90",
    description:
      "A beautiful surprise for life's biggest moments. Give your favourite people a thoughtful gift that feels as special as the occasion.",
    contents: [
      "Celebration-inspired gift box",
      "Curated gift selection",
      "Decorative presentation",
      "Personal message on request",
    ],
  },
  {
    id: "little-love",
    name: "A Little Love Box",
    category: "Anniversary Gifts",
    price: 799,
    oldPrice: 999,
    badge: "GIFT PICK",
    image:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1100&q=90",
    description:
      "Small details, big feelings. This thoughtful gift is made for sweet surprises, little celebrations and heartfelt gestures.",
    contents: [
      "Thoughtfully styled gift box",
      "Curated gift selection",
      "Gift-ready presentation",
      "Personal message on request",
    ],
  },
  {
    id: "golden-glow",
    name: "Golden Glow Hamper",
    category: "Premium Gifts",
    price: 2199,
    oldPrice: 2699,
    badge: "PREMIUM",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1100&q=90",
    description:
      "An elevated gift for unforgettable moments. Choose this elegant hamper when you want your surprise to feel extra special.",
    contents: [
      "Premium-style gift packaging",
      "Curated hamper selection",
      "Decorative finishing touches",
      "Personal message on request",
    ],
  },
  {
    id: "just-because",
    name: "Just Because Box",
    category: "Surprise Gifts",
    price: 699,
    oldPrice: 899,
    badge: "THOUGHTFUL",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1100&q=90",
    description:
      "No occasion needed. Send a little happiness to someone who deserves to know that they are on your mind.",
    contents: [
      "Charming gift box",
      "Curated surprise selection",
      "Gift-ready presentation",
      "Personal message on request",
    ],
  },
  {
    id: "choco-love",
    name: "Chocolate Love Hamper",
    category: "Chocolate Gifts",
    price: 1299,
    oldPrice: 1599,
    badge: "SWEET PICK",
    image:
      "https://images.unsplash.com/photo-1548907040-4d42cfc2b6b2?auto=format&fit=crop&w=1100&q=90",
    description:
      "A sweet way to show someone you care. Perfect for thoughtful surprises, celebrations and little moments of happiness.",
    contents: [
      "Chocolate-inspired gift presentation",
      "Curated sweet selection",
      "Decorative wrapping",
      "Personal message on request",
    ],
  },
  {
    id: "signature",
    name: "The Signature Gift Box",
    category: "Premium Gifts",
    price: 2499,
    oldPrice: 2999,
    badge: "SIGNATURE",
    image:
      "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=1100&q=90",
    description:
      "Our signature-style gift box is designed for those occasions when only a thoughtful, beautifully presented surprise will do.",
    contents: [
      "Signature-style gift packaging",
      "Curated gift selection",
      "Decorative finishing touches",
      "Personal message on request",
    ],
  },
];

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  const whatsappUrl =
    "https://wa.me/919122930001?text=" +
    encodeURIComponent(
      `Hi Hampers Heaven! I'm interested in ${product.name} priced at ₹${product.price}. Please share availability, exact hamper contents and delivery details.`
    );

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  const relatedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  return (
    <main>
      <div className="announcement">
        THOUGHTFUL GIFTS, BEAUTIFULLY PRESENTED ♡
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

      <div className="container" style={{ paddingTop: 25 }}>
        <p style={{ color: "#8b777b", fontSize: 12 }}>
          <Link href="/">Home</Link>
          {" / "}
          <Link href="/shop">Shop</Link>
          {" / "}
          {product.name}
        </p>
      </div>

      <section className="section" style={{ paddingTop: 30 }}>
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
            gap: 55,
            alignItems: "start",
          }}
        >
          <div>
            <div className="product-image">
              <img
                src={product.image}
                alt={product.name}
                style={{ aspectRatio: "0.9", width: "100%", objectFit: "cover" }}
              />
              <span className="product-badge">{product.badge}</span>
            </div>

            <div className="notice" style={{ marginTop: 18 }}>
              Product photographs are illustrative. Confirm the exact hamper
              contents and availability with us before placing an order.
            </div>
          </div>

          <div>
            <span className="eyebrow">{product.category}</span>

            <h1
              style={{
                margin: "16px 0",
                fontSize: "clamp(35px, 4vw, 52px)",
                lineHeight: 1.2,
              }}
            >
              {product.name}
            </h1>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 12,
                margin: "20px 0",
              }}
            >
              <span style={{ color: "#713b4a", fontSize: 26, fontWeight: 700 }}>
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              <del style={{ color: "#a89a9c", fontSize: 16 }}>
                ₹{product.oldPrice.toLocaleString("en-IN")}
              </del>
              <span
                style={{
                  padding: "6px 10px",
                  background: "#f5e5e5",
                  color: "#713b4a",
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                {discount}% OFF
              </span>
            </div>

            <p style={{ color: "#806e70", fontSize: 14, lineHeight: 2 }}>
              {product.description}
            </p>

            <div
              style={{
                marginTop: 30,
                padding: "22px 0",
                borderTop: "1px solid #eadbd8",
                borderBottom: "1px solid #eadbd8",
              }}
            >
              <h2 style={{ fontSize: 24, marginTop: 0 }}>
                The thoughtful details
              </h2>

              <ul style={{ paddingLeft: 20, color: "#806e70", lineHeight: 2.3 }}>
                {product.contents.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="notice">
              <strong>Want to order this hamper?</strong>
              <br />
              Message us to confirm the contents, availability, delivery
              location and final price before ordering.
            </div>

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="button"
              style={{ width: "100%", marginTop: 15 }}
            >
              ENQUIRE ON WHATSAPP ↗
            </Link>

            <Link
              href="/shop"
              className="button button-outline"
              style={{ width: "100%", marginTop: 12 }}
            >
              CONTINUE SHOPPING
            </Link>

            <div style={{ marginTop: 28, color: "#806e70", fontSize: 12, lineHeight: 2 }}>
              <p>♡ Thoughtful gift presentation</p>
              <p>♡ Personal message requests welcome</p>
              <p>♡ Delivery details confirmed before ordering</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#f8f0e9" }}>
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">A LITTLE MORE TO LOVE</span>
            <h2>
              You may also <em>adore.</em>
            </h2>
          </div>

          <div className="product-grid">
            {relatedProducts.map((item) => (
              <article className="product-card" key={item.id}>
                <Link
                  href={`/product/${item.id}`}
                  className="product-image"
                >
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <span className="product-badge">{item.badge}</span>
                </Link>

                <div className="product-info">
                  <Link href={`/product/${item.id}`}>
                    <h3>{item.name}</h3>
                  </Link>
                  <p>{item.description}</p>
                  <div className="product-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </div>
                  <Link
                    href={`/product/${item.id}`}
                    className="button"
                    style={{ marginTop: 14 }}
                  >
                    VIEW GIFT ↗
                  </Link>
                </div>
              </article>
            ))}
          </div>
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
